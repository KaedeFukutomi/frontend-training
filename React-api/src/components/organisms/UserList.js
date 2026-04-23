import StatusMessage from '../atoms/StatusMessage';
import UserCard from './UserCard';

function UserList({ users = [] }) {
  // TODO:
  // 0件の時はメッセージを表示する(メッセージ名: 該当するデータがありません。)
  if (users.length === 0) {
    return <p>該当するデータがありません。</p>;
  }

  return (
    <section className="card-grid">
      {users.map((user) => (
        //map: 配列の中身を1つずつ取り出して新しい配列を作る
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
}

export default UserList;
