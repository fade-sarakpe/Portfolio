// إنشاء ملف: components/AOSInit.js
"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return null;
};
