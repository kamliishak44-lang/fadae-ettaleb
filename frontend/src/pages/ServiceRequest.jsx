import React from 'react';
import OrderForm from '../components/OrderForm';

const ServiceRequest = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-l from-blue-600 to-blue-800 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">طلب خدمة</h1>
          <p className="text-lg md:text-xl">
            قدم طلبك الآن واحصل على أفضل الخدمات
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <OrderForm />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">كيفية تقديم طلب</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card text-right">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">خطوات بسيطة</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                  <span>أملأ النموذج بمعلوماتك الشخصية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                  <span>اختر نوع الخدمة التي تريدها</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                  <span>اكتب وصفاً مفصلاً لطلبك</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                  <span>حدد التاريخ والوقت المفضل</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">5.</span>
                  <span>اضغط على إرسال الطلب</span>
                </li>
              </ol>
            </div>

            <div className="card text-right">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">معلومات مهمة</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">⏱️ وقت الرد</h4>
                  <p>سنرد على طلبك خلال 24 ساعة</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">📞 التواصل</h4>
                  <p>سنتصل بك أو نرسل لك رسالة تأكيد</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">✅ الضمان</h4>
                  <p>جميع الخدمات مضمونة وموثوقة</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">💳 الدفع</h4>
                  <p>طرق دفع متعددة وآمنة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceRequest;
