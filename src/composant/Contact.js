import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Contact.css";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t1k9u9h",
        "template_p2hga0a",
        form.current,
        "AeFSYwPhq_Z-OVwyn"
      )
      .then(
        () => {
          setStatusMessage("Email sent successfully!");
          setTimeout(() => setStatusMessage(""), 5000);
        },
        (error) => {
          setStatusMessage("Failed to send email, please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="scontact w-100 h-100 d-flex flex-column align-items-center justify-content-center"
    >
      <div className="w-100">
        <h1 className="mb-4 text-center mx-auto ">
          Le meilleur moyen de rester en contact
        </h1>

        {statusMessage && (
          <div className="alert alert-info text-center">{statusMessage}</div>
        )}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="needs-validation"
          Validate
        >
          <div className="mb-3 col-10 col-md-6 mx-auto text-center">
            <label htmlFor="user_name" className="form-label">
              Nom
            </label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              id="user_name"
              required
            />
          </div>
          <div className="mb-3 col-10 col-md-6 mx-auto text-center">
            <label htmlFor="user_email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="form-control"
              id="user_email"
              required
            />
          </div>
          <div className="mb-3 col-10 col-md-6 mx-auto text-center">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="Envoyer"
              className="btn btn-primary me-2"
            />
            <button type="reset" className="btn btn-secondary">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
