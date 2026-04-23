import { useMemo, useState } from 'react';
import profiles from '../../data/profiles';
import SearchForm from '../molecules/SearchForm';
import ProfileList from '../organisms/ProfileList';
import ProfileDirectoryTemplate from '../templates/ProfileDirectoryTemplate';

function HomePage() {
  const [inputValue, setInputValue] = useState('');
  const [keyword, setKeyword] = useState('');
  //Reactのstate（状態）を作っている部分
  //画面で変化するデータを2つ、「入力中」と「検索確定」を分けて用意している
  //useState('');は、データ（状態）を作る関数で、引数は初期値

  const filteredProfiles = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();
    //trim()は、文字列の前後から空白を削除するメソッド
    //toLowerCase()は、文字列をすべて小文字に変換するメソッド

    // TODO:
    // 1. keyword が空なら全件表示する
    if (!normalizedKeyword) {
      return profiles;
      //useMemoの結果としてfilteredProfilesに代入されている
    }
    // 2. 名前または役職に keyword が含まれていたら表示する(チェック用のテキストは以下のように整形してください: `${name} ${role}`.toLowerCase()。変数名はサンプルです)
    return profiles.filter((profile) => {
      //1人ずつチェックをし、条件に合うもののみを残す
      const text = `${profile.name} ${profile.role}`.toLowerCase();
      //名前と役職をスペースでつなげて小文字に変換したテキストを作成
      return text.includes(normalizedKeyword);
      //includes()は、文字列が特定の文字列を含んでいるかどうかを判断するメソッド
    });

  }, [keyword]);
  //kiewordが変更されたときだけ、フィルタリングの処理を再実行するようにしている

  const handleKeywordChange = (event) => {
    setInputValue(event.target.value);
  };
  //入力欄に打った文字を入力するたびに更新している
  //event.target.valueはイベントが起きた際の、現在の中身を示している

  const handleSearch = (event) => {
    event.preventDefault();
    //ブラウザの標準動作を止めて、React側で自由に制御（フォームの送信を防止）するためのコード

    // TODO:
    // 必要なら検索ボタン押下時の処理を追加してください。
    // 例: ログ出力 / バリデーション / 検索タイミングの制御
    setKeyword(inputValue);
    //入力内容を検索確定の状態に保存する。これによって、フィルタリングの処理が実行されるようになる
  };
  //入力と検索を分離させることで、効率よく動かしている


  // TODO:
  // 1. SearchFormコンポーネントを呼び出してください
  return (
    <ProfileDirectoryTemplate
    //画面の枠組みを作成するコンポーネント
      searchArea={
        //searchAreaの中に、SearchFormを入れて渡している
        <SearchForm
          keyword={inputValue}
          //入力文字
          onKeywordChange={handleKeywordChange}
          //入力処理
          onSearch={handleSearch}
        //ボタン押下処理
        />
      }
      // Reactはタグの中で props を使って
      // コンポーネントにデータや関数を渡すことができる

      // 2. プロフィールデータをProfileListコンポーネントに渡してください 
      contentArea={<ProfileList profiles={filteredProfiles} />}
    />
  );
}

export default HomePage;
//HomePageコンポーネントは、プロフィール検索のトップページを表すコンポーネント


