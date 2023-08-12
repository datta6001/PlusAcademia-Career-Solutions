import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  );
}

export default Contact;
