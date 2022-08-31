import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import ContactOption from "./ContactOption";
import emailjs from "emailjs-com";

const contactOptions = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    content: "dummyegator@gmail.com",
    address: "mailto:dummyegator@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    content: "egatortutorials",
    address: "http://m.me/ernest.achiever",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    content: "+123456789",
    address: "https://api.whatsapp.com/send?phone=+123456789",
  },
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_tl8fda1",
      "template_b7t4vua",
      form.current,
      "pLwnzx0WGOSa1kGXv"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactOptions.map((option) => (
            <ContactOption
              id={option.id}
              icon={option.icon}
              title={option.title}
              content={option.content}
              address={option.address}
            />
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
