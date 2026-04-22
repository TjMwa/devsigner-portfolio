import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Project Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (name: string, value: string) => {
    let error = '';
    if (name === 'name' && !value.trim()) {
      error = 'Name is required';
    }
    if (name === 'email') {
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Please enter a valid email address';
      }
    }
    if (name === 'message' && !value.trim()) {
      error = 'Message is required';
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation if previously touched
    if (touched[name]) {
      const error = validate(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    let isValid = true;

    // Check specific fields
    ['name', 'email', 'message'].forEach(field => {
        const value = formData[field as keyof typeof formData];
        const error = validate(field, value);
        if (error) {
            newErrors[field] = error;
            isValid = false;
        }
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true, subject: true });

    if (isValid) {
      setIsSubmitting(true);
      try {
        // Construct mailto link
        const subject = encodeURIComponent(`${formData.subject} from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        const mailtoLink = `mailto:tjmwa94@gmail.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: 'New Project Inquiry', message: '' });
        setTouched({});
        
        // Reset success status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const getInputClass = (fieldName: string) => {
    const baseClass = "w-full bg-dark-900 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors hover-trigger";
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClass} border-red-500 focus:border-red-500`;
    }
    if (touched[fieldName] && !errors[fieldName] && formData[fieldName as keyof typeof formData]) {
        return `${baseClass} border-green-500/50 focus:border-green-500`;
    }
    return `${baseClass} border-dark-700 focus:border-accent-400`;
  };

  return (
    <section id="contact" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 via-blue-500 to-accent-400 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-display font-bold text-white mb-6">Let's build something <br/> <span className="text-accent-400">exceptional.</span></h2>
          <p className="text-xl text-slate-400 mb-12">
            Whether you need a full-stack application built from scratch, a complex API integrated, or a design system overhauled, I'm ready to help.
          </p>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Connect</h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  className="p-4 bg-dark-900 rounded-lg text-slate-400 hover:text-accent-400 hover:bg-dark-700 transition-all border border-dark-700 hover:border-accent-400/30 hover-trigger"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-800/50 backdrop-blur-md p-8 rounded-2xl border border-dark-700 relative"
        >
          {submitStatus === 'success' ? (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-dark-900 rounded-2xl z-10 text-center"
            >
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Email Prepared Successfully!</h3>
                <p className="text-slate-400">I've prepared your message. Your default email client should have opened with the details filled in. Please click "Send" in that window to complete the process.</p>
                <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-6 px-6 py-2 bg-dark-800 text-white rounded-lg hover:bg-dark-700 transition-colors"
                >
                    Send another message
                </button>
            </motion.div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Name <span className="text-accent-400">*</span></label>
                <div className="relative">
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass('name')}
                      placeholder="John Doe"
                    />
                    {touched.name && errors.name && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none">
                            <AlertCircle className="w-5 h-5" />
                        </div>
                    )}
                </div>
                {touched.name && errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email <span className="text-accent-400">*</span></label>
                <div className="relative">
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass('email')}
                      placeholder="john@example.com"
                    />
                    {touched.email && errors.email && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none">
                            <AlertCircle className="w-5 h-5" />
                        </div>
                    )}
                </div>
                 {touched.email && errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
              <select 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass('subject')}
              >
                <option>New Project Inquiry</option>
                <option>Technical Consultation</option>
                <option>Design & Development</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Message <span className="text-accent-400">*</span></label>
              <div className="relative">
                <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('message')}
                    placeholder="Tell me about your project..."
                ></textarea>
                {touched.message && errors.message && (
                    <div className="absolute right-3 top-6 text-red-500 pointer-events-none">
                        <AlertCircle className="w-5 h-5" />
                    </div>
                )}
              </div>
               {touched.message && errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full font-bold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 hover-trigger ${
                  isSubmitting 
                  ? 'bg-dark-700 text-slate-400 cursor-not-allowed' 
                  : 'bg-accent-400 text-dark-900 hover:bg-accent-500'
              }`}
            >
              {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
              ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;