import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300">
            Have questions or ready to book a reading? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold mb-6 text-purple-300">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold mb-6 text-purple-300">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-purple-400"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+91 9669566651</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-purple-400"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">support@adityaastro.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-purple-400"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-gray-300">Korba, Chhattisgarh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
