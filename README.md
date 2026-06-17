# HIROKI.DEV — Shooter Portfolio

シューティングゲーム風の個人事業主ポートフォリオサイト。
黒背景・ドット絵・レトロアーケード UIをコンセプトに、Astro で構築されています。

## コンセプト

- 上部 HUD ナビのメニューをクリックすると、画面下の自機から弾が発射される
- 弾がメニューに命中 → 爆発エフェクト → ページが上からスライドして開く
- マウスに追随して動く自機
- 流れる星 / スキャンライン / グリッドオーバーレイ

## 技術スタック

- **Astro 4** — ゼロ JS の静的サイト生成
- **TypeScript** — 全スクリプト型安全
- **Pure CSS アニメーション** — 弾道・爆発は Canvas 2D
- **Google Fonts: Press Start 2P** — ドット絵フォント

## ディレクトリ構成

```
src/
├── components/
│   ├── BulletCanvas.astro   # 弾・爆発エフェクト (Canvas 2D)
│   ├── Hero.astro           # メイン画面の中央テキスト
│   ├── HUD.astro            # 上部ナビ・スコア表示
│   ├── PagePanel.astro      # 上からスライドするページパネル
│   ├── PlayerShip.astro     # 自機 SVG (マウス追随)
│   └── StarField.astro      # 流れる星の背景
├── data/
│   └── pages.ts             # 各ページのコンテンツデータ
├── layouts/
│   └── BaseLayout.astro     # HTML ベースレイアウト
├── pages/
│   └── index.astro          # メインページ
├── scripts/
│   └── game.ts              # ゲームロジック統合スクリプト
└── styles/
    ├── global.css           # グローバルスタイル・CSS 変数
    └── pages.css            # ページコンテンツスタイル
public/
└── favicon.svg              # ピクセルアートファビコン
```

## セットアップ

```bash
npm install
npm run dev       # 開発サーバー起動 (localhost:4321)
npm run build     # 本番ビルド
npm run preview   # ビルドプレビュー
```

## カスタマイズ

### コンテンツの編集
`src/data/pages.ts` を編集してください。各ページの `title` と `content` (HTML文字列) を変更できます。

### カラーテーマ
`src/styles/global.css` の `:root` セクションにある CSS 変数を変更します：

```css
--color-primary: #00ff41;   /* メインカラー (緑) */
--color-accent: #ffff00;    /* アクセントカラー (黄) */
--color-danger: #ff3333;    /* 危険色 (赤) */
```

## AWS Amplify へのデプロイ

```bash
npm run build
# dist/ フォルダを Amplify に接続
```

`amplify.yml` 設定例:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
