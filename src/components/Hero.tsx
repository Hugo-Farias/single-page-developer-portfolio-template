import "./Hero.scss";
import Separator from "./common/Separator";
import ContactMeBtn from "./common/ContactMeBtn";

const Hero = function () {
  return (
    <>
      <section className="hero">
        {/*<img src={photoS} alt="Photo of Adam Keyes" className="photo" />*/}
        <div className="photo" />

        <div className="greeting">
          <h1 className="introduction">
            Nice to meet you! I'm <span className="name">Adam Keyes.</span>
          </h1>

          <h2 className="description">
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </h2>

          <ContactMeBtn />
        </div>
      </section>
      <Separator />
    </>
  );
};

export default Hero;
