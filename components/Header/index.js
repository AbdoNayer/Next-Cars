import React, { useState } from 'react';
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { chooseLang } from '../../redux-toolkit/actions';
import { useRouter } from 'next/router';

export default function Header() {

    const router                                        = useRouter();
    const { t, i18n }                                   = useTranslation();
    const langVal                                       = useSelector((state) => state.language.language);
    const [fadeIn, setFadeIn]                           = useState(false);
    const dispatch                                      = useDispatch();

    const change = (lang) => {
        dispatch(chooseLang(lang, i18n));
    }

  return (
    <div className=''>
        <header className='py-3 position-sticky top-0 bg-white bx-shadow'>
          <h1>Header</h1>
        </header>
    </div>
  )
}