import { useState } from 'react'
import './Contact.css'
import { SiGmail, SiLinkedin, SiGooglemaps } from 'react-icons/si'
import { FiPhone } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // 🔹 Validate form inputs
  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(''), 5000)
      }, 1000)
    }
  }

  // 🔹 Contact Info
  const contactInfo = [
    {
      icon: <SiGmail className="contact-icon" />,
      title: 'Email',
      value: 'drguna18@gmail.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: <FiPhone className="contact-icon" />,
      title: 'Phone',
      value: '+91 8489035029',
      link: 'tel:+918489035029'
    },
    {
      icon: <SiGooglemaps className="contact-icon" />,
      title: 'Location',
      value: 'Chennai, India',
      link: '#'
    },
    {
      icon: <SiLinkedin className="contact-icon" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/guna1224',
      link: 'https://linkedin.com/in/yourprofile'
    }
  ]

  return (
    <section id="contact" className="section contact">
      <div className="contact-background"></div>
      <div className="container">
        <h2 className="section-title fade-in" style={{ color: 'var(--text-light)' }}>
          Get In Touch
        </h2>
        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info slide-in-left">
            <h3>Let's work together</h3>
            <p>
              I'm always interested in hearing about new opportunities and projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="contact-method"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon-box">{info.icon}</div>
                  <div className="contact-details">
                    <div className="contact-title">{info.title}</div>
                    <div className="contact-value">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="contact-form-container slide-in-right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="6"
                ></textarea>
                {errors.message && <p className="error-text">{errors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary contact-submit ${isSubmitting ? 'btn-loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="submit-success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
