import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'شاشة حماية زجاجية',
      price: 2500,
      category: 'accessories',
      description: 'شاشة حماية زجاجية عالية الجودة لجميع أنواع الهواتف',
      image: null,
    },
    {
      id: 2,
      name: 'كابل شحن USB-C',
      price: 1500,
      category: 'cables',
      description: 'كابل شحن سريع وآمن للهواتف والأجهزة',
      image: null,
    },
    {
      id: 3,
      name: 'بطارية خارجية 20000mAh',
      price: 5000,
      category: 'batteries',
      description: 'بطارية خارجية بسعة عالية لشحن آمن وسريع',
      image: null,
    },
    {
      id: 4,
      name: 'حقيبة حماية للحاسوب',
      price: 3500,
      category: 'accessories',
      description: 'حقيبة واقية مضادة للماء للحواسيب المحمولة',
      image: null,
    },
    {
      id: 5,
      name: 'ماوس لاسلكي',
      price: 2800,
      category: 'peripherals',
      description: 'ماوس لاسلكي مريح وموثوق للعمل اليومي',
      image: null,
    },
    {
      id: 6,
      name: 'لوحة مفاتيح ميكانيكية',
      price: 8000,
      category: 'peripherals',
      description: 'لوحة مفاتيح احترافية للكتابة والعمل',
      image: null,
    },
    {
      id: 7,
      name: 'ذاكرة USB فلاش 64GB',
      price: 3000,
      category: 'storage',
      description: 'ذاكرة تخزين سريعة وآمنة لنقل البيانات',
      image: null,
    },
    {
      id: 8,
      name: 'سماعات أذن بلوتوث',
      price: 4500,
      category: 'audio',
      description: 'سماعات لاسلكية بجودة صوت عالية ومريحة',
      image: null,
    },
  ];

  const categories = [
    { id: 'all', name: 'جميع المنتجات' },
    { id: 'accessories', name: 'الإكسسوارات' },
    { id: 'cables', name: 'الكابلات' },
    { id: 'batteries', name: 'البطاريات' },
    { id: 'peripherals', name: 'أطراف التوصيل' },
    { id: 'storage', name: 'التخزين' },
    { id: 'audio', name: 'الصوتيات' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-l from-blue-600 to-blue-800 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">متجرنا</h1>
          <p className="text-lg md:text-xl">
            مجموعة كبيرة من المنتجات التقنية بأسعار مميزة
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4 text-right">التصنيفات:</h2>
          <div className="flex flex-wrap gap-2 justify-end">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">لا توجد منتجات في هذا التصنيف</p>
            </div>
          )}
        </div>
      </section>

      {/* Shopping Info */}
      <section className="bg-blue-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-right">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">طريقة الشراء</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-4xl text-blue-600 font-bold mb-2 text-right">1</div>
              <h3 className="text-lg font-semibold mb-2">اختر المنتجات</h3>
              <p className="text-gray-600">
                اختر المنتجات التي تريدها من المتجر
              </p>
            </div>
            <div className="card">
              <div className="text-4xl text-blue-600 font-bold mb-2 text-right">2</div>
              <h3 className="text-lg font-semibold mb-2">تواصل معنا</h3>
              <p className="text-gray-600">
                اتصل بنا أو أرسل رسالة لتأكيد طلبك
              </p>
            </div>
            <div className="card">
              <div className="text-4xl text-blue-600 font-bold mb-2 text-right">3</div>
              <h3 className="text-lg font-semibold mb-2">استقبل طلبك</h3>
              <p className="text-gray-600">
                سيتم توصيل طلبك إليك بسرعة وأمان
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
