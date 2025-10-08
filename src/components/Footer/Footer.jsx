import "./Footer.css";
import githubIcon from "../../assets/githubicon.svg";
import linkedinIcon from "../../assets/linkedinicon.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2025 Ri₵h, Powered by News API</p>
      <div className="footer__links">
        <div className="footer__links-words">
          <a href="/" className="footer__link-home">
            Home
          </a>
          <a
            href="https://www.tripleten.com"
            className="footer__link-tripleten"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__links-icons">
          <a href="https://www.github.com" className="footer__link-github">
            <img
              src={githubIcon}
              alt="Picture of the Github icon"
              className="footer__link-github-icon"
            />
          </a>
          <a href="https://www.linkedin.com" className="footer__link-linkedin">
            <img
              src={linkedinIcon}
              alt="Picture of the LinkedIn icon"
              className="footer__link-linkedinicon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
