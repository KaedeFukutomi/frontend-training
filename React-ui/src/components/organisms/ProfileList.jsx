import ProfileCard from './ProfileCard';

// TODO: 
function ProfileList({ profiles }) {
  if (!profiles || profiles.length === 0) return <p className="empty-message">条件に一致するプロフィールがありません。</p>;

  return (
    <section className="card-grid">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </section>
  );
}

export default ProfileList;
