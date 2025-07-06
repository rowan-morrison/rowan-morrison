import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <>
    <div className="about-container">
    <section className="about">
        <img src="/images/website-portrait.jpeg" className="about-portrait" alt="portrait of Rowan Morrison"></img>
      <h2>About</h2>
      <p>
        Rowan Morrison is a multidisciplinary illustrator and graphic designer based in London, UK.
        They create expressive visuals and intuitive digital experiences, blending storytelling and technology to create something new.
      </p>
      <br></br>
      <p>
        With a background in both graphic design and front-end development, Rowan enjoys working across disciplines to bring ideas to life.
      </p>
    </section>
    <section className="socials">
        <div className="socials-grid">
        <a rel="noreferrer" href="https://instagram.com/rowanmorrisons/" target="_blank" hidden><FaInstagram  size={32}/></a>
        <a rel="noreferrer" href="https://linkedin.com/rowanmorrison/" target="_blank"><FaLinkedin  size={32}/></a>
        </div>
    </section>
    <section className="reviews">
        <h2>Accolades</h2>
        <div className="quote-block">
        <q>Everyone comments on how great the branding is.
          <br></br>
          I’m sure we will work together again.</q>
      <cite>Simona Deifta, Founder of NOJO</cite>
      </div>
    </section>
    </div>
    </>
  );
}

export default About;