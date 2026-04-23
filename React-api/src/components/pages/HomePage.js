import { useMemo, useState } from 'react';
import StatusMessage from '../atoms/StatusMessage';
import SearchForm from '../molecules/SearchForm';
import UserList from '../organisms/UserList';
import UserDirectoryTemplate from '../templates/UserDirectoryTemplate';
import useUsers from '../../hooks/useUsers';
import filterUsers from '../../utils/filterUsers';

function HomePage() {
  // 1. 検索欄に入力している値を保持する state を作成する
  const [inputValue, setInputValue] = useState('');
  // 2. 実際の検索条件として使う値を保持する state を作成する
  const [keyword, setKeyword] = useState('');

  // TODO: useUsers から users / isLoading / errorMessage を受け取る
  const { users, isLoading, errorMessage } = useUsers();
  // constを用いて、受け取った値が使用できるようにする

  // TODO: keyword が変わった時に絞り込み結果を再計算する(filterUsers を使用する)
  const filteredUsers = useMemo(() => {
    // useMemoを用いて、keywordが変わったときに絞り込み結果を再計算する
    return filterUsers(users, keyword);
  }, [users, keyword]);

  const handleKeywordChange = (event) => {
    // event情報を渡すオブジェクト
    // 入力欄の値で inputValue を更新する
    setInputValue(event.target.value);
    // (event.target.value)は、入力欄の値を取得している
  };

  const handleSearch = () => {
    // 入力中の値を検索条件として確定させる
    setKeyword(inputValue);
    //入力中の値を検索条件として確定される処理（ボタン用の想定）
    //ボタン押下後に、検索条件を更新する
  };

  // まずは通常時の表示を入れる
  let contentArea = <UserList users={filteredUsers} />;
  //画面に表示するコンポーネントを変数contentAreaに入れている
  //<UserList ... />はReactのコンポーネント
  // usersの絞り込み結果をUserListコンポーネントに渡している

  // TODO: loading 中は読み込みメッセージに切り替える(メッセージ名: 読み込み中です...)
  if (isLoading) {
    return <p>読み込み中です...</p>
  }
  // TODO: error がある時はエラーメッセージに切り替える
  if (errorMessage) {
    return <p>{errorMessage}</p>
  }
  //isLoading → 読み込み中画面
  //errorMessage → エラー画面

  //テンプレートに検索部分と表示部分を差し込んで画面を組み立てている
  return (
    <UserDirectoryTemplate
      //レイアウト専用コンポーネント
      searchArea={
        //検索UI
        <SearchForm
          keyword={inputValue}
          //検索欄に入力している値を SearchForm コンポーネントに渡す
          onKeywordChange={handleKeywordChange}
          //検索欄の値が変わったときに呼ばれる関数を SearchForm コンポーネントに渡す
          onSearch={handleSearch}
        //検索ボタンが押されたときに呼ばれる関数を SearchForm コンポーネントに渡す
        />
      }
      contentArea={contentArea}
      //表示UI
    />
  );
}

export default HomePage;
