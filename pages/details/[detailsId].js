import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { Slider } from '../../components';

export default function Details() {
  
  const { t }                                   = useTranslation();
  const router                                  = useRouter();
  const data                                    = router.query;
  const langVal                                 = useSelector((state) => state.langCars.langCars);

  return (
    <div className={'section-home'}>

      <div className='container py-4'>

          <div className='d-flex align-items-center justify-content-between'>
              <h4 className='m-0'>{data.nameCar}</h4>
              <p className='text-danger m-0'>{data.price}</p>
          </div>
          
          <div className='my-4 rounded-3 overflow-hidden' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <Slider data={{images : data.img}} />
          </div>

          


      </div>

    </div>
  )
}
