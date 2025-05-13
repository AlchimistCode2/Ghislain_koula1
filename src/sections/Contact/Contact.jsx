import styles from './ContactStyles.module.css';
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5jftfzk',         // ✅ Your service ID
        'template_cu3il0y',        // ✅ Your template ID
        formRef.current,
        '3OssjXkt73idrkHB0'        // ✅ Your public key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Failed to send message. ' + error.text);
        }
      );
  };

  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='formGroup'>
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='formGroup'>
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <input className='hover btn' type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
