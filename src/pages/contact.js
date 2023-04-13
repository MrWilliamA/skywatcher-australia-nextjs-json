import { useEffect } from "react";
import Head from "next/head";
import Styles from "../styles/contactForm.module.css";
import Image from "next/image";
import Layout from "@/components/templates/Layout";

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
      <Layout layout="boxed">
        <div className={Styles.quoteContainer}>
          <div className={Styles.text}>
            <p className={Styles.quote}>
              &quot;ALL TRUTHS ARE EASY TO UNDERSTAND ONCE THEY ARE DISCOVERED;
              THE POINT IS TO DISCOVER THEM.&quot;
            </p>
            <p className={Styles.author}>Galileo Galilei</p>
          </div>
          <div className={Styles.image}>
            <Image
              src="/images/pageImages/galileo-galilei.jpg"
              alt="Galileo Galilei"
              width="350"
              height="264"
            />
          </div>
        </div>
        <div className={Styles.preform}>
          <p>
            Fill out the below form to send us a message. We will get back to
            you as soon as possible.
          </p>
        </div>
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

          <button type="submit" className={Styles.button}>
            <span>SEND</span>
          </button>
        </form>
        <p id="response"></p>
      </Layout>
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
