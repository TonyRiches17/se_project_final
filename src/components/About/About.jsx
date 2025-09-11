import "./About.css";
import aboutpicture from "../../assets/aboutpicture.png";

function About() {
  return(
    <div className="about">
      <div className="about__picture-container">
      <img src={aboutpicture} alt="Picture of Author" className="about__picture" />
      </div>
      <div className="about__section">
        <h2 className="about__section-title">About the Author</h2>
        <p className="about__section-text">This is a little information about the author. This text will serve
          as a placeholder to the real text, once I figure out where everything needs to go. I will probably
          also make sure the site is fully functional before I even think about putting something here, because
          this part seems much less important.
        </p>
        <p className="about__section-text">During the typing of the first paragraph I thought I might need
          a second one in order to keep with the consistency of the overall page, as designed by the Figma.
          This should be the last sentence necessary to make sure everything is lining up.
        </p>
      </div>
    </div>
  )
}

export default About;