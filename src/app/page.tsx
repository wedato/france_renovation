import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Section Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la rénovation intérieure à l'aménagement extérieur, nous vous accompagnons 
              dans tous vos projets avec professionnalisme et savoir-faire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-construction-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Rénovation Intérieure</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Peinture et revêtements
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Carrelage et parquet
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Plomberie et électricité
                </li>
              </ul>
              <Link href="/services" className="text-construction-600 font-semibold hover:text-construction-700 flex items-center">
                En savoir plus
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-construction-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Rénovation Extérieure</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ravalement de façade
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Isolation thermique
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Toiture et étanchéité
                </li>
              </ul>
              <Link href="/services" className="text-construction-600 font-semibold hover:text-construction-700 flex items-center">
                En savoir plus
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-construction-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Aménagement</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Création d'espaces
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Optimisation des volumes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Solutions sur mesure
                </li>
              </ul>
              <Link href="/services" className="text-construction-600 font-semibold hover:text-construction-700 flex items-center">
                En savoir plus
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              France Rénovation 45, c'est l'assurance d'un travail de qualité réalisé par des professionnels expérimentés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-construction-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">20+ ans d'expérience</h3>
              <p className="text-gray-600">Une expertise reconnue dans le domaine de la rénovation</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-construction-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Garantie décennale</h3>
              <p className="text-gray-600">Vos travaux sont assurés et garantis</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-construction-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Équipe qualifiée</h3>
              <p className="text-gray-600">Des professionnels formés et expérimentés</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-construction-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-construction-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Devis gratuit</h3>
              <p className="text-gray-600">Estimation détaillée de votre projet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-r from-construction-600 to-construction-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Prêt à transformer votre espace ?
          </h2>
          <p className="text-xl text-construction-100 mb-12 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis personnalisé gratuit.
            Notre équipe est à votre écoute pour réaliser vos projets.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="bg-white text-construction-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander un devis
            </Link>
            <a
              href="tel:0641392834"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              06 41 39 28 34
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
