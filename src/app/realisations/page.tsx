'use client';

import { useState } from 'react';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  imagePath: string;
};

// Ces données seront à remplacer par vos vraies réalisations
const projects: Project[] = [
  {
    id: 1,
    title: "Rénovation complète d'un appartement haussmannien",
    category: "renovation_interieure",
    description: "Rénovation totale d'un appartement de 120m² incluant la réfection des murs, sols, plafonds, électricité et plomberie.",
    imagePath: "/images/projects/project1.jpg"
  },
  {
    id: 2,
    title: "Ravalement de façade historique",
    category: "renovation_exterieure",
    description: "Restauration complète de la façade d'un immeuble du 19ème siècle, incluant reprise des moulures et isolation thermique.",
    imagePath: "/images/projects/project2.jpg"
  },
  {
    id: 3,
    title: "Création d'une suite parentale",
    category: "amenagement",
    description: "Aménagement d'une suite parentale avec dressing et salle de bain privative dans les combles.",
    imagePath: "/images/projects/project3.jpg"
  }
];

export default function Realisations() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getButtonClass = (buttonFilter: string) => {
    const base = "px-4 py-2 text-sm font-medium focus:z-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
    const active = filter === buttonFilter ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50";
    
    let border = "";
    if (buttonFilter === 'all') {
      border = "border border-gray-300 rounded-l-lg";
    } else if (buttonFilter === 'amenagement') {
      border = "border border-gray-300 rounded-r-lg";
    } else {
      border = "border-t border-b border-gray-300";
    }

    return `${base} ${active} ${border}`;
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Réalisations</h1>

        {/* Filtres */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
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
            <button
              onClick={() => setFilter('amenagement')}
              className={getButtonClass('amenagement')}
            >
              Aménagement
            </button>
          </div>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Image à venir</p>
                </div>
                {/* Décommentez cette partie une fois que vous aurez ajouté vos images
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Demander un projet similaire →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-gray-600 mb-8">
            Contactez-nous pour discuter de votre projet de rénovation
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </div>
  );
} 