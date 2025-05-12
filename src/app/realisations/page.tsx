'use client';

import { useState } from 'react';
import Link from 'next/link';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  videoPath: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Rénovation complète d'intérieur",
    category: "renovation_interieure",
    description: "Transformation totale d'un espace intérieur avec des finitions haut de gamme, incluant peinture, carrelage, et aménagements sur mesure.",
    videoPath: "/video-interieur.MP4"
  },
  {
    id: 2,
    title: "Rénovation de façade",
    category: "renovation_exterieure",
    description: "Ravalement complet de façade avec traitement des surfaces et mise en valeur du patrimoine architectural.",
    videoPath: "/video-exterieur.MP4"
  },
  {
    id: 3,
    title: "Rénovation d'ouvrage d'art",
    category: "renovation_exterieure",
    description: "Restauration et rénovation d'un pont historique, démontrant notre expertise en travaux de grande envergure.",
    videoPath: "/video-exterieur-pont.MP4"
  }
];

const ProjectMedia = ({ project }: { project: Project }) => {
  return (
    <div className="relative h-96 bg-gray-900">
      <video 
        className="w-full h-full object-cover"
        controls
        preload="metadata"
        poster="/images/video-thumbnail.jpg"
      >
        <source src={project.videoPath} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  );
};

export default function Realisations() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getButtonClass = (buttonFilter: string) => {
    const base = "px-6 py-3 text-base font-medium transition-all duration-200";
    const active = filter === buttonFilter 
      ? "bg-orange-600 text-white shadow-lg" 
      : "bg-white text-gray-800 hover:bg-orange-50";
    
    let border = "border border-gray-300";
    if (buttonFilter === 'all') {
      border += " rounded-l-lg";
    } else if (buttonFilter === 'renovation_exterieure') {
      border += " rounded-r-lg";
    }

    return `${base} ${active} ${border}`;
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Nos Réalisations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos travaux de rénovation à travers ces vidéos de chantiers. 
            Chaque projet illustre notre engagement pour la qualité et notre expertise technique.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex shadow-md">
            <button
              onClick={() => setFilter('all')}
              className={getButtonClass('all')}
            >
              Tous les projets
            </button>
            <button
              onClick={() => setFilter('renovation_interieure')}
              className={getButtonClass('renovation_interieure')}
            >
              Rénovation Intérieure
            </button>
            <button
              onClick={() => setFilter('renovation_exterieure')}
              className={getButtonClass('renovation_exterieure')}
            >
              Rénovation Extérieure
            </button>
          </div>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 gap-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
              <ProjectMedia project={project} />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-lg mb-6">{project.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Demander un devis pour un projet similaire
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Vous avez un projet de rénovation en tête ?
          </h2>
          <p className="text-xl text-orange-50 mb-8">
            Contactez-nous pour une étude personnalisée de votre projet
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 text-lg font-bold rounded-lg hover:bg-orange-50 transition-colors shadow-lg"
          >
            Obtenir un devis gratuit
            <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 