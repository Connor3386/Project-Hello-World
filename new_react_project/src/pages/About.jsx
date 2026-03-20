import ConnorPhoto from "./assets/ConnorPhoto.jpeg"
import Card from "./Card.jsx";

function About() {
  return (<div>
        <Card
          name="Connor"
          title="Code Manager"
          blurb="Aspiring astrophysics major with a love of science and learning. Passionate about public transit and
            enjoys coding."
          github="https://github.com/Connor3386/Project-Hello-World"
          skills="math, debate, teamwork"
          image={ConnorPhoto}
        />
  </div>
  )
};

export default About;
