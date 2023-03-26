import "./ContactSection.scss";
import Btn from "./common/Btn";

const ContactSection = function () {
  return (
    <div className="contact-section">
      <div className="cta-container">
        <h2 className="title">Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <form action="" method="post">
        <input placeholder="Name" type="text" id="name" name="name" required />
        <input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          required
        />

        <textarea placeholder="Message" id="message" name="message" required />

        {/*<input placeholder="Submit" type="submit" value="Submit" />*/}
        <Btn>Send Message</Btn>
      </form>
    </div>
  );
};

export default ContactSection;
