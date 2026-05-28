import React from 'react';

const ProductCard = ({ image, name, price, description }) => {
  return (
    <div className="card overflow-hidden flex flex-col">
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4 rounded-md">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400">صورة المنتج</span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-right">{name}</h3>
      <p className="text-gray-600 text-sm mb-4 text-right flex-grow">{description}</p>
      <div className="flex justify-between items-center">
        <button className="btn-primary text-sm">أضف للسلة</button>
        <span className="text-2xl font-bold text-blue-600">{price} دج</span>
      </div>
    </div>
  );
};

export default ProductCard;