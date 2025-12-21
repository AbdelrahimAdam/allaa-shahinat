import React from 'react'

const Contact = () => {
  const contactMethods = [
    {
      name: 'واتساب',
      icon: 'fab fa-whatsapp',
      description: 'للطلبات السريعة والاستفسارات الفورية',
      link: 'https://wa.me/249999929966',
      buttonText: 'تواصل عبر واتساب',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'هاتف',
      icon: 'fas fa-phone-alt',
      description: 'للاستفسارات والاستشارات الفنية',
      link: 'tel:+201234567890',
      buttonText: 'اتصل بنا الآن',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'البريد الإلكتروني',
      icon: 'fas fa-envelope',
      description: 'للطلبات الرسمية والاستفسارات التفصيلية',
      link: 'mailto:info@renault-trucks-egypt.com',
      buttonText: 'أرسل بريدًا',
      color: 'bg-red-600 hover:bg-red-700'
    }
  ]

  const socialMedia = [
    {
      name: 'فيسبوك',
      icon: 'fab fa-facebook-f',
      link: 'https://facebook.com',
      color: 'bg-blue-600'
    },
    {
      name: 'يوتيوب',
      icon: 'fab fa-youtube',
      link: 'https://youtube.com',
      color: 'bg-red-600'
    },
    {
      name: 'انستقرام',
      icon: 'fab fa-instagram',
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
                    <div className="text-4xl mb-4">
                      <i className={`${method.icon} text-4xl ${method.name === 'واتساب' ? 'text-green-600' : method.name === 'هاتف' ? 'text-blue-600' : 'text-red-600'}`} />
                    </div>
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
                      <span className="font-bold">10:00 ص - 2:00 م، 5:00 م - 10:00 م</span>
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
                    <li>• شحن مجاني داخل القاهرة الكبرى</li>
                    <li>• دعم فني متاح 24/7</li>
                    <li>• ضمان على جميع المنتجات</li>
                    <li>• استبدال خلال 14 يوم</li>
                    <li>• خدمة تركيب مجانية للقطع الكبيرة</li>
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
                    <i className="fas fa-phone text-lg" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">الهاتف</p>
                    <p className="font-bold">+20 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-lg" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">البريد الإلكتروني</p>
                    <p className="font-bold">info@renault-trucks-egypt.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-lg" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">الموقع</p>
                    <p className="font-bold">القاهرة، مصر</p>
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
                    <div className="text-2xl mb-1">
                      <i className={`${social.icon} text-white`} />
                    </div>
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
              <i className="fas fa-map-marker-alt text-4xl mb-2" />
              <p>خريطة الموقع</p>
              <p className="text-sm">القاهرة، مصر</p>
              <p className="text-xs mt-2">شارع النصر، المعادي، القاهرة</p>
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
                question: "ما هي مدة التوصيل داخل القاهرة؟",
                answer: "مدة التوصيل من 2 إلى 4 ساعات داخل القاهرة الكبرى، ومن 24 إلى 48 ساعة لباقي المحافظات."
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
              },
              {
                question: "هل تقدمون خدمة التركيب؟",
                answer: "نعم، نقدم خدمة تركيب مجانية للقطع الكبيرة داخل القاهرة، ولدينا فريق فني متخصص لجميع أنواع الشاحنات."
              },
              {
                question: "ما هي مناطق التوصيل داخل مصر؟",
                answer: "نوصل لجميع محافظات مصر: القاهرة، الجيزة، الإسكندرية، وغيرها من المحافظات الرئيسية."
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
      </div>
    </div>
  )
}

export default Contact