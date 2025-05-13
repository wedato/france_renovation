'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    type: 'video',
    src: '/video-interieur.MP4',
    title: 'Donnez vie à vos projets de rénovation',
    description: 'Depuis 2018, France Rénovation 45 transforme vos espaces avec expertise et passion. Plus de 20 ans d&apos;expérience dans le BTP à votre service.'
  },
  {
    type: 'image',
    src: '/images/baniere.JPG',
    title: 'Excellence et savoir-faire',
    description: 'Une équipe de professionnels qualifiés pour tous vos projets de rénovation intérieure et extérieure.'
  },
  {
    type: 'image',
    src: '/images/77933ccd-2933-4352-abc1-49108a90b0a4.JPG',
    title: 'Des réalisations sur mesure',
    description: 'Chaque projet est unique, nous nous adaptons à vos besoins et vos envies.'
  }
];

export default function HeroCarousel() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return null;
  }

  return (
    <section className="relative h-[90vh] w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {slide.type === 'video' ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            )}
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-200 mb-8">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="bg-construction-600 hover:bg-construction-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      Demander un devis gratuit
                    </Link>
                    <Link
                      href="/realisations"
                      className="bg-white hover:bg-gray-100 text-construction-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      Voir nos réalisations
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
} 