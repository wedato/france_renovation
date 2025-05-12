export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">À propos de France Rénovation</h1>

        {/* Histoire de l'entreprise */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Notre Histoire</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Fondée en 1998, France Rénovation est née de la passion pour le
              travail bien fait et du désir d'offrir des services de rénovation
              de haute qualité aux particuliers et aux professionnels.
            </p>
            <p className="mb-4">
              Depuis plus de 25 ans, notre entreprise familiale n'a cessé de
              croître et d'évoluer, tout en conservant ses valeurs fondamentales :
              l'excellence du travail, le respect des engagements et la satisfaction
              client.
            </p>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Qualité</h3>
              <p className="text-gray-600">
                Nous nous engageons à utiliser les meilleurs matériaux et à
                appliquer les techniques les plus adaptées pour garantir des
                résultats durables.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Professionnalisme</h3>
              <p className="text-gray-600">
                Notre équipe d'experts qualifiés assure un suivi rigoureux de
                chaque projet, du premier contact jusqu'à la livraison finale.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Innovation</h3>
              <p className="text-gray-600">
                Nous restons à la pointe des nouvelles technologies et des
                techniques de rénovation pour offrir les meilleures solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Notre Équipe</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              France Rénovation, c'est une équipe de 10 professionnels passionnés,
              chacun expert dans son domaine : maçons, électriciens, plombiers,
              peintres, et menuisiers. Tous partagent la même vision de
              l'excellence et du service client.
            </p>
            <p>
              Nos artisans sont régulièrement formés aux dernières techniques et
              normes du bâtiment pour garantir des prestations toujours plus
              qualitatives et respectueuses de l'environnement.
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Nos Certifications</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <ul className="space-y-4 text-gray-600">
              <li>• RGE (Reconnu Garant de l'Environnement)</li>
              <li>• Qualibat</li>
              <li>• Certification ISO 9001</li>
              <li>• Label Artisan de Confiance</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Prêt à démarrer votre projet avec nous ?
          </h2>
          <p className="text-gray-600 mb-8">
            Faites confiance à notre expertise pour donner vie à vos projets
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
  );
} 