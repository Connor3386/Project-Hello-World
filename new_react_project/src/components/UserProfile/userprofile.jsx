import AboutMe from './about-me.jsx';
import Title from './title.jsx';
import ProfileCard from './profilecard.jsx';

function UserProfile({ names, titles, paragraph, image }) {
  return (
    <div className="user-profile">
      <ProfileCard image={image} />
      <Title names={names} titles={titles} />
      <AboutMe paragraph={paragraph} />
    </div>
  );
}

export default UserProfile;
