import AboutMe from "../Aboutme";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <AboutMe
        names='Name: Connor'
        titles='Code manager'
        paragraph='I like coding but can find it tedious at times. Im doing CS because I want to study astrophysics,
                and computational astrophysics is really interesting. I might want to avoid the CS parts if it
                becomes too difficult in college.'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k8y5nFWtC3iYBf0AFEj7wrJ5n9CK7HHTuQ&s'/>
      <AboutMe
        names='Name: Jules'
        titles='Project manager'
        paragraph='I have loved maps since I could remember. I want to be able to create something with maps that will
      benefit the communuty that helped me learn to love geography and history, so I am very excited. to work on this
     app.'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXl999FEKE4-GHm3BuDb93BeohdgQ9v6reg&s'/>
    </div>
  );
}

export default About;
