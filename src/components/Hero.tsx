import "./Hero.scss";
import photo from "../assets/images/image-profile-mobile.webp";

const Hero = function () {
  return (
    <section className="hero">
      <img src={photo} alt="photo of Adam Keyes" className="photo" />

      <h1 className="greeting">
        Nice to meet you! <br /> I'm <span className="name">Adam Keyes</span>.
      </h1>

      <h2 className="description">
        Based in the UK, I'm a front-end developer passionate about building
        accessible web apps that users love.
      </h2>

      <h2 className="contact-link">
        <a href="">Contact me</a>
      </h2>
    </section>
  );
};

export default Hero;
