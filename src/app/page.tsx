import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Rénovation de bâtiment"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            France Rénovation
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Votre partenaire de confiance pour tous vos projets de rénovation
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Demander un devis gratuit
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Rénovation Intérieure</h3>
              <p className="text-gray-600">
                Transformation complète de vos espaces intérieurs : peinture,
                revêtements, plomberie, électricité...
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Rénovation Extérieure</h3>
              <p className="text-gray-600">
                Ravalement de façade, isolation thermique, toiture,
                menuiseries extérieures...
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Aménagement</h3>
              <p className="text-gray-600">
                Création et optimisation d'espaces, cloisons, faux-plafonds,
                agencement sur mesure...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">25+</div>
              <p className="text-gray-600">Années d'expérience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">500+</div>
              <p className="text-gray-600">Projets réalisés</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">100%</div>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">10</div>
              <p className="text-gray-600">Experts qualifiés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à transformer votre espace ?
          </h2>
          <p className="text-white text-xl mb-8">
            Contactez-nous dès aujourd'hui pour un devis personnalisé gratuit
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
}
