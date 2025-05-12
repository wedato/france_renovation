import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Services</h1>

        {/* Services détaillés */}
        <div className="space-y-16">
          {/* Rénovation Intérieure */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Rénovation Intérieure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Nos prestations incluent :</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Peinture et revêtements muraux</li>
                  <li>• Pose de carrelage et parquet</li>
                  <li>• Plomberie et sanitaires</li>
                  <li>• Installation électrique</li>
                  <li>• Isolation thermique et phonique</li>
                  <li>• Création de cloisons</li>
                  <li>• Faux plafonds</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Pourquoi rénover ?</h3>
                <p className="text-gray-600">
                  La rénovation intérieure permet d&apos;optimiser votre espace de vie,
                  d&apos;améliorer le confort thermique et acoustique, et d&apos;augmenter la
                  valeur de votre bien. Nos experts vous accompagnent dans chaque
                  étape de votre projet.
                </p>
              </div>
            </div>
          </section>

          {/* Rénovation Extérieure */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Rénovation Extérieure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Nos prestations incluent :</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ravalement de façade</li>
                  <li>• Isolation thermique par l&apos;extérieur</li>
                  <li>• Réfection de toiture</li>
                  <li>• Pose de gouttières</li>
                  <li>• Installation de fenêtres et portes</li>
                  <li>• Terrasse et balcons</li>
                  <li>• Étanchéité</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Les avantages</h3>
                <p className="text-gray-600">
                  La rénovation extérieure protège votre bâtiment des intempéries,
                  améliore son efficacité énergétique et valorise votre patrimoine.
                  Nous utilisons des matériaux de qualité pour des résultats durables.
                </p>
              </div>
            </div>
          </section>

          {/* Aménagement */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Aménagement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Nos prestations incluent :</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Optimisation d&apos;espace</li>
                  <li>• Création de mezzanines</li>
                  <li>• Aménagement de combles</li>
                  <li>• Installation de dressing</li>
                  <li>• Cuisine sur mesure</li>
                  <li>• Salle de bain clé en main</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Notre approche</h3>
                <p className="text-gray-600">
                  Nous créons des espaces fonctionnels et esthétiques adaptés à
                  vos besoins. Notre équipe vous conseille sur les meilleures
                  solutions d&apos;aménagement pour optimiser chaque mètre carré.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Vous avez un projet de rénovation ?
          </h2>
          <p className="text-gray-600 mb-8">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </div>
  );
} 