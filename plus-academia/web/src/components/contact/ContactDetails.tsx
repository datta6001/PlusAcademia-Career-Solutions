function ContactDetails() {
  return (
    <div className="contact-details">
      <h2>+PlusAcademia Career Solutions</h2>
      <p>
        <h5>Address</h5>
        +PlusAcademia Career Solutions <br />
        Near Kokate Talim <br />
        Pashan
        <br /> Pune - 411019
      </p>
      <p>&#x260E; +917720819711</p>
      <p>&#x2709; testemail@plusacademia.com</p>

      <div className="social-sites">
        <a
          href="https://instagram.com/insta_plusacademia?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target="_blank"
        >
          <img src="./instagram-icon.svg" alt="Whatsapp" />
        </a>

        <a href="https://wa.me/+919850146304" target="_blank">
          <img src="./whatsapp-icon.svg" alt="Insta" />
        </a>
      </div>
    </div>
  );
}

export default ContactDetails;
