import React from 'react';
import { useTranslation } from 'react-i18next';

export default function EmptyData({ data }) {

    const { t }                         = useTranslation();

    return (
        <div className='empty-data'>
            <img src='/img/empty.png' />
            <h4>{t(data.text)}</h4>
        </div>
    )
}