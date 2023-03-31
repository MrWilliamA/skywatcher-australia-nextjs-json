import { useEffect } from "react";
import Head from "next/head";
import Styles from "../styles/contactForm.module.css";

const Contact = () => {
  useEffect(() => {
    const form = document.getElementById(Styles.form);
    form.addEventListener("submit", formSubmit);
  }, []);

  function formSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      "Sky-Watcher",
      document.querySelector('input[name="Sky-Watcher"]').placeholder
    );
    formData.append("name", document.querySelector('input[name="name"]').value);
    formData.append(
      "email",
      document.querySelector('input[name="email"]').value
    );
    formData.append("message", document.querySelector("textarea").value);

    fetch("https://getform.io/f/d64fc435-e7ea-413e-9392-e6e433d7a4ac", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        let successMessage = document.getElementById("response");
        successMessage.innerText = "Message Sent";
        successMessage.classList.add("success");
      })
      .catch((error) => {
        let errorMessage = document.getElementById("response");
        errorMessage.innerText = "There was an error. Please try again later";
        errorMessage.classList.add("error");
      });
  }

  return (
    <>
      <Head>
        <title>Contact Sky-Watcher Australia</title>
        <meta
          name="description"
          content="Contact Sky-Watcher Australia - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <form id={Styles.form} action={""}>
        <input
          type="hidden"
          name="Sky-Watcher"
          placeholder="This is from the Sky-Watcher NextJS website."
        />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea
          type="textarea"
          name="message"
          rows="15"
          placeholder="Your Message"
        />

        <button type="submit">
          <span>SEND</span>
        </button>
      </form>
      <p id="response"></p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "Contact Sky-Watcher Australia",
    },
  };
}

export default Contact;
