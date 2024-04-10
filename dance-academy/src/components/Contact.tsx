import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4 text-center">Contact Us</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Your Phone Number</label>
              <div className="input-group">
                <span className="input-group-text">+514</span>
                <input type='tel' id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-4">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;