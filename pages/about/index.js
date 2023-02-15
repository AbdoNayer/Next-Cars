import { useTranslation } from 'react-i18next';
import { Slider } from '../../components';

export default function About() {
    
    const { t }          = useTranslation();

    const slider = [
        'https://res.cloudinary.com/heljedan8/image/upload/v1/media/slider_images/banner-4_qaulpu',
        'https://res.cloudinary.com/heljedan8/image/upload/v1/media/slider_images/banner-2_ej41ir',
        'https://res.cloudinary.com/heljedan8/image/upload/v1/media/slider_images/banner-3_uff6i0'
    ]

    return (
      <div className='container py-5'>

          <div className='my-4 rounded-3 overflow-hidden' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <Slider data={{images : slider}} />
          </div>
          
          <p>{t('disc')}</p>
          <p>{t('disc')}</p>
          <p>{t('disc')}</p>

      </div>
    )
}
  