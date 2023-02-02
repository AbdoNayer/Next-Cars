import React from 'react';
import Link from "next/link";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  
  const { t }                         = useTranslation();

  return (
    <footer className='bg-second pt-4 mt-5 pb-5'>
        <div className='container text-center'>
            <h4 className='mb-4 fw-bold'>{t('title')}</h4>
            <div className='d-flex align-items-center justify-content-center social'>
                <Link href={'/'} className='facebook d-flex align-items-center justify-content-center text-white mx-2'>
                  <span className='icon-facebook' />
                </Link>
                <Link href={'/'} className='instagram d-flex align-items-center justify-content-center text-white mx-2'>
                  <span className='icon-instagram' />
                </Link>
                <Link href={'/'} className='twitter d-flex align-items-center justify-content-center text-white mx-2'>
                  <span className='icon-twitter' />
                </Link>
                <Link href={'/'} className='youtube d-flex align-items-center justify-content-center text-white mx-2'>
                  <span className='icon-youtube' />
                </Link>
            </div>
        </div>
    </footer>
  )
}