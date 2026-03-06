// MySwiper.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import VS from '../assets/VS.png';
import php from '../assets/php.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import sql from '../assets/sql.png';
import laravel from '../assets/laravel.png';
import react from '../assets/react.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Box = ({ href, src, alt, label }) => (
  <a
    href={href}
    style={{
      flex: 1,
      backgroundColor: '#fff',
      height: '150px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      textDecoration: 'none',
      color: '#000',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    }}
  >
    {src && (
      <img
        src={src}
        alt={alt}
        style={{
          width: '60%',
          height: '60%',
          objectFit: 'contain',
          marginBottom: '8px',
        }}
      />
    )}
    {label && <div style={{ fontWeight: 'bold' }}>{label}</div>}
  </a>
);

const MySwiper = () => {
  return (
    <Swiper
      direction="horizontal"
      loop={true}
      modules={[Navigation, Pagination, Scrollbar]}
      pagination={{ clickable: true }}
      navigation
      scrollbar={{ draggable: true }}
      style={{
        height: '400px',
        position: 'relative',
        padding: '40px 0', 
      }}
    >
      <SwiperSlide>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '0 20px',
          }}
        >
          <Box
            href="https://example.com/page1"
            src={laravel}
            alt="Laravel"
            label="Laravel"
          />
          <Box
            href="https://example.com/page1"
            src={VS}
            alt="VS code"
            label="VS Code"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '0 20px',
          }}
        >
          <Box
            href="https://example.com/page1"
            src={html}
            alt="HTML"
            label="HTML"
          />
          <Box
            href="https://example.com/page1"
            src={php}
            alt="PHP"
            label="PHP"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '0 20px',
          }}
        >
          <Box
            href="https://example.com/page1"
            src={css}
            alt="CSS"
            label="CSS"
          />
          <Box
            href="https://example.com/page1"
            src={react}
            alt="React"
            label="React"
          />
        </div>
      </SwiperSlide>
            <SwiperSlide>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '0 20px',
          }}
        >
          <Box
            href="https://example.com/page1"
            src={js}
            alt="Javascript"
            label="Javascript"
          />
          <Box
            href="https://example.com/page1"
            src={sql}
            alt="SQL"
            label="SQL"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;



