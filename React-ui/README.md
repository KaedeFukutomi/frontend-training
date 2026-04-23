# React基礎課題

課題のゴールは、配布されたUIをベースに、React で画面をコンポーネント分割し、`props` と `state` を使って動的UIを実装することです。

---

## 1. 事前準備

以下を準備してください。

- Node.js
- npm
- Visual Studio Code などのエディタ

### Node.js / npm の確認

ターミナルで次を実行してください。

```bash
node -v
npm -v
```

どちらもバージョンが表示されれば準備OKです。

---

## 2. プロジェクトを開く

zip を展開して、`react-sample-ui` フォルダをエディタで開いてください。

例:

```bash
cd react-sample-ui
```

---

## 3. 依存パッケージをインストールする

プロジェクト直下で次を実行してください。

```bash
npm install
```

`node_modules` フォルダが作成されればOKです。

---

## 4. 開発サーバーを起動する

```bash
npm start
```

起動後、ブラウザで次のURLを開いてください。

```text
http://localhost:3000
```

画面が表示されたら起動完了です。

終了したい場合は、ターミナルで `Ctrl + C` を押してください。

---

## 5. よく使うコマンド

### 開発サーバー起動

```bash
npm start
```

---

## 6. フォルダ構成

```text
src/
  components/
    atoms/
    molecules/
    organisms/
    templates/
    pages/
  data/
  styles/
```

### Atomic Design の役割

- **atoms**: 最小単位のUI部品
- **molecules**: 小さな組み合わせ部品
- **organisms**: 画面内のまとまり
- **templates**: レイアウトの骨組み
- **pages**: 画面全体の状態管理と組み立て

---

## 7. このスターターでやること

主に `src/components/pages/HomePage.jsx` 内にあるTODOを進めてください。

### 追加で挑戦してよいこと

- 「お気に入り」機能の追加
- 詳細表示の初期状態変更
- コンポーネントの責務整理
- データ件数の表示

---

## 8. 詰まったときの確認ポイント

- `npm install` を実行したか
- `npm start` を実行したか
- `http://localhost:3000` を開いているか
- ターミナルにエラーが出ていないか
- ブラウザの開発者ツールの Console にエラーが出ていないか

---
