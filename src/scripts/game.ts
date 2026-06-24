// game.ts — Main orchestration: ship movement, nav click → fire, bullet-hit → open panel

import { pages } from '../data/pages';

interface NavTarget {
  el: HTMLElement;
  page: string;
}

function getShipCenter(): { x: number; y: number } {
  const ship = document.getElementById('playerShip') as HTMLElement;
  const wrapper = document.getElementById('shipWrapper') as HTMLElement;
  if (!ship || !wrapper) return { x: window.innerWidth / 2, y: window.innerHeight - 50 };
  const rect = wrapper.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top,
  };
}

function getNavTargetCenter(el: HTMLElement): { x: number; y: number } {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.bottom,
  };
}

// Ship follows mouse
function initShipControl() {
  const wrapper = document.getElementById('shipWrapper') as HTMLElement;
  if (!wrapper) return;

  let targetX = window.innerWidth / 2;
  let currentX = targetX;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
  });

  function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
  }

  function tick() {
    currentX = lerp(currentX, targetX, 0.1);
    wrapper.style.left = Math.round(currentX) + 'px';
    wrapper.style.transform = 'translateX(-50%)';
    requestAnimationFrame(tick);
  }
  tick();
}

// Panel open/close
let currentPage: string | null = null;
let score = 0;

function openPanel(page: string, navEl: HTMLElement) {
  const panel = document.getElementById('pagePanel')!;
  const panelTitle = document.getElementById('panelTitle')!;
  const panelContent = document.getElementById('panelContent')!;
  const profileArea = document.getElementById('profileArea');

  const data = pages[page];
  if (!data) return;

  currentPage = page;
  panelTitle.textContent = data.title;
  panelContent.innerHTML = data.content;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');

  document.querySelectorAll<HTMLElement>('.nav-item').forEach((n) => n.classList.remove('active'));
  navEl.classList.add('active');

  if (profileArea) profileArea.style.opacity = '0.08';
}

function closePanel() {
  const panel = document.getElementById('pagePanel')!;
  const profileArea = document.getElementById('profileArea');

  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  currentPage = null;

  document.querySelectorAll<HTMLElement>('.nav-item').forEach((n) => n.classList.remove('active'));
  if (profileArea) profileArea.style.opacity = '1';
}

function updateScore(delta: number) {
  score += delta;
  const el = document.getElementById('scoreValue');
  if (el) el.textContent = String(score).padStart(4, '0');
}

// Fire bullet toward a nav item
function fireBullet(navEl: HTMLElement, page: string) {
  const { x: startX, y: startY } = getShipCenter();
  const { x: targetX, y: targetY } = getNavTargetCenter(navEl);

  window.dispatchEvent(
    new CustomEvent('fire-bullet', {
      detail: { startX, startY, targetX, targetY, page, navEl },
    })
  );
}

// Wiring
function init() {
  initShipControl();

  // Close animation duration — matches `.page-panel` transition in PagePanel.astro (0.45s)
  const PANEL_CLOSE_MS = 460;

  // Nav clicks → fire bullet
  document.querySelectorAll<HTMLElement>('.nav-item').forEach((item) => {
    item.addEventListener('click', () => {
      const page = item.dataset.page;
      if (!page) return;
      if (currentPage === page) return; // already open

      if (currentPage) {
        // Another panel is open — close it first so the bullet flight is visible,
        // then fire once the window has slid away.
        closePanel();
        setTimeout(() => fireBullet(item, page), PANEL_CLOSE_MS);
      } else {
        fireBullet(item, page);
      }
    });
  });

  // Bullet hit → open panel + add score
  window.addEventListener('bullet-hit', (e: Event) => {
    const { page, navEl } = (e as CustomEvent).detail;
    updateScore(100);
    setTimeout(() => openPanel(page, navEl), 180);
  });

  // Close panel
  document.getElementById('closeBtn')?.addEventListener('click', closePanel);

  // ESC key closes panel
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentPage) closePanel();
  });
}

document.addEventListener('DOMContentLoaded', init);
