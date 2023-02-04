import { useTranslation } from 'react-i18next';
import Link from "next/link";
import Image from 'next/image';

export default function ErrorPage() {
    
    const { t }          = useTranslation();
    
    return (
      <div className='min-page error-page py-5'>
          <div className='container text-center w-full py-5'>
              <div className='relative'>
                  <Image 
                    src={'/img/error-2.png'}
                    width={'270'} 
                    height={'270'}
                    alt='404'
                  />
              </div>
              <h4 className='my-5 fw-bold'>{ t('404') }</h4>
              <Link href='/' className='bg-second h-auto w-auto d-table py-3 px-4 m-auto'>
                  { t('gohome') }
              </Link>
          </div>
      </div>
    )
  }
  
  