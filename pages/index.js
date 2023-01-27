import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Home() {
  
  const { t, i18n }                                   = useTranslation();

  return (
    <div className={''}>
      <h1>{t('home')}</h1>
    </div>
  )
}
