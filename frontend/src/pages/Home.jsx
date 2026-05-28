import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaShoppingCart, FaPrint, FaCopy, FaSmile, FaRocket } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      icon: FaTools,
      title: 'تصليح الهواتف',
      description: 'نصلح جميع أنواع الهواتف الذكية بسرعة واحترافية',
    },
    {
      icon: FaShoppingCart,
      title: 'تصليح الحواسيب',
      description: 'خدمات متخصصة لصيانة وتصليح الحواسيب والأجهزة',
    },
    {
      icon: FaPrint,
      title: 'الطباعة والتصوير',
      description: 'خدمات طباعة وتصوير عالية الجودة بأسعار تنافسية',
    },
    {
      icon: FaCopy,
      title: 'المنتجات الرقمية',
      description: 'توفير برامج وتطبيقات موثوقة بأفضل الأسعار',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-l from-blue-600 to-blue-800 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">فضاء الطالب</h1>
          <p className="text-xl md:text-2xl mb-8">
            منصتك الموثوقة لخدمات الإعلام الآلي وتصليح الأجهزة
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/service-request" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              اطلب خدمة الآن
            </Link>
            <Link to="/products" className="btn-outline border-white text-white hover:bg-blue-700">
              تصفح المنتجات
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">خدماتنا المميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
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

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">لماذا تختار فضاء الطالب؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-right">
              <div className="flex justify-end mb-4">
                <FaRocket className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">سرعة في الخدمة</h3>
              <p className="text-gray-600">
                نقدم خدمات سريعة وفعالة لجميع احتياجاتك التقنية
              </p>
            </div>

            <div className="card text-right">
              <div className="flex justify-end mb-4">
                <FaSmile className="text-4xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">رضا العملاء</h3>
              <p className="text-gray-600">
                فريقنا المتخصص يسعى لتقديم أفضل تجربة لك
              </p>
            </div>

            <div className="card text-right">
              <div className="flex justify-end mb-4">
                <FaTools className="text-4xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">كفاءة عالية</h3>
              <p className="text-gray-600">
                تقنيات حديثة وفنيون مدربون على أعلى مستوى
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">هل تحتاج إلى خدماتنا؟</h2>
          <p className="text-lg mb-8">
            تواصل معنا الآن واحصل على أفضل الخدمات والمنتجات
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/service-request" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              اطلب خدمة
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-blue-700">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
