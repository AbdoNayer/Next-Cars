import React from 'react';
import Link from "next/link";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  
  const { t }                         = useTranslation();

  return (
    <footer>
        <h1>Footer</h1>
    </footer>
  )
}