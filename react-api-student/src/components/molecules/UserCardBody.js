import Text from '../atoms/Text';

function UserCardBody({ name, username, email, companyName }) {
  return (
    <div className="card-body">
      <Text className="card-name">{name}</Text>
      <Text className="card-role">@{username}</Text>
      <Text className="card-description">{email}</Text>
      <Text className="card-company">{companyName}</Text>
    </div>
  );
}

export default UserCardBody;
