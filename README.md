# AwaStudio — Shooter Portfolio

シューティングゲーム風の個人事業主ポートフォリオサイト。
黒背景・ドット絵・レトロアーケード UIをコンセプトに、Astro で構築されています。

公開URL: https://awastudio.jp

## コンセプト

- 上部 HUD ナビのメニューをクリックすると、画面下の自機から弾が発射される
- 弾がメニューに命中 → 爆発エフェクト → ページが上からスライドして開く
- すでにページを開いている状態で別メニューを撃つときは、先にウィンドウを閉じてから発射するため、弾道が隠れず見える
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
├── favicon.svg              # ピクセルアートファビコン
└── CNAME                    # 独自ドメイン (awastudio.jp)
.github/
└── workflows/
    └── deploy.yml           # GitHub Pages 自動デプロイ
SITE_INFO.md                 # サイト掲載情報の入力シート
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
掲載情報をまとめて見直す場合は `SITE_INFO.md` の入力シートを利用できます。

### カラーテーマ
`src/styles/global.css` の `:root` セクションにある CSS 変数を変更します：

```css
--color-primary: #00ff41;   /* メインカラー (緑) */
--color-accent: #ffff00;    /* アクセントカラー (黄) */
--color-danger: #ff3333;    /* 危険色 (赤) */
```

## デプロイ (GitHub Pages)

`main` ブランチへのプッシュで、`.github/workflows/deploy.yml` が自動的にビルド＆デプロイします。
ホスティングは無料で、独自ドメイン `awastudio.jp` の DNS のみ Route 53 で管理しています。

### 初回セットアップ

1. **GitHub Pages を有効化**
   `Settings → Pages → Build and deployment` の Source を **「GitHub Actions」** に設定する。

2. **Route 53 に DNS レコードを追加**（`awastudio.jp` のホストゾーン）
   - apex (`awastudio.jp`) に A レコード（GitHub の固定 IP）:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - `www` に CNAME レコード: `idono28.github.io`

3. **HTTPS を有効化**
   DNS 反映後、`Settings → Pages` で **「Enforce HTTPS」** にチェックする（証明書発行に時間がかかる場合あり）。

独自ドメインは `public/CNAME` で指定しており、ビルド時に `dist/CNAME` として出力されます。
