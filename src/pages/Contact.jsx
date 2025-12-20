import React from 'react'
import AdsensePlaceholder from '../components/AdsensePlaceholder'

const Contact = () => {
  const contactMethods = [
    {
      name: 'واتساب',
      icon: '💬',
      description: 'للطلبات السريعة والاستفسارات الفورية',
      link: 'https://wa.me/249999929966',
      buttonText: 'تواصل عبر واتساب',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'هاتف',
      icon: '📞',
      description: 'للاستفسارات والاستشارات الفنية',
      link: 'tel:+249999929966',
      buttonText: 'اتصل بنا الآن',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'البريد الإلكتروني',
      icon: '📧',
      description: 'للطلبات الرسمية والاستفسارات التفصيلية',
      link: 'mailto:info@renault-trucks.com',
      buttonText: 'أرسل بريدًا',
      color: 'bg-red-600 hover:bg-red-700'
    }
  ]

  const socialMedia = [
    {
      name: 'فيسبوك',
      icon: '📘',
      link: 'https://facebook.com',
      color: 'bg-blue-600'
    },
    {
      name: 'يوتيوب',
      icon: '📺',
      link: 'https://youtube.com',
      color: 'bg-red-600'
    },
    {
      name: 'انستقرام',
      icon: '📷',
      link: 'https://instagram.com',
      color: 'bg-pink-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
            تواصل معنا
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نحن هنا لمساعدتك في اختيار قطع الغيار المناسبة وتقديم الدعم الفني اللازم
          </p>
        </div>

        {/* Adsense Top */}
        <AdsensePlaceholder />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-industrial-dark mb-6">
                طرق التواصل
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h3 className="text-xl font-bold text-industrial-dark mb-2">
                      {method.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {method.description}
                    </p>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${method.color} text-white py-3 px-6 rounded-lg font-bold transition-colors inline-block w-full text-center`}
                    >
                      {method.buttonText}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-industrial-dark mb-6">
                معلومات المتجر
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-industrial-dark mb-4">ساعات العمل</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>السبت - الخميس:</span>
                      <span className="font-bold">8:00 ص - 10:00 م</span>
                    </li>
                    <li className="flex justify-between">
                      <span>الجمعة:</span>
                      <span className="font-bold">4:00 م - 10:00 م</span>
                    </li>
                    <li className="flex justify-between">
                      <span>خدمة الطوارئ:</span>
                      <span className="font-bold text-green-600">24/7</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-industrial-dark mb-4">معلومات إضافية</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• شحن مجاني للطلبات فوق 5000 ريال</li>
                    <li>• دعم فني متاح 24/7</li>
                    <li>• ضمان على جميع المنتجات</li>
                    <li>• استبدال خلال 14 يوم</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact & Social */}
          <div className="space-y-8">
            {/* Quick Contact Card */}
            <div className="bg-renault-blue text-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">اتصل بنا مباشرة</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">الهاتف</p>
                    <p className="font-bold">00249999929966</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">البريد الإلكتروني</p>
                    <p className="font-bold">info@renault-trucks.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-industrial-dark mb-4">
                وسائل التواصل الاجتماعي
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white rounded-lg p-4 text-center hover:opacity-90 transition-opacity`}
                  >
                    <div className="text-2xl mb-1">{social.icon}</div>
                    <span className="text-xs font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Action */}
            <div className="bg-industrial-yellow text-industrial-dark rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">طلب عرض سعر</h3>
              <p className="text-sm mb-4">
                احصل على أفضل الأسعار للكميات الكبيرة والمشاريع
              </p>
              <a
                href="https://wa.me/249999929966?text=أريد+عرض+سعر+لقطع+غيار+شاحنات+رينو"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-industrial-dark text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-800 transition-colors inline-block w-full text-center"
              >
                اطلب عرض سعر
              </a>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-industrial-dark mb-6">موقعنا</h2>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>خريطة الموقع</p>
              <p className="text-sm">المملكة العربية السعودية</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-industrial-dark mb-6 text-center">
            الأسئلة الشائعة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "ما هي مدة التوصيل؟",
                answer: "مدة التوصيل من 24 إلى 48 ساعة لجميع أنحاء المملكة، مع خدمة توصيل سريع متاحة للطلبات العاجلة."
              },
              {
                question: "هل القطع أصلية أم بديلة؟",
                answer: "نوفر كلا النوعين: قطع أصلية معتمدة من رينو وقطع بديلة عالية الجودة مع ضمان مطابقتها للمواصفات الأصلية."
              },
              {
                question: "هل يوجد ضمان على المنتجات؟",
                answer: "نعم، جميع المنتجات مغطاة بالضمان حسب نوع القطعة. تتراوح فترات الضمان من 6 أشهر إلى سنتين."
              },
              {
                question: "كيف أتأكد من توافق القطعة مع شاحنتي؟",
                answer: "يمكنك التواصل مع فريقنا الفني عبر الواتساب أو الهاتف وسنقدم لك الدعم اللازم لتحديد القطعة المناسبة."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-industrial-dark mb-3 text-lg">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Adsense */}
        <AdsensePlaceholder />
      </div>
    </div>
  )
}

export default Contact