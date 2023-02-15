import { useTranslation } from 'react-i18next';

export default function Terms() {
    
    const { t }          = useTranslation();

    return (
      <div className='container py-5 terms'>
          
          <p className='position-relative'>{t('disc')}</p>
          <p className='position-relative'>{t('disc')}</p>
          <p className='position-relative'>{t('disc')}</p>
          <p className='position-relative'>{t('disc')}</p>
          <p className='position-relative'>{t('disc')}</p>
          <p className='position-relative'>{t('disc')}</p>
          <p className='position-relative'>{t('disc')}</p>

      </div>
    )
}
  