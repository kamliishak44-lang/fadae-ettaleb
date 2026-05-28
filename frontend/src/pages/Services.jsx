import React from 'react';
import { FaTools, FaPhone, FaShoppingCart, FaPrint, FaCopy, FaLaptop } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const servicesData = [
    {
      icon: FaPhone,
      title: 'تصليح الهواتف الذكية',
      description: 'إصلاح جميع أنواع الهواتف (آيفون، سامسونج، أوبو، إلخ) مع ضمان الجودة',
    },
    {
      icon: FaLaptop,
      title: 'تصليح الحواسيب المحمولة',
      description: 'صيانة وإصلاح الحواسيب المحمولة والأجهزة اللوحية بكفاءة عالية',
    },
    {
      icon: FaTools,
      title: 'صيانة أجهزة سطح المكتب',
      description: 'خدمات شاملة لصيانة وتحديث أجهزة الكمبيوتر الثابتة',
    },
    {
      icon: FaPrint,
      title: 'خدمات الطباعة',
      description: 'طباعة عالية الجودة للمستندات والصور بجميع الأحجام',
    },
    {
      icon: FaCopy,
      title: 'خدمات التصوير والنسخ',
      description: 'تصوير ونسخ سريع وفعال بأسعار تنافسية',
    },
    {
      icon: FaShoppingCart,
      title: 'المنتجات الرقمية',
      description: 'توفير برامج موثوقة وتطبيقات بجودة عالية وأسعار مناسبة',
    },
  ];

  const serviceDetails = [
    {
      title: 'تصليح الهواتف',
      items: [
        'إصلاح الشاشات المكسورة',
        'استبدال البطاريات',
        'إصلاح المنافذ والأزرار',
        'تنظيف وصيانة دورية',
        'استرجاع البيانات المفقودة',
      ],
    },
    {
      title: 'تصليح الحواسيب',
      items: [
        'إصلاح مشاكل البرمجيات',
        'استبدال المكونات المعطلة',
        'تنظيف وتحسين الأداء',
        'تثبيت الأنظمة والبرامج',
        'حماية من الفيروسات والبرمجيات الخبيثة',
      ],
    },
    {
      title: 'خدمات أخرى',
      items: [
        'استشارات تقنية مجانية',
        'دعم فني سريع',
        'توفير قطع غيار أصلية',
        'ضمان على جميع الخدمات',
        'تسليم سريع وآمن',
      ],
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-l from-blue-600 to-blue-800 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا</h1>
          <p className="text-lg md:text-xl">
            مجموعة شاملة من الخدمات التقنية المتخصصة
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">جميع الخدمات المتاحة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">تفاصيل الخدمات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceDetails.map((detail, index) => (
              <div key={index} className="card text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{detail.title}</h3>
                <ul className="space-y-3">
                  {detail.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-right">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="bg-blue-50 py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">أسعار تنافسية</h2>
          <p className="text-lg text-gray-600 mb-6">
            نقدم أفضل الأسعار في السوق مع ضمان الجودة والكفاءة
          </p>
          <a
            href="/service-request"
            className="btn-primary inline-block"
          >
            اطلب خدمة الآن للحصول على سعر
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
