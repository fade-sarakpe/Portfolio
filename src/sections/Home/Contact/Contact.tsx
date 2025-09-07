"use client";
import React, { useState } from 'react';
import SectionTitle from '@/components/ui/section-title/SectionTitle';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmit(true);
    emailjs
    .send('service_ecamvng', 'template_5mgzzbg', {
      name: formData.email,
      message: formData.message,
    }, {
      publicKey: 'yAl-dgyrQzbbPapRw',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setFormData({ email: '', message: '' });
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully.',
          confirmButtonColor: '#8b5cf6'
        });
      },
      (error) => {
        console.log('FAILED...', error.text);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to send message. Please try again.',
          confirmButtonColor: '#8b5cf6'
        });
      },
    )
    .finally(() => {setIsSubmit(false);}
    )
  };

  return (
    <div id="contact" className="contact-section">
      <SectionTitle title="Contact Me" />
      <div className="contact-content">
        <p className="contact-description">
          Please reach me out directly at{' '}
          <a href="mailto:fadesarakpe9947@gmail.com" className="contact-email">
            fadesarakpe9947@gmail.com
          </a>{' '}
            or through this form.
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            data-aos="fade-left"
            className="contact-input"
            required
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            data-aos="fade-right"
            className="contact-textarea"
            rows={8}
            required
          />
          
          <button data-aos="fade-left" type="submit" className="contact-submit" disabled={isSubmit}>
            {isSubmit ? (
              <div className="spinner-container">
                <div className="spinner"></div>
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}