import "./ContactSection.scss";
import Btn from "./common/Btn";
import Separator from "./common/Separator";
import Navbar from "./Navbar";
import React, { useState, FormEvent, ChangeEvent } from "react";
import FormInput from "./common/FormInput";

interface inputStateT {
  name: string;
  email: string;
  message: string;
}

const inputs = [
  { tag: "input", name: "name", type: "text" },
  { tag: "input", name: "email", type: "email" },
  { tag: "textarea", name: "message", type: "text" },
];

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

  const handleChange = function (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void {
    const target = e.target;
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
          <FormInput
            tag="input"
            name="name"
            type="text"
            value={formInput.name}
            validation={isInvalid.name}
            onChange={handleChange}
          />

          <FormInput
            tag="input"
            name="email"
            type="email"
            value={formInput.email}
            validation={isInvalid.email}
            onChange={handleChange}
          />

          <FormInput
            tag="textarea"
            name="message"
            type="text"
            value={formInput.message}
            validation={isInvalid.message}
            onChange={handleChange}
          />

          <Btn>Send Message</Btn>
        </form>
      </div>
      <Separator />
      <Navbar />
    </>
  );
};

export default ContactSection;
