import React from 'react';
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import API from '../../api.json';

export default function Footer() {
  
  const { t }                         = useTranslation();
  const langVal                       = useSelector((state) => state.langCars.langCars);

  return (
    <footer className='bg-second pt-4 mt-5 pb-5'>
        <div className='container text-center'>
            <h4 className='mb-4 fw-bold'>{t('title')}</h4>
            <div className='d-flex align-items-center justify-content-center social'>
                {
                  API.social.map((item) => (
                      <Link target="_blank" key={item.id} href={item.link} style={{ backgroundColor : item.color, color : item.icon === 'icon-snapchat' ? '#000' : '#fff' }} className={`d-flex align-items-center justify-content-center mx-2`}>
                        <span className={item.icon} />
                      </Link>
                  ))
                }
            </div>
        </div>
    </footer>
  )
}