import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { chooseLang } from '../../redux-toolkit/actions';

export default function Header() {

    const { t, i18n }                 = useTranslation();
    const langVal                     = useSelector((state) => state.langCars.langCars);
    const [fadeIn, setFadeIn]         = useState(false);
    const dispatch                    = useDispatch();

    // const change = (lang) => {
    //   return() =>{
    //     if(fadeIn){
    //       setFadeIn(!fadeIn);
    //     }
    //     dispatch(chooseLang(lang, i18n));
    //   }
    // }

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
                          <Link href={'/about'} className='mx-2 p-2 overflow-hidden position-relative'>
                            <span className='position-relative'>{t('about')}</span>
                          </Link>
                          <Link href={'/contact'} className='mx-2 p-2 overflow-hidden position-relative'>
                            <span className='position-relative'>{t('contact')}</span>
                          </Link>
                          <Link href={'/terms'} className='mx-2 p-2 overflow-hidden position-relative'>
                            <span className='position-relative'>{t('terms')}</span>
                          </Link>
                      </div>
                      {/* <button className="flex justify-center items-center" onClick={langVal === 'ar' || langVal === null ? change('en') : change('ar')}>
                          { langVal === 'ar' || langVal === null ? 'EN' : 'AR' }
                      </button> */}
                  </div>
              </div>
          </header>
      </div>
    )
}