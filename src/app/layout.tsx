import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "France Rénovation 45 - Expert en rénovation depuis 2018",
  description: "Entreprise spécialisée dans la rénovation de bâtiments - Travaux intérieurs et extérieurs dans le Loiret. Dirigée par Bernard Baltaci.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* Header avec barre de contact */}
        <div className="bg-construction-800 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-4">
                <a href="tel:0651392834" className="hover:text-construction-200 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  06 51 39 28 34
                </a>
                <a href="mailto:renovationfrance45@gmail.com" className="hover:text-construction-200 hidden sm:flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  renovationfrance45@gmail.com
                </a>
              </div>
              <div className="hidden sm:block text-construction-200">
                Plus de 20 ans d'expérience dans le BTP
              </div>
            </div>
          </div>
        </div>

        {/* Navigation principale */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-construction-600 to-construction-800 bg-clip-text text-transparent">
                    France Rénovation 45
                  </span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-construction-600 font-medium">Accueil</Link>
                <Link href="/services" className="text-gray-700 hover:text-construction-600 font-medium">Services</Link>
                <Link href="/realisations" className="text-gray-700 hover:text-construction-600 font-medium">Réalisations</Link>
                <Link href="/about" className="text-gray-700 hover:text-construction-600 font-medium">À propos</Link>
                <Link 
                  href="/contact" 
                  className="bg-construction-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-construction-700 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-construction-400">France Rénovation 45</h3>
                <p className="text-gray-400 mb-4">Votre spécialiste en rénovation de bâtiments depuis 2018</p>
                <p className="text-gray-400">Dirigée par Bernard Baltaci</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 text-construction-400">Contact</h3>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-construction-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-400">
                      181 AVENUE DE VERDUN<br />
                      BATIMENT B - RESIDENCE LES CEDRES<br />
                      83340 LE CANNET-DES-MAURES
                    </span>
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-construction-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:0651392834" className="text-gray-400 hover:text-construction-400">06 51 39 28 34</a>
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-construction-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:renovationfrance45@gmail.com" className="text-gray-400 hover:text-construction-400">
                      renovationfrance45@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 text-construction-400">Horaires</h3>
                <div className="text-gray-400 space-y-2">
                  <p>Lundi - Vendredi : 8h - 18h</p>
                  <p>Samedi : Sur rendez-vous</p>
                  <p>Dimanche : Fermé</p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block bg-construction-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-construction-700 transition-colors"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} France Rénovation 45. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
