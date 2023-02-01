import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Header() {

    const { t }                                         = useTranslation();

    return (
      <div className=''>
          <header className='py-3 position-sticky top-0 bg-white bx-shadow'>
              <div className='container'>
                  <div className='d-flex align-items-center justify-content-between'>
                      <Link href={'/'} className='logo'>
                          <Image style={{ objectFit : "contain" }} src={'/img/logo.png'} alt='logo' width='256' height='75' />
                      </Link>
                      <div className='d-flex align-items-center links'>
                          <Link href={'/'} className='mx-2 p-2 overflow-hidden position-relative active'>
                            <span className='position-relative'>{t('home')}</span>
                          </Link>
                          <Link href={'/'} className='mx-2 p-2 overflow-hidden position-relative'>
                            <span className='position-relative'>{t('about')}</span>
                          </Link>
                          <Link href={'/'} className='mx-2 p-2 overflow-hidden position-relative'>
                            <span className='position-relative'>{t('contact')}</span>
                          </Link>
                          <Link href={'/'} className='mx-2 p-2 overflow-hidden position-relative'>
                            <span className='position-relative'>{t('terms')}</span>
                          </Link>
                      </div>
                  </div>
              </div>
          </header>
      </div>
    )
}