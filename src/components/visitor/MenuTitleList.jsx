'use client';

import styles from '@/style/visitor/MenuTitleList.module.css';
import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

export default function MenuTitleList() {
  useEffect(() => {
    new Swiper('.menuTitleList', {
      slidesPerView: 2,
      spaceBetween: 30,
      resistanceRatio: 0.5,
      breakpoints: {
        360: {
          slidesPerView: 4,
        },
      },
    });
  }, []);
  return (
    <div className={`menuTitleList ${styles.menuTitleList}`}>
      <div className={`swiper-wrapper ${styles['swiper-wrapper']}`}>
        <div className={`swiper-slide ${styles.tag} ${styles.clicked}`}>
          <span className={styles.title}>대표메뉴</span>
        </div>
        <div className={`swiper-slide `}>
          <span className={styles.title}>메인메뉴</span>
        </div>
        <div className={`swiper-slide`}>
          <span className={styles.title}>사이드</span>
        </div>
        <div className={`swiper-slide `}>
          <span className={styles.title}>음료</span>
        </div>
        <div className={`swiper-slide ${styles.noneSlice}`}>
          <span className={styles.title}>주류</span>
        </div>
      </div>
    </div>
  );
}
