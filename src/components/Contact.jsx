import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 /* const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you for reaching out! You’ll hear from me within 2-3 business days.");
    setFormData({ name: '', email: '', message: '' });
  };*/

  return (
    <section className="contact">
        <img src="/images/pigeon-mail.gif" className="pigeon-mail" alt="pigeon-mail"></img>
      <h2>Contact</h2>
      <p>If you have any questions, or would like to discuss a project, please feel free to reach out.</p>
      <form 
  action="https://formspree.io/f/meogokpw" 
  method="POST" 
  className="contact-form"
>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;