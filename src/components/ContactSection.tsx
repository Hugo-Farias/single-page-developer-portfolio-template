import "./ContactSection.scss";
import Btn from "./common/Btn";
import Separator from "./common/Separator";
import Navbar from "./Navbar";
import React, { useState, FormEvent, ChangeEvent } from "react";

interface inputStateT {
  name: string;
  email: string;
  message: string;
}

const ContactSection = function () {
  const [formInput, setFormInput] = useState<inputStateT>({
    name: "",
    email: "",
    message: "",
  });
  const [isInvalid, setIsInvalid] = useState<inputStateT>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = function (e: FormEvent) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    console.log(target.id);
  };

  const handleInvalid = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    setIsInvalid((prevState) => ({ ...prevState, [target.id]: "invalid" }));
  };

  const handleChange = function (e: ChangeEvent) {
    const target = e.target as HTMLFormElement;
    setFormInput((prevState) => ({ ...prevState, [target.id]: target.value }));

    if (!target.validity.valid) return;

    setIsInvalid((prevState) => ({ ...prevState, [target.id]: "" }));
  };

  return (
    <>
      <div className="contact-section">
        <div className="cta-container">
          <h2 className="title">Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          onInvalid={handleInvalid}
          action=""
          method="post"
        >
          <div className={`input-wrapper ${isInvalid.name}`}>
            <input
              value={formInput.name}
              onChange={handleChange}
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              required
            />
            {isInvalid.name ? <div className="invalid-icon">!</div> : ""}
          </div>
          <div className={`input-wrapper ${isInvalid.email}`}>
            <input
              value={formInput.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              required
            />
            {isInvalid.email ? <div className="invalid-icon">!</div> : ""}
          </div>

          <div className={`input-wrapper ${isInvalid.message}`}>
            <textarea
              // className={isInvalid.message}
              value={formInput.message}
              onChange={handleChange}
              placeholder="Message"
              id="message"
              name="message"
              required
            />
            {isInvalid.message ? <div className="invalid-icon">!</div> : ""}
          </div>

          <Btn>Send Message</Btn>
        </form>
      </div>
      <Separator hide={false} />
      <Navbar />
    </>
  );
};

export default ContactSection;
