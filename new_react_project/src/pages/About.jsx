import ConnorPhoto from "../assets/ConnorPhoto.jpeg"
import Card from "../Card.jsx";

function About() {
  return (<div className="flex m-20">
    <div className="m-15">
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

      <div className="m-15">
        <Card
          name="Jules"
          title="Project Manager"
          blurb="Geography lover, hockey enthusiast, public transit enjoyer. I want to make a positive change in the world
          through transportation and history."
          github="https://github.com/Connor3386/Project-Hello-World"
          skills="French, geography, Ice Skating"
          image={ConnorPhoto}
        />
        </div>
  </div>
  )
};

export default About;
