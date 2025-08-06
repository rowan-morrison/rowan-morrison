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
        She creates expressive visuals and intuitive digital experiences, blending storytelling and technology to create new ideas.
      </p>
      <br></br>
      <p>
        With a background in both graphic design and front-end development, Rowan enjoys working across disciplines to bring ideas to life.
      </p>
      <br></br>
      <p>
       Her work has been exhibited in the <a id="link" rel="noreferrer" href="https://www.kabk.nl/en" target="_blank">Royal Academy of Art</a> (KABK), The Hague.
       Her illustration has been featured in <a id="link" rel="noreferrer" href="https://maxibestof.one/websites/47177-carolina-bucci" target="_blank">MaxiBestOf</a>.
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
      <cite>Simona Deifta, Founder of <a id="link" rel="noreferrer" href="https://nojolondon.co.uk/" target="_blank">NOJO</a></cite>
      </div>
    </section>
    </div>
    </>
  );
}

export default About;