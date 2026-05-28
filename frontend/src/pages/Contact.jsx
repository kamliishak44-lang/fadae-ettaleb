import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { contactAPI } from '../services/api';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const businessPhone = process.env.REACT_APP_BUSINESS_PHONE || '+213 XXX XXX XXX';
  const businessWhatsapp = process.env.REACT_APP_BUSINESS_WHATSAPP || '+213 XXX XXX XXX';
  const businessEmail = process.env.REACT_APP_BUSINESS_EMAIL || 'contact@fadae-ettaleb.com';

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await contactAPI.sendContact(data);

      if (response.success) {
        setSuccessMessage(response.message);
        reset();

        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      }
    } catch (error) {
      const errorMsg = error.message || 'حدث خطأ في إرسال الرسالة';
      setErrorMessage(errorMsg);

      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: FaPhone,
      title: 'الهاتف',
      value: businessPhone,
      link: `tel:${businessPhone.replace(/\s/g, '')}`,
      color: 'blue',
    },
    {
      icon: FaWhatsapp,
      title: 'واتساب',
      value: businessWhatsapp,
      link: `https://wa.me/${businessWhatsapp.replace(/\s|\+/g, '')}`,
      color: 'green',
      target: '_blank',
    },
    {
      icon: FaEnvelope,
      title: 'البريد الإلكتروني',
      value: businessEmail,
      link: `mailto:${businessEmail}`,
      color: 'red',
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      name: 'فيسبوك',
      url: 'https://facebook.com',
      color: 'text-blue-600',
    },
    {
      icon: FaInstagram,
      name: 'إنستجرام',
      url: 'https://instagram.com',
      color: 'text-pink-600',
    },
    {
      icon: FaWhatsapp,
      name: 'واتساب',
      url: `https://wa.me/${businessWhatsapp.replace(/\s|\+/g, '')}`,
      color: 'text-green-600',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-l from-blue-600 to-blue-800 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-lg md:text-xl">
            نحن هنا للإجابة على جميع أسئلتك
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">طرق التواصل السريعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const colorClass = `text-${method.color}-600`;
              return (
                <a
                  key={index}
                  href={method.link}
                  target={method.target || '_self'}
                  rel={method.target ? 'noopener noreferrer' : ''}
                  className="card text-center hover:shadow-lg transition"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 bg-${method.color}-100 rounded-full`}>
                      <Icon className={`${colorClass} text-3xl`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600">{method.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">أرسل لنا رسالة</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="card">
            {/* Success Message */}
            {successMessage && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-right animate-fade-in">
                ✅ {successMessage}
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-right animate-fade-in">
                ❌ {errorMessage}
              </div>
            )}

            {/* Full Name */}
            <div className="mb-4">
              <label className="form-label">الاسم الكامل</label>
              <input
                type="text"
                placeholder="أدخل اسمك الكامل"
                className="form-input"
                {...register('fullName', {
                  required: 'الاسم الكامل مطلوب',
                  minLength: {
                    value: 3,
                    message: 'يجب أن يكون الاسم أطول من 3 أحرف',
                  },
                })}
              />
              {errors.fullName && <span className="text-error">{errors.fullName.message}</span>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="form-label">البريد الإلكتروني</label>
              <input
                type="email"
                placeholder="example@example.com"
                className="form-input"
                {...register('email', {
                  required: 'البريد الإلكتروني مطلوب',
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'البريد الإلكتروني غير صحيح',
                  },
                })}
              />
              {errors.email && <span className="text-error">{errors.email.message}</span>}
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="form-label">رقم الهاتف</label>
              <input
                type="tel"
                placeholder="+213 XXX XXX XXX"
                className="form-input"
                {...register('phone', {
                  required: 'رقم الهاتف مطلوب',
                  pattern: {
                    value: /^[0-9+\-\s()]+$/,
                    message: 'رقم الهاتف غير صحيح',
                  },
                })}
              />
              {errors.phone && <span className="text-error">{errors.phone.message}</span>}
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="form-label">الموضوع</label>
              <input
                type="text"
                placeholder="موضوع رسالتك"
                className="form-input"
                {...register('subject', {
                  required: 'الموضوع مطلوب',
                  minLength: {
                    value: 5,
                    message: 'يجب أن يكون الموضوع أطول من 5 أحرف',
                  },
                })}
              />
              {errors.subject && <span className="text-error">{errors.subject.message}</span>}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="form-label">الرسالة</label>
              <textarea
                placeholder="اكتب رسالتك هنا..."
                rows="6"
                className="form-input"
                {...register('message', {
                  required: 'الرسالة مطلوبة',
                  minLength: {
                    value: 10,
                    message: 'يجب أن تكون الرسالة أطول من 10 أحرف',
                  },
                  maxLength: {
                    value: 2000,
                    message: 'يجب ألا تتجاوز الرسالة 2000 حرف',
                  },
                })}
              />
              {errors.message && <span className="text-error">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className={`btn-primary ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">تابعنا على وسائل التواصل</h2>
          <div className="flex justify-center gap-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-4xl hover:scale-125 transition transform duration-300`}
                  title={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;