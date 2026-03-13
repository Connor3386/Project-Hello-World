function ProfileCard({ image }) {
  return (
    <div className="profile-card">
      <img src={image} alt="Profile" className="profile-image" />
    </div>
  );
}

export default ProfileCard;
