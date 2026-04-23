import { useEffect, useState } from 'react';

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

function useUsers() {
  // TODO:
  // API取得処理の実装
  // API から取得したユーザー一覧を入れる state を作成する
  const [users, setUsers] = useState([]);
  //useStateは状態(state)を作る関数

  // TODO:
  // 読み込み中かどうかを管理する state を作成する
  const [isLoading, setIsLoading] = useState(false);
  //isLoadingは読み込み中かどうかを管理するstate
  //setIsLoadingはisLoadingを更新する関数

  // TODO:
  // エラーメッセージを管理する state を作成する
  const [errorMessage, setErrorMessage] = useState("");
  //エラーメッセージを表示したい場合は、String型
  //エラーの有無を確認したい場合は、Boolean型

  useEffect(() => {
    let ignore = false;
    //コンポーネントが画面にある
    //??? これの意味についてめっしさんに聞く

    const fetchUsers = async () => {
      // 非同期でユーザー情報を取得する関数を作っている

      // TODO:
      // 通信開始時の状態をセットする

      try {
        // TODO:
        // fetch でユーザー一覧を取得する
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        // TODO:
        // 通信失敗時はエラーを投げる
        if (!res.ok) {
          throw new Error("ユーザーの取得に失敗しました");
        }

        // TODO:
        // JSON に変換する
        const data = await res.json();
        //データを使える形（JavaScriptオブジェクト）に変換する
        setUsers(data);
        //取得したデータを画面に表示できるようにする

        // TODO:
        // アンマウント後でなければ users を更新する
        //アンマウントとは、コンポーネントが画面から消えること
        //存在しない画面に対して、データを更新しようとするとエラーになるため、
        // ignoreを用いてアンマウント後は更新しないようにする
        if (!ignore) {
          //画面が消えていない時のみ実行
          setUsers(data);
          //データ表示
          setErrorMessage("");
          //エラークリア
        }
      } catch (error) {
        // TODO:
        // エラーが起きたら画面表示用のメッセージを入れる
        if (!ignore) {
          setErrorMessage("ユーザーの取得に失敗しました");
          //エラーメッセージの表示
        }
      } finally {
        // TODO:
        // 通信完了後は loading を終了する
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    fetchUsers();
    //コンポーネント表示時にAPI通信を開始する

    return () => {
      // 画面が切り替わった場合はignoreをtrueにする
      ignore = true;
      // アロー関数を使い、画面が切り替わったときにignoreをtrueにする
    };
  }, []);
  // [] があるので、画面表示されたときに1回だけ実行される処理

  // TODO: users / isLoading / errorMessage を返す
  return {
    users,
    isLoading,
    errorMessage,
  };
  //useUsers() を呼んだときに、この3つの値を返す
}

export default useUsers;
//export defaultで関数をファイルの外に公開している
