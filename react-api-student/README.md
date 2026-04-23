# React + API モジュール 受講者版

このディレクトリは、**React + API モジュールの受講者配布版**です。  
React基礎(UI)の構成に合わせて、Atomic Design を意識したフォルダ構成にしています。

## この課題でやること

- APIからユーザー一覧を取得する
- 取得したデータをカード一覧で表示する
- 検索フォームで一覧を絞り込む
- `loading / error / 空データ` の表示を切り替える

## 使用API

- JSONPlaceholder の `/users`
- URL: `https://jsonplaceholder.typicode.com/users`

## 起動方法

```bash
npm install
npm start
```

ブラウザで `http://localhost:3000` を開いて確認してください。

## テスト実行

```bash
npm test
```

## フォルダ構成

```text
src/
├─ components/
│  ├─ atoms/
│  ├─ molecules/
│  ├─ organisms/
│  ├─ templates/
│  └─ pages/
├─ hooks/
│  └─ useUsers.js
└─ utils/
   └─ filterUsers.js
```

## 進め方の目安

1. `useUsers.js` で API取得処理を実装する
2. `filterUsers.js` で絞り込み処理を実装する
3. `HomePage.js` で state と表示切り替えを実装する
4. `UserList.js` と `UserCard.js` で一覧表示を完成させる

## 事前に用意しているもの

- 基本的なフォルダ構成
- 画面のスタイル
- ヘッダー / フッター / 検索フォームの土台
- ステータスメッセージ表示用コンポーネント

## 課題のポイント

- `fetch` の結果をそのまま画面に書かず、stateで管理すること
- `loading` と `error` を分けて扱うこと
- 一覧の絞り込みは、取得済みデータに対して行うこと
- 1ファイルに全部書かず、役割ごとに分けること
