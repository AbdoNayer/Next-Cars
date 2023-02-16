import { useTranslation } from 'react-i18next';
import { Filtration, ItemCar } from '../components';
import { useSelector } from "react-redux";
import API from '../api.json';

export default function Home() {
  
  const { t }                                   = useTranslation();
  const langVal                                 = useSelector((state) => state.langCars.langCars);

  return (
    <div className={'section-home'}>
      

        <div className='container'>

            <Filtration />

            <div className='result-items'>

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
