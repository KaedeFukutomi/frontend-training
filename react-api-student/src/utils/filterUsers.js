function filterUsers(users, keyword) {
  // functionは関数を定義するキーワード
  //　filterUsersは関数の名前
  //（users, keyword) は引数

  // 前後の空白を除去して、小文字に揃える
  const normalizedKeyword = keyword.trim().toLowerCase();

  // TODO:
  // 検索キーワードが空なら全件返す
  if (!normalizedKeyword) {
    return users;
  }

  return users.filter((user) => {
    // 名前、メールアドレス、会社名を検索対象にする
    const searchableText = `${user.name} ${user.email} ${user.company?.name ?? ''}`.toLowerCase();

    // TODO:
    // 部分一致していれば残す
    return searchableText.includes(normalizedKeyword);
  });
}

export default filterUsers;
// export defaultで関数をファイルの外に公開している
