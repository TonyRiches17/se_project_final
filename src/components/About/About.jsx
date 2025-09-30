import "./About.css";
import aboutpicture from "../../assets/aboutpicture.png";

function About() {
  return (
    <div className="about">
      <div className="about__picture-container">
        <img
          src={aboutpicture}
          alt="Picture of Author"
          className="about__picture"
        />
      </div>
      <div className="about__section">
        <h2 className="about__section-title">About the Author</h2>
        <p className="about__section-text">
          Welcome to NewsExplorer. The author goes by the name of Ri₵h. He is a
          full-stack Software Engineer, set to graduate from the TripleTen
          program in October 2025. It is there where he learned HTML, CSS,
          Javascript, and React for his frontend platforms - and Express and
          MongoDB for his backend platforms.
        </p>
        <p className="about__section-text">
          Learning with TripleTen has been an amazing adventure. Getting to this
          point is a true accomplishment that won&apos;t be taken lightly. He
          can&apos;t wait to use his skills in aiding clients acheive their
          website development goals.
        </p>
      </div>
    </div>
  );
}

export default About;
