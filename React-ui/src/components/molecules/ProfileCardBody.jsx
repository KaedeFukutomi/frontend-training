import Text from '../atoms/Text';

function ProfileCardBody({ name, role, description, isOpen }) {
  return (
    <div className="card-body">
      <Text className="card-name">{name}</Text>
      <Text className="card-role">{role}</Text>
      {isOpen && <Text className="card-description">{description}</Text>}
    </div>
  );
}

export default ProfileCardBody;
