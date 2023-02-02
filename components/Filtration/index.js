import { useTranslation } from 'react-i18next';
import API from '../../api.json';

export default  function Filtration () {
    
    const { t }              = useTranslation();

    return (
        <div className='filtration p-3 my-5 rounded-2'> 
            <div className='d-flex align-items-center justify-content-between'>

                <div className='d-flex align-items-center'>
                    <div className='select-item'>
                        <select defaultValue={'DEFAULT'} onChange={ e => console.log('e', e.target.value)}>
                            <option value="DEFAULT" disabled>{t('carBrand')}</option>
                            {
                                API.brands.map((item) => (
                                    <option value={item.name} key={item.id}>{t(item.name)}</option>
                                ))
                            }
                        </select>
                    </div>
                    
                    <div className='select-item mx-3'>
                        <select defaultValue={'DEFAULT'} onChange={ e => console.log('e', e.target.value)}>
                            <option value="DEFAULT" disabled>{t('vehicleType')}</option>
                            {
                                API.brands.map((item) => (
                                    <option value={item.name} key={item.id}>{t(item.name)}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <button className='btn-button bg-white'>{t('search')}</button>

            </div>
        </div>
    )

}