"use client";
import React, { useState } from "react";
import SectionTitle from "@/components/ui/section-title/SectionTitle";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmit(true);
    emailjs
    .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, {
      name: formData.email,
      message: formData.message,
    }, {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
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
          Please reach me out directly at{" "}
          <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="contact-email">
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
          </a>{" "}
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

          <button type="submit" className="contact-submit" disabled={isSubmit}>
            {isSubmit ? (
              <div className="spinner-container">
                <div className="spinner"></div>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      <div className="contact-link">
        <div className="contact-link-container">
          <div className="contact-link-information">
            <h2 className="contact-title">Contact</h2>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email: </span>
                <span className="contact-value">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone: </span>
                <span className="contact-value">{process.env.NEXT_PUBLIC_CONTACT_PHONE}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Address: </span>
                <span className="contact-value">
                  {process.env.NEXT_PUBLIC_CONTACT_ADDRESS}
                </span>
              </div>
            </div>
          </div>

          <div className="contact-link-section">
            <h2 className="links-title">Section</h2>
            <div className="links-list">
              <a href="#home" className="link-item">
                Home
              </a>
              <a href="#about" className="link-item">
                About
              </a>
              <a href="#skills" className="link-item">
                Skills
              </a>
               <a href="#services" className="link-item">
                Services
              </a>
               <a href="#projects" className="link-item">
                Projects
              </a>
            </div>
          </div>
          <div className="social-icons-container">
            <h2 className="links-title">Social</h2>
              <div className="social-icons">
                  <a href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE}?text=${""}`} className="social-icon">
                    <FaWhatsapp color="white" size={30}/>
                  </a>
                  <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} className="social-icon">
                    <FaLinkedin color="white" size={30}/>
                  </a>
                  <a href={process.env.NEXT_PUBLIC_GITHUB_URL} className="social-icon">
                    <FaGithub color="white" size={30}/>
                  </a>
              </div>
            </div>
        </div>
        <div className="copyright">© {process.env.NEXT_PUBLIC_COPYRIGHT_YEAR} {process.env.NEXT_PUBLIC_FULL_NAME}. All rights reserved.</div>
      </div>
    </div>
  );
}
