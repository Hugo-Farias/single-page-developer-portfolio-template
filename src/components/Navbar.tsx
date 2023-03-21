import "./Navbar.scss";
import { ReactComponent as GithubLogo } from "../assets/images/icon-github.svg";
import { ReactComponent as FrontEndMentorLogo } from "../assets/images/icon-frontend-mentor.svg";
import { ReactComponent as LinkedinLogo } from "../assets/images/icon-linkedin.svg";
import { ReactComponent as TwitterLogo } from "../assets/images/icon-twitter.svg";

const Navbar = function () {
  return (
    <nav className="nav">
      <div className="name">adamkeyes</div>
      <div className="socials">
        <a href="">
          <GithubLogo className="icon icon-github" />
        </a>
        <a href="">
          <FrontEndMentorLogo className="icon icon-frontend-mentor" />
        </a>
        <a href="">
          <LinkedinLogo className="icon icon-linkedin" />
        </a>
        <a href="">
          <TwitterLogo className="icon icon-twitter" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
