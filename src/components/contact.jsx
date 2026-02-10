// Contact.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Linkedin, Send, MessageSquare, 
  Handshake, Users, Loader, MessageCircle 
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef();

  // إعدادات واتساب
  const whatsappNumber = "+201227333061";
  const whatsappMessage = "Hello! I saw your portfolio and would like to discuss...";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // مسح الرسائل عند التعديل
    if (isSuccess) setIsSuccess(false);
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // تحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // إنشاء التاريخ والوقت
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      
      // 1. أولاً: أضف الحقول المخفية للتاريخ والوقت
      const dateInput = document.createElement('input');
      dateInput.type = 'hidden';
      dateInput.name = 'date';
      dateInput.value = dateStr;
      
      const timeInput = document.createElement('input');
      timeInput.type = 'hidden';
      timeInput.name = 'time';
      timeInput.value = timeStr;
      
      // أضفهم للفورم
      formRef.current.appendChild(dateInput);
      formRef.current.appendChild(timeInput);
      
      // 2. أرسل باستخدام sendForm
      const result = await emailjs.sendForm(
        'service_qm67vzn',    // Service ID الجديد
        'template_76gl97b',   // Template ID الجديد
        formRef.current,
        'fDs9wefxE97hCoLy4'   // Public Key
      );

      console.log('Email sent successfully:', result.text);
      
      // إعادة تعيين النموذج
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
      });
      
      // إزالة الحقول المخفية المضافة
      formRef.current.removeChild(dateInput);
      formRef.current.removeChild(timeInput);
      
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (err) {
      console.error('Email sending failed:', err);
      console.error('Full error details:', {
        status: err.status,
        text: err.text,
        message: err.message
      });
      
      // رسالة خطأ دقيقة
      if (err.text?.includes('service') || err.status === 400) {
        setError('Service configuration issue. Please check your EmailJS settings.');
      } else if (err.text?.includes('template')) {
        setError('Template not found. Please check Template ID.');
      } else {
        setError('Failed to send message. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-dark via-gray-800 to-dark overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-primary to-cyan-400 p-2.5 sm:p-3 rounded-xl shadow-lg">
                <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Contact Me</h2>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
              <Handshake className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Get in Touch</span>
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-full sm:max-w-3xl">
            Let's discuss your next project, collaborate on something amazing, or just have a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* قسم الاتصال - العمود الأيسر */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/10 p-6 sm:p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Let's Connect</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                I'm always open to discussing new opportunities, innovative projects, or potential collaborations.
              </p>

              {/* معلومات الاتصال */}
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 flex-grow">
                {/* البريد الإلكتروني */}
                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-sm sm:text-base">Email</h4>
                    <a 
                      href="mailto:ereny.thrwat27@gmail.com" 
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base truncate block"
                    >
                      ereny.thrwat27@gmail.com
                    </a>
                  </div>
                </div>

                {/* الهاتف */}
                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="bg-green-500/20 p-2 sm:p-3 rounded-lg group-hover:bg-green-500/30 transition-colors shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-sm sm:text-base">Phone</h4>
                    <a 
                      href="tel:+201227333071" 
                      className="text-gray-300 hover:text-green-400 transition-colors text-sm sm:text-base"
                    >
                      +201227333071
                    </a>
                  </div>
                </div>

                {/* واتساب */}
                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="bg-green-600/20 p-2 sm:p-3 rounded-lg group-hover:bg-green-600/30 transition-colors shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-sm sm:text-base">WhatsApp</h4>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-400 transition-colors text-sm sm:text-base"
                    >
                      Message on WhatsApp
                    </a>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-500">Quick response</span>
                    </div>
                  </div>
                </div>

                {/* الموقع */}
                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="bg-purple-500/20 p-2 sm:p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-sm sm:text-base">Location</h4>
                    <p className="text-gray-300 text-sm sm:text-base">Al Minya, Egypt</p>
                  </div>
                </div>

                {/* وسائل التواصل الاجتماعي */}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-white text-lg sm:text-xl">Social Links</h4>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/in/ereny-thrwat-745629320/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 sm:p-4 bg-white/5 hover:bg-blue-500/20 rounded-xl transition-colors border border-white/10 hover:border-blue-500/30 group"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300 group-hover:text-blue-400 mr-3 sm:mr-4" />
                      <div>
                        <span className="text-sm sm:text-base text-gray-400 group-hover:text-blue-300 block">LinkedIn</span>
                        <span className="text-xs text-gray-500 group-hover:text-blue-400">@ereny-thrwat</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* حالة التوفر - تظهر على الشاشات الصغيرة فقط */}
              <div className="lg:hidden mt-6">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-4 sm:p-5 border border-blue-500/20">
                  <div className="flex items-center mb-3">
                    <div className="mr-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Currently Available
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm">For freelance projects and collaborations</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs sm:text-sm">
                      Web Development
                    </span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs sm:text-sm">
                      API Development
                    </span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs sm:text-sm">
                      Consultation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* نموذج الاتصال - العمود الأيمن */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col gap-6 sm:gap-8"
          >
            <div className="bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/10 p-6 sm:p-8 flex-grow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <Send className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Send Message</h3>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-xs sm:text-sm text-green-400">Available Now</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">Fill out the form below and I'll get back to you soon.</p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* رسائل النجاح/الخطأ */}
                {isSuccess && (
                  <div className="p-3 sm:p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-sm sm:text-base text-center">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}
                
                {error && (
                  <div className="p-3 sm:p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-sm sm:text-base text-center">
                      ❌ {error}
                    </p>
                  </div>
                )}

                {/* الاسم */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-300">
                      Your Name *
                    </label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm sm:text-base"
                  />
                </div>

                {/* البريد الإلكتروني */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-300">
                      Email Address *
                    </label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm sm:text-base"
                  />
                </div>

                {/* الموضوع */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-gray-300">
                      Subject *
                    </label>
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm sm:text-base"
                  />
                </div>

                {/* الرسالة */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-300">
                      Message *
                    </label>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm sm:text-base resize-none"
                  ></textarea>
                </div>

                {/* زر الإرسال */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-blue-800 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base shadow-lg shadow-blue-900/30 mt-4"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* حالة التوفر مع واتساب - تظهر على الشاشات الكبيرة فقط */}
            <div className="hidden lg:block space-y-6">
              {/* حالة التوفر */}
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Currently Available
                    </h4>
                    <p className="text-gray-400 text-sm">For freelance projects and collaborations</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <span className="px-3 py-2 bg-blue-500/20 text-blue-400 rounded text-sm text-center">
                    Web Dev
                  </span>
                  <span className="px-3 py-2 bg-green-500/20 text-green-400 rounded text-sm text-center">
                    API Dev
                  </span>
                  <span className="px-3 py-2 bg-purple-500/20 text-purple-400 rounded text-sm text-center">
                    Consulting
                  </span>
                </div>
                <p className="text-gray-500 text-xs mt-4 text-center">
                  Response time: Within 24 hours
                </p>
              </div>

              {/* زر واتساب مميز */}
              {/* <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600/20 to-green-700/20 border border-green-500/30 rounded-xl hover:border-green-500/50 hover:bg-green-600/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Message on WhatsApp</h4>
                    <p className="text-xs text-gray-400">Get instant response</p>
                  </div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </motion.a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;