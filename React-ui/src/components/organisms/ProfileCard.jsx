import { useState } from 'react';
import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';
import ProfileCardBody from '../molecules/ProfileCardBody';

function ProfileCard({ profile }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((previous) => !previous);
  };

  return (
    <article className="card">
      <Avatar src={profile.image} alt={profile.name} />
      <ProfileCardBody
        name={profile.name}
        role={profile.role}
        description={profile.description}
        isOpen={isOpen}
      />
      <Button onClick={handleToggle}>
        {isOpen ? '詳細を閉じる' : '詳細を見る'}
      </Button>
    </article>
  );
}

export default ProfileCard;
