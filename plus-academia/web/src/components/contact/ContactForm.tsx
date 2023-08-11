import { ReactEventHandler } from "react";

function ContactForm() {
  const contactSubmitHandler: ReactEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <div className="contact-form">
      <form action="post" onSubmit={contactSubmitHandler}>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          className="form-control"
          name="subject"
          placeholder="Subject"
        />
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="E-mail"
        />
        <textarea
          className="form-control"
          name="message"
          placeholder="How can we help you"
          style={{ height: "150px" }}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
