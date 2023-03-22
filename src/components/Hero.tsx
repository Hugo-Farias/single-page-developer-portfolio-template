import "./Hero.scss";
import { useEffect } from "react";
import Separator from "./common/Separator";

const Hero = function () {
  useEffect(() => console.log(window.innerWidth), [window.innerWidth]);

  return (
    <>
      <section className="hero">
        <div className="photo" />

        <h1 className="greeting">
          Nice to meet you!
          <br /> I'm <span className="name">Adam Keyes</span>.
        </h1>

        <h2 className="description">
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </h2>

        <h2 className="contact-link">
          <a href="">Contact me</a>
        </h2>
      </section>
      <Separator />
    </>
  );
};

export default Hero;
