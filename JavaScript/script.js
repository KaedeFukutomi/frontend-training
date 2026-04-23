const users = [
  {
    id: 1,
    name: "山田 太郎",
    role: "フロントエンドエンジニア",
    description: "UI実装とアクセシビリティ改善が得意です。",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "佐藤 花子",
    role: "バックエンドエンジニア",
    description: "API設計とデータベース設計を担当しています。",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "鈴木 健",
    role: "デザイナー",
    description: "情報設計とデザインシステム構築が得意です。",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "高橋 美咲",
    role: "QAエンジニア",
    description: "テスト設計と品質改善を推進しています。",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "伊藤 翔",
    role: "フロントエンドエンジニア",
    description: "JavaScriptのパフォーマンス改善が得意です。",
    imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "中村 葵",
    role: "プロジェクトマネージャー",
    description: "進行管理とチーム連携の最適化を担当しています。",
    imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80"
  }
];

// TODO: 必要なHTML要素を取得してください
// →users配列をhtmlに変換して画面表示を行う
// 例: document.querySelector("#cardList")

const cardList = document.querySelector("#cardList");
//HTMLから<div id="cardList">を取得して、cardList変数に代入

users.forEach(user => {
  //ユーザーを1件ずつ処理
  const card = `
  <div class ="card">
   <img scr ="${user.imageUrl}" alt="${user.name}">
    <h2>${user.name}</h2>
    <p>${user.role}</p>
    <p>${user.description}</p>
  </div>
  `
  //div内の要素をすべてカードの中に入れている
  cardList.innerHTML += card;
  //jsのデータをhtml文字列に追加している
  // += にすることで、既存の内容を消さずに新しいカードを追加している
  //　₌ の場合は、毎回内容が上書きされるため1件のカードしか表示されない
  // INNERHTMLは、HTML要素の内容を文字列として取得・設定するプロパティ
});

/** NOTE: 必要なHTML要素を取得してからコメントアウトを解除してください */

const resultCountElement = document.querySelector("#resultCount");
//HTMLから<div id="resultCount">を取得して、resultCountElement変数に代入

function updateResultCount(count) {
  //updateResultCountという名前の関数を作って、countという値を受け取る
  //functionは関数を作る宣言
  //updateResultCountは表示件数を更新する関数
  //countは表示件数の数値を受け取る引数
  resultCountElement.textContent = `${count}件表示`;
  //textContentを使用して、安全に文字のみを表示させる
}
updateResultCount(users.length);
//ユーザーの数を数えて、関数に渡している

/** NOTE: 必要なHTML要素を取得してからコメントアウトを解除してください */
// 検索結果が0件のときのメッセージ表示/非表示を切り替えます。
const emptyMessageElement = document.querySelector("#emptyMessage");
function toggleEmptyMessage(shouldShow) {
  emptyMessageElement.classList.toggle("is-hidden", !shouldShow);
  //shouldShowがtrueなら表示、falseなら非表示にする
}
toggleEmptyMessage(users.length === 0);
//検索結果が0件かどうかを判定
//shouldShowは、検索結果が0件の場合はtrue、そうでない場合はfalseを受け取る引数

/** NOTE: 必要なHTML要素を取得してからコメントアウトを解除してください */
// ユーザーデータ1件分のカード要素をテンプレートから生成します。
const profileCardTemplate = document.querySelector("#profileCardTemplate");
function createCard(user) {
  // template要素を複製して、カードの土台を作成します。
  const cardFragment = profileCardTemplate.content.cloneNode(true);
  const imageElement = cardFragment.querySelector(".profile-image");
  const roleElement = cardFragment.querySelector(".profile-role");
  const nameElement = cardFragment.querySelector(".profile-name");
  const descriptionElement = cardFragment.querySelector(".profile-description");
  //ユーザー情報をセット

  // 渡されたユーザー情報でカード内容を埋めます。
  imageElement.src = user.imageUrl;
  //src属性にユーザーの画像URLをセット
  //user.imageUrlを入れることで、配列ユーザーごとに違う画像をカードに表示させる
  imageElement.alt = `${user.name}のプロフィール画像`;
  //alt属性にユーザーの名前を含む説明文をセット
  roleElement.textContent = user.role;
  nameElement.textContent = user.name;
  descriptionElement.textContent = user.description;
  //textContentを使用して、ユーザーの役職、名前、説明をカードに表示させる
  return cardFragment;
}

// TODO: 一覧表示を行う関数を作成してください
// 要件:
// - 引数で受け取ったデータ配列をもとにカードを表示する
// - cardListの中身を更新する
// - resultCountに表示件数を反映する
// - データが0件なら emptyMessage を表示する

const cardListElement = document.querySelector("#cardList"); // カードを並べる場所
function renderCards(userList) {
  // 再描画前に既存のカードをクリアします。
  cardListElement.innerHTML = "";

  /**
   * TODO: ユーザーごとにカードを作成してDOMに追加します。
   * //DOMとは、HTMLやXMLの構造をJSから操作できる形にしたもの
   * DOMへの追加メソッドはappendChildメソッドを使用します。
   */
  userList.forEach(user => {
    //ユーザーをアロー関数を用いて1件ずつ処理
    const card = createCard(user);
    //createCard(user)は1人分のカード（DOM要素）を作る関数
    cardListElement.appendChild(card);
    //画面にカードを表示させる処理
  });

  // TODO: 件数表示と空状態メッセージを最新状態に同期します。
  resultCountElement.textContent = `${userList.length}件表示`;
  //件数表示を更新する処理
  emptyMessageElement.classList.toggle("is-hidden", userList.length > 0);
  //データが0件（条件：userList.length > 0）の場合、emptyMessageを表示する処理
  //trueの場合はis-hiddenクラスを追加して非表示、falseの場合はis-hiddenクラスを削除して表示する
}

// TODO: 検索・絞り込みを行う関数を作成してください
// 要件:
// - 空文字の場合は全件表示
// - 名前または役職にキーワードを含むユーザーのみを返します。
function filterUsers(keyword) {
  // 前後空白を除去し、大文字小文字を区別しない比較用に正規化します。
  const normalizedKeyword = keyword.trim().toLowerCase();

  // TODO: 空文字の場合は全件表示します。
  if (normalizedKeyword === "") {
    // 空文字の場合は全件表示
    return users;
  }

  // TODO: 名前または役職にキーワードを含むユーザーのみを返します。
  return users.filter(user => {
    //user => {...}は、ユーザーを1件ずつ処理するアロー関数
    const name = user.name.toLowerCase();
    const role = user.role.toLowerCase();
    //toLowerCase();は、文字列をすべて小文字に変換するメソッド

    return name.includes(normalizedKeyword) || role.includes(normalizedKeyword);
    //includes()は、文字列が特定の文字列を含むかどうかを判断するメソッド
    //ユーザーの名前または役職に、正規化されたキーワードが含まれているかをチェックし、どちらかがtrueの場合はそのユーザーを返す
  })

}

// TODO: 検索入力の現在値を使って一覧を再描画してください
// 要件:
// - 入力値の取得
// - filterUsers を呼び出して一覧を再描画します。
function handleSearch() {
  // TODO: 入力値の取得
  const keyword = document.querySelector("#searchInput").value;
  // TODO: filterUsers を呼び出して一覧を再描画します。
  const filteredUsers = filterUsers(keyword);
  //filterUsers関数を呼び出して、検索キーワードに基づいてユーザーをフィルタリングする
  renderCards(filteredUsers);
  //renderCards関数を呼び出して、フィルタリングされたユーザーのカードを再描画する
}

// TODO: 初回表示処理を実装してください
// 画面を開いたときに users が一覧表示されるようにする
renderCards(users);

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", handleSearch);
//検索ボタンの要素を取得し、ボタンがクリックされたときに処理を実施する設定
//handleSearch関数は、ユーザーの操作を検知し検索処理を実行するための関数
