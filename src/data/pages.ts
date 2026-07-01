export interface PageData {
  title: string;
  content: string;
}

export const pages: Record<string, PageData> = {
  about: {
    title: '-- ABOUT.EXE --',
    content: `
      <div class="page-about">
        <div class="about-grid">
          <div class="pixel-card">
            <h3 class="card-title">PROFILE.DAT</h3>
            <div class="profile-avatar" aria-hidden="true">
              <svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="6" height="6" fill="#00ff41"/>
                <rect x="4" y="2" width="1" height="4" fill="#00ff41"/>
                <rect x="11" y="2" width="1" height="4" fill="#00ff41"/>
                <rect x="6" y="3" width="1" height="2" fill="#000"/>
                <rect x="9" y="3" width="1" height="2" fill="#000"/>
                <rect x="6" y="6" width="4" height="1" fill="#000"/>
                <rect x="3" y="8" width="10" height="5" fill="#00ff41"/>
                <rect x="1" y="9" width="2" height="4" fill="#00ff41"/>
                <rect x="13" y="9" width="2" height="4" fill="#00ff41"/>
                <rect x="3" y="13" width="3" height="3" fill="#00ff41"/>
                <rect x="10" y="13" width="3" height="3" fill="#00ff41"/>
              </svg>
            </div>
            <table class="info-table">
              <tbody>
                <tr><td class="info-label">NAME</td><td class="info-val">Hiroki</td></tr>
                <tr><td class="info-label">TYPE</td><td class="info-val">SOFTWARE DEV</td></tr>
                <tr><td class="info-label">BASE</td><td class="info-val">徳島 / REMOTE OK</td></tr>
                <tr><td class="info-label">STATUS</td><td class="info-val status-ok">▶ 案件受付中</td></tr>
              </tbody>
            </table>
          </div>

          <div class="pixel-card">
            <h3 class="card-title">SPEC.DAT</h3>
            <p class="card-body">
              Java / TypeScript を軸に、フルスタック開発・
              AWSクラウドインフラ・モバイル開発を専門とするソフトウェア開発者。
            </p>
            <p class="card-body" style="margin-top: 12px;">
              Claude Code を活用したマルチエージェント開発パイプラインの設計・実装も手がける。
              個人事業主として各種プロダクト開発・受託開発に対応。
            </p>
          </div>

          <div class="pixel-card highlight-card">
            <h3 class="card-title">MISSION</h3>
            <p class="card-body highlight-text">
              「作りたいものを、ちゃんと動くものに」<br><br>
              アイデアの段階から一緒に考え、設計・実装・リリースまでを一気通貫でサポートします。
            </p>
          </div>
        </div>
      </div>
    `,
  },

  skills: {
    title: '-- SKILLS.DAT --',
    content: `
      <div class="page-skills">
        <div class="skills-grid">
          <div class="pixel-card">
            <h3 class="card-title">FRONTEND</h3>
            <div class="skill-tags">
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">Astro</span>
              <span class="skill-tag">Electron</span>
              <span class="skill-tag">Flutter</span>
            </div>
          </div>

          <div class="pixel-card">
            <h3 class="card-title">BACKEND</h3>
            <div class="skill-tags">
              <span class="skill-tag">Java / Spring</span>
              <span class="skill-tag">Node.js / Hono</span>
              <span class="skill-tag">Cloudflare Workers</span>
            </div>
          </div>

          <div class="pixel-card">
            <h3 class="card-title">CLOUD / INFRA</h3>
            <div class="skill-tags">
              <span class="skill-tag">AWS Lambda</span>
              <span class="skill-tag">AWS Amplify</span>
              <span class="skill-tag">Route 53 / SES</span>
            </div>
          </div>

          <div class="pixel-card">
            <h3 class="card-title">AI / TOOLS</h3>
            <div class="skill-tags">
              <span class="skill-tag accent">Claude Code</span>
              <span class="skill-tag accent">Multi-Agent Dev</span>
              <span class="skill-tag accent">MCP Integration</span>
            </div>
          </div>
        </div>
      </div>
    `,
  },

  works: {
    title: '-- WORKS.LOG --',
    content: `
      <div class="page-works">
        <div class="works-grid">
          <article class="work-card">
            <div class="work-thumb">
              <svg width="48" height="48" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="1" y="0" width="10" height="7" fill="#001a00" stroke="#00ff41" stroke-width="0.5"/>
                <rect x="2" y="1" width="8" height="5" fill="#002200"/>
                <rect x="3" y="2" width="2" height="3" fill="#00ff41" opacity="0.7"/>
                <rect x="7" y="2" width="2" height="3" fill="#00ff41" opacity="0.7"/>
                <rect x="4" y="8" width="4" height="1" fill="#00ff41"/>
                <rect x="2" y="9" width="8" height="1" fill="#00ff41"/>
                <rect x="5" y="10" width="2" height="2" fill="#00ff41"/>
              </svg>
            </div>
            <h3 class="work-title">LIVE STREAM TOOL</h3>
            <p class="work-desc">配信用リターン画面ツール。OBS映像・キューテキスト・時計を組み合わせたフルスクリーンHDMI出力アプリ。</p>
            <div class="work-tags">
              <span class="tag">Electron</span><span class="tag">React</span><span class="tag">TypeScript</span><span class="tag">obs-websocket</span>
            </div>
          </article>

          <article class="work-card">
            <div class="work-thumb">
              <svg width="48" height="48" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="1" width="3" height="9" fill="#001a00" stroke="#ffff00" stroke-width="0.5"/>
                <rect x="5" y="3" width="3" height="7" fill="#001a00" stroke="#ffff00" stroke-width="0.5"/>
                <rect x="8" y="5" width="3" height="5" fill="#001a00" stroke="#ffff00" stroke-width="0.5"/>
                <rect x="2" y="1" width="3" height="4" fill="#ffff00" opacity="0.6"/>
                <rect x="5" y="3" width="3" height="3" fill="#ffff00" opacity="0.4"/>
                <rect x="8" y="5" width="3" height="2" fill="#ffff00" opacity="0.3"/>
              </svg>
            </div>
            <h3 class="work-title">CLIP AGGREGATOR</h3>
            <p class="work-desc">YouTube切り抜き動画の集約アプリ。Cloudflare Workers + D1バックエンド + Flutter フロントエンド。</p>
            <div class="work-tags">
              <span class="tag">Flutter</span><span class="tag">Hono</span><span class="tag">Cloudflare D1</span><span class="tag">Riverpod</span>
            </div>
          </article>

          <article class="work-card">
            <div class="work-thumb">
              <svg width="48" height="48" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="1" y="2" width="10" height="8" fill="#001a00" stroke="#00aaff" stroke-width="0.5"/>
                <rect x="3" y="4" width="6" height="1" fill="#00aaff" opacity="0.8"/>
                <rect x="3" y="6" width="4" height="1" fill="#00aaff" opacity="0.5"/>
                <rect x="3" y="8" width="5" height="1" fill="#00aaff" opacity="0.4"/>
                <rect x="3" y="1" width="3" height="1" fill="#00aaff"/>
              </svg>
            </div>
            <h3 class="work-title">FREELANCE HOMEPAGE</h3>
            <p class="work-desc">個人ポートフォリオサイト。Route53 DNSとサーバーレスお問い合わせフォームを備えた静的サイト。</p>
            <div class="work-tags">
              <span class="tag">Astro</span><span class="tag">AWS Amplify</span><span class="tag">Lambda</span><span class="tag">SES</span>
            </div>
          </article>

          <article class="work-card">
            <div class="work-thumb">
              <svg width="48" height="48" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="2" width="3" height="3" fill="#001a00" stroke="#00ff41" stroke-width="0.5"/>
                <rect x="7" y="2" width="3" height="3" fill="#001a00" stroke="#00ff41" stroke-width="0.5"/>
                <rect x="2" y="7" width="3" height="3" fill="#001a00" stroke="#00ff41" stroke-width="0.5"/>
                <rect x="7" y="7" width="3" height="3" fill="#001a00" stroke="#00ff41" stroke-width="0.5"/>
                <rect x="5" y="3" width="2" height="1" fill="#00ff41"/>
                <rect x="5" y="5" width="2" height="2" fill="#00ff41"/>
                <rect x="3" y="5" width="2" height="2" fill="#00ff41"/>
                <rect x="7" y="5" width="2" height="2" fill="#00ff41"/>
                <rect x="5" y="8" width="2" height="1" fill="#00ff41"/>
              </svg>
            </div>
            <h3 class="work-title">KARUTA CARD GAME</h3>
            <p class="work-desc">お仕事カルタゲーム。ドラッグ&ドロップ機構を持つWebベースの日本語カードゲーム。</p>
            <div class="work-tags">
              <span class="tag">Vite</span><span class="tag">TypeScript</span><span class="tag">dnd-kit</span><span class="tag">Amplify</span>
            </div>
          </article>
        </div>
      </div>
    `,
  },

  contact: {
    title: '-- CONTACT.SYS --',
    content: `
      <div class="page-contact">
        <div class="contact-grid">
          <div class="pixel-card">
            <h3 class="card-title">TRANSMISSION CHANNEL</h3>
            <ul class="contact-list">
              <li class="contact-item">
                <span class="contact-label">EMAIL</span>
                <a class="contact-val" href="mailto:hello@hiroki.dev">hello@hiroki.dev</a>
              </li>
              <li class="contact-item">
                <span class="contact-label">GITHUB</span>
                <a class="contact-val" href="https://github.com/" target="_blank" rel="noopener">github.com/hiroki</a>
              </li>
              <li class="contact-item">
                <span class="contact-label">X / TWITTER</span>
                <a class="contact-val" href="https://x.com/" target="_blank" rel="noopener">@hiroki_dev</a>
              </li>
              <li class="contact-item">
                <span class="contact-label">BASE</span>
                <span class="contact-val">徳島 / フルリモート対応</span>
              </li>
            </ul>
          </div>

          <div class="pixel-card">
            <h3 class="card-title">SYSTEM STATUS</h3>
            <ul class="status-list">
              <li class="status-item ok">▶ 新規案件受付中</li>
              <li class="status-item ok">▶ フルリモート対応</li>
              <li class="status-item ok">▶ 返信：24時間以内</li>
              <li class="status-item warn">▲ 長期・スポット両対応</li>
            </ul>
          </div>

          <div class="pixel-card contact-cta">
            <h3 class="card-title">SEND MESSAGE</h3>
            <p class="card-body">お仕事のご相談・ご依頼はお気軽にどうぞ。</p>
            <a class="cta-btn" href="mailto:hello@hiroki.dev">[ EMAIL を送る → ]</a>
          </div>
        </div>
      </div>
    `,
  },
};
