import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ordersAPI } from '../services/api';

const OrderForm = ({ serviceType = 'other', onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      serviceType: serviceType,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const serviceTypes = {
    repair_phone: 'تصليح الهواتف',
    repair_computer: 'تصليح الحواسيب',
    printing: 'الطباعة',
    copying: 'التصوير',
    product_purchase: 'شراء منتجات',
    other: 'أخرى',
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await ordersAPI.createOrder(data);
      
      if (response.success) {
        setSuccessMessage(response.message);
        reset();
        
        if (onSuccess) {
          onSuccess(response);
        }

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      }
    } catch (error) {
      const errorMsg = error.message || 'حدث خطأ في إرسال الطلب';
      setErrorMessage(errorMsg);
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-right">تقديم طلب خدمة</h2>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-right animate-fade-in">
          ✅ {successMessage}
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-right animate-fade-in">
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

      {/* Service Type */}
      <div className="mb-4">
        <label className="form-label">نوع الخدمة</label>
        <select
          className="form-input"
          {...register('serviceType', {
            required: 'نوع الخدمة مطلوب',
          })}
        >
          {Object.entries(serviceTypes).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
        {errors.serviceType && <span className="text-error">{errors.serviceType.message}</span>}
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="form-label">وصف الطلب</label>
        <textarea
          placeholder="أخبرنا عن تفاصيل الطلب..."
          rows="5"
          className="form-input"
          {...register('description', {
            required: 'وصف الطلب مطلوب',
            minLength: {
              value: 10,
              message: 'يجب أن يكون الوصف أطول من 10 أحرف',
            },
            maxLength: {
              value: 1000,
              message: 'يجب ألا يتجاوز الوصف 1000 حرف',
            },
          })}
        />
        {errors.description && <span className="text-error">{errors.description.message}</span>}
      </div>

      {/* Date and Time */}
      <div className="mb-6">
        <label className="form-label">التاريخ والوقت المفضل</label>
        <input
          type="datetime-local"
          className="form-input"
          {...register('dateTime', {
            required: 'التاريخ والوقت مطلوب',
          })}
        />
        {errors.dateTime && <span className="text-error">{errors.dateTime.message}</span>}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className={`btn-primary ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'جاري الإرسال...' : 'إرسال الطلب'}
        </button>
      </div>
    </form>
  );
};

export default OrderForm;