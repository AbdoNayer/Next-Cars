import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import Link from "next/link";
import { ItemCar, Slider } from '../../components';
import API from '../../api.json';

export default function Details() {
  
  const { t }                                   = useTranslation();
  const router                                  = useRouter();
  const data                                    = router.query;
  const langVal                                 = useSelector((state) => state.langCars.langCars);

  return (
    <div className={'section-details'}>

      <div className='container py-4'>

          <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <Link href={'/'}>{t('home')}</Link>
                <span className='mx-2'>/</span>
                <h6 className='m-0 mx-1 second-color'>{data.nameCar}</h6>
              </div>
              {/* <p className='text-danger m-0'>{data.price}</p> */}
          </div>
          
          <div className='my-4 rounded-3 overflow-hidden' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <Slider data={{images : data.img}} />
          </div>

          <div className=''>

              <div className='row'>

                <div className='col-md-8 col-xs-12'>

                    <h5>{t('cars.detailsCar')}</h5>
                                        
                    <table class="table table-bordered my-4">
                        <thead>
                          <tr>
                            <th>{t('cars.carbrand')}</th>
                            <th>{t('cars.typeCar')}</th>
                            <th>{t('cars.model')}</th>
                            <th>{t('cars.asphaltType')}</th>
                            <th>{t('cars.plugins')}</th>
                            <th>{t('cars.category')}</th>
                            <th>{t('cars.city')}</th>
                            <th>{t('cars.incoming')}</th>
                            <th>{t('cars.fuelType')}</th>
                            <th>{t('cars.engineCapacity')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>بريمي</td>
                            <td>Tiggo 2 Pro</td>
                            <td>2023</td>
                            <td>CVT</td>
                            <td>فل</td>
                            <td>Luxury</td>
                            <td>الرياض</td>
                            <td>سعودي</td>
                            <td>بنزين</td>
                            <td>1.5</td>
                          </tr>
                        </tbody>
                    </table>

                    <div className=''>

                      <p>
                      يعلن معرض  نسيم البريمي للسيارات عن توفر السيارة التالية :-
                      <br />
                      نوع السيارة : شيري تيجو 2 برو
                      <br />
                      فئة السيارة : لاكجري
                      <br />
                      موديل السيارة : 2023
                      <br />
                      الألوان المتوفرة : (( ابيض _ رمادي ))
                      <br />
                      وهو وارد : الوكيل
                      <br />
                      علما بأن السيارة جديدة ( غير مستخدمة )
                      <br />
                      ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                      <br />

                      * مواصفات المحرك و الجير ونظام الدفع *
                      <br />

                      محرك 1500 سي سي 4 سلندر
                      جير CVT
                      دفع امامي
                      <br />
                      ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                      <br />
                      * مواصفات السيارة الخارجية *
                      <br />

                      فتحة سقف
                      جنوط مقاس 17 انش
                      انوار ليد عالي واطي
                      ليد نهاري
                      اشارات مرايا
                      حساسات خلفية
                      حنايا عفش
                      ليد خلفي
                      جناح خلف

                      <br />
                      ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                      <br />
                      * مواصفات السيارة الداخلية *
                      <br />

                      دخول ذكي
                      تشغيل ذكي
                      تشغيل عن بعد
                      مقاعد قماش و جلد
                      زجاج كهربائي
                      مرايا كهربائية
                      مقود مكسو ب الجلد
                      تحكم ب المقود للنظام الصوتي
                      مثبت سرعة
                      بلوتوث
                      شاشة معلومات ابل كار بلاي
                      كاميرا خلفية
                      منفذ يو اس بي
                      منفذ طاقة
                      مكيف يدوي
                      تكاية ب الوسط درج

                      <br />
                      ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                      <br />
                      * مواصفات الامن و السلامة *
                      <br />

                      فرامل ABS
                      نظام الثبات الإلكتروني
                      حساس كفرات
                      عدد 2 ارباج
                      عدد 5 احزمة امان

                      <br />
                      ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                      <br />
                      يوجد لدينا اقساط نتعامل مع البنوك و الشركات التمويلية
                      تطبق الشروط و الاحكام
                      </p>

                    </div>

                </div>

                <div className='col-md-4 col-xs-12'>

                    <div className='section-contact rounded-3 p-3 text-center'>
                        <h6 className='my-3'> تفاصيل للتواصل </h6>
                        <h6 className='my-3'>معرض نسيم البريمي للسيارات</h6>
                        <p>السعودية - الرياض - شارع العرب</p>
                        <button className='btn-button w-75 my-2 bg-second'>+201001846667</button>
                        <button className='btn-button w-75 my-2 bg-second'>+201001846667</button>
                        <button className='btn-button w-75 my-2 bg-second'>+201001846667</button>
                    </div>

                </div>

              </div>

          </div>
          
            <div className='result-items mt-5 pt-5'>


                <h5 className='bg-second p-3 my-3 rounded-2'>إعلانات مشابهة</h5>

                <div className='row'>
                  {
                    API.itemsCars.map((item) => (
                      <div key={item.id} className='col-md-3 col-xs-12 overflow-hidden'>
                        <ItemCar data={item} />
                      </div>
                    ))
                  }
                </div>
            </div>

      </div>

    </div>
  )
}
