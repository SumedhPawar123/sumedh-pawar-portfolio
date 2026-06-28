import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactForm, resetContactState } from '../redux/slices/contactSlice';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = ({ isDark }) => {
  const dispatch = useDispatch();
  const { loading, error, success, message } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        dispatch(resetContactState());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(?:\+91[-\s]?|91[-\s]?|0)?[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid Indian phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(submitContactForm(formData));

    if (!error) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className={`h-1 w-20 ${isDark ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-blue-600 to-cyan-500'} mx-auto`}></div>
          <p className={`text-lg mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a question or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className={`rounded-2xl p-8 md:p-12 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Success!</h3>
                <p className="text-green-800 text-sm">{message}</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-semibold text-red-900 mb-1">Error</h3>
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    isDark
                      ? `bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} text-white placeholder-gray-400 focus:outline-none ${!errors.name && 'focus:border-cyan-500'}`
                      : `bg-white border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-gray-500 focus:outline-none ${!errors.name && 'focus:border-blue-500'}`
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    isDark
                      ? `bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} text-white placeholder-gray-400 focus:outline-none ${!errors.email && 'focus:border-cyan-500'}`
                      : `bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-gray-500 focus:outline-none ${!errors.email && 'focus:border-blue-500'}`
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Input */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    isDark
                      ? `bg-gray-700 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} text-white placeholder-gray-400 focus:outline-none ${!errors.phone && 'focus:border-cyan-500'}`
                      : `bg-white border ${errors.phone ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-gray-500 focus:outline-none ${!errors.phone && 'focus:border-blue-500'}`
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Subject Input */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    isDark
                      ? `bg-gray-700 border ${errors.subject ? 'border-red-500' : 'border-gray-600'} text-white placeholder-gray-400 focus:outline-none ${!errors.subject && 'focus:border-cyan-500'}`
                      : `bg-white border ${errors.subject ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-gray-500 focus:outline-none ${!errors.subject && 'focus:border-blue-500'}`
                  }`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message here..."
                rows="6"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none ${
                  isDark
                    ? `bg-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-600'} text-white placeholder-gray-400 focus:outline-none ${!errors.message && 'focus:border-cyan-500'}`
                    : `bg-white border ${errors.message ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-gray-500 focus:outline-none ${!errors.message && 'focus:border-blue-500'}`
                }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;