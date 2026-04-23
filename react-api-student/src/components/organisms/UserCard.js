import Button from '../atoms/Button';
import UserCardBody from '../molecules/UserCardBody';

function UserCard({ user }) {
  const handleClick = () => {
    // 詳細を見るボタンを押した時の処理を書く
    // 今回は console.log でOK
    console.log('selected user:', user);
  };

  return (
    //ユーザー情報を1枚のカードとして画面に表示している
    // charAt(0):先頭1文字を取り出す
    // ?. :nameが存在しない時のエラー防止
    <article className="card">
      <div className="avatar avatar-placeholder">
        <span>{user.name?.charAt(0)}</span>
      </div>

      <UserCardBody
        //中身表示担当コンポーネント
        name={user.name}
        username={user.username}
        email={user.email}
        companyName={user.company?.name}
      />

      <Button onClick={handleClick}>詳細を見る</Button>
    </article>
  );
}

export default UserCard;
