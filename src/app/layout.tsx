import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "France Rénovation - Rénovation de bâtiments",
  description: "Entreprise spécialisée dans la rénovation de bâtiments - Travaux intérieurs et extérieurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  France Rénovation
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <Link href="/" className="text-gray-700 hover:text-blue-600">Accueil</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
                <Link href="/realisations" className="text-gray-700 hover:text-blue-600">Réalisations</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">À propos</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">France Rénovation</h3>
                <p>Votre spécialiste en rénovation de bâtiments</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p>Téléphone : XX XX XX XX XX</p>
                <p>Email : contact@francerenovation.fr</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Horaires</h3>
                <p>Lundi - Vendredi : 8h - 18h</p>
                <p>Samedi : Sur rendez-vous</p>
              </div>
            </div>
            <div className="mt-8 text-center border-t border-gray-700 pt-8">
              <p>&copy; {new Date().getFullYear()} France Rénovation. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
