'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  videoPath: string;
  thumbnailPath: string;
};

type ImageProject = {
  id: number;
  title: string;
  category: string;
  imagePath: string;
};

// Modal component for image preview
const ImageModal = ({ 
  isOpen, 
  onClose, 
  imagePath, 
  title 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  imagePath: string; 
  title: string; 
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-h-[95vh] flex flex-col items-center">
        <button 
          onClick={onClose}
          className="absolute -top-2 right-0 text-white text-5xl hover:text-gray-300 z-10 p-4"
          aria-label="Fermer"
        >
          ×
        </button>
        <div className="relative w-full h-[80vh]">
          <Image
            src={imagePath}
            alt={title}
            fill
            sizes="100vw"
            className="object-contain"
            onClick={(e) => e.stopPropagation()}
            priority
          />
        </div>
        <p className="text-white text-lg sm:text-xl mt-2 sm:mt-4 text-center px-4">{title}</p>
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    id: 1,
    title: "Rénovation complète d'intérieur",
    category: "renovation_interieure",
    description: "Transformation totale d'un espace intérieur avec des finitions haut de gamme, incluant peinture, carrelage, et aménagements sur mesure.",
    videoPath: "/video-interieur.MP4",
    thumbnailPath: "/images/77933ccd-2933-4352-abc1-49108a90b0a4.JPG"
  },
  {
    id: 2,
    title: "Rénovation de façade",
    category: "renovation_exterieure",
    description: "Ravalement complet de façade avec traitement des surfaces et mise en valeur du patrimoine architectural.",
    videoPath: "/video-exterieur.MP4",
    thumbnailPath: "/images/2cce1b8c-6cd5-4a02-9e71-89df9c47bd0e.JPG"
  },
  {
    id: 3,
    title: "Rénovation d'ouvrage d'art",
    category: "renovation_exterieure",
    description: "Restauration et rénovation d'un pont historique, démontrant notre expertise en travaux de grande envergure.",
    videoPath: "/video-exterieur-pont.MP4",
    thumbnailPath: "/images/2f3b4a80-ae78-497f-92ba-e8456335e102.JPG"
  }
];

const imageProjects: ImageProject[] = [
  {
    id: 1,
    title: "Rénovation intérieure",
    category: "renovation_interieure",
    imagePath: "/images/77933ccd-2933-4352-abc1-49108a90b0a4.JPG"
  },
  {
    id: 2,
    title: "Rénovation extérieure",
    category: "renovation_exterieure",
    imagePath: "/images/2cce1b8c-6cd5-4a02-9e71-89df9c47bd0e.JPG"
  },
  {
    id: 3,
    title: "Travaux de finition",
    category: "renovation_interieure",
    imagePath: "/images/2f3b4a80-ae78-497f-92ba-e8456335e102.JPG"
  },
  {
    id: 4,
    title: "Rénovation complète",
    category: "renovation_interieure",
    imagePath: "/images/d906a029-a05e-4dbf-989d-ca8273d5883b.JPG"
  },
  {
    id: 5,
    title: "Rénovation salle de bain",
    category: "renovation_interieure",
    imagePath: "/images/5581d116-20c7-4baa-a858-5d69cce313d4.JPG"
  },
  {
    id: 6,
    title: "Finitions intérieures",
    category: "renovation_interieure",
    imagePath: "/images/45ec792b-40d8-4aa7-8320-f8199a8dcc4e.JPG"
  },
  {
    id: 7,
    title: "Vue d'ensemble chantier",
    category: "renovation_exterieure",
    imagePath: "/images/baniere.JPG"
  }
];

const ProjectMedia = ({ project }: { project: Project }) => {
  return (
    <div className="relative h-96 bg-gray-900">
      <video 
        className="w-full h-full object-cover"
        controls
        preload="metadata"
        poster={project.thumbnailPath}
      >
        <source src={project.videoPath} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  );
};

const ImageProjectCard = ({ 
  project, 
  onImageClick 
}: { 
  project: ImageProject;
  onImageClick: (project: ImageProject) => void;
}) => {
  return (
    <div 
      className="relative h-64 sm:h-80 md:h-96 bg-gray-100 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform active:scale-95 hover:scale-105 touch-manipulation"
      onClick={() => onImageClick(project)}
    >
      <Image
        src={project.imagePath}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
        <h3 className="text-base sm:text-xl font-semibold text-white">{project.title}</h3>
      </div>
    </div>
  );
};

export default function Realisations() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<ImageProject | null>(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filteredImageProjects = filter === 'all'
    ? imageProjects
    : imageProjects.filter(project => project.category === filter);

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
    <div className="min-h-screen py-8 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">Nos Réalisations</h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Découvrez nos travaux de rénovation à travers ces photos et vidéos de chantiers. 
            Chaque projet illustre notre engagement pour la qualité et notre expertise technique.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center mb-8 sm:mb-16 px-2">
          <div className="inline-flex shadow-md w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <button
              onClick={() => setFilter('all')}
              className={`${getButtonClass('all')} flex-1 sm:flex-none text-sm sm:text-base`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter('renovation_interieure')}
              className={`${getButtonClass('renovation_interieure')} flex-1 sm:flex-none text-sm sm:text-base`}
            >
              Intérieur
            </button>
            <button
              onClick={() => setFilter('renovation_exterieure')}
              className={`${getButtonClass('renovation_exterieure')} flex-1 sm:flex-none text-sm sm:text-base`}
            >
              Extérieur
            </button>
          </div>
        </div>

        {/* Section Photos */}
        <div className="mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-gray-900 px-2">Notre galerie photo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 px-2">
            {filteredImageProjects.map((project) => (
              <ImageProjectCard 
                key={project.id} 
                project={project} 
                onImageClick={(project) => setSelectedImage(project)}
              />
            ))}
          </div>
        </div>

        <ImageModal
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          imagePath={selectedImage?.imagePath || ''}
          title={selectedImage?.title || ''}
        />

        {/* Section Vidéos */}
        <div className="mb-8 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-gray-900">Nos vidéos de chantier</h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
                <ProjectMedia project={project} />
                <div className="p-4 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-900">{project.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">{project.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors text-sm sm:text-base"
                  >
                    Demander un devis
                    <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-20 text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 sm:p-12 shadow-xl mx-2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
            Vous avez un projet de rénovation en tête ?
          </h2>
          <p className="text-lg sm:text-xl text-orange-50 mb-6 sm:mb-8">
            Contactez-nous pour une étude personnalisée de votre projet
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 text-base sm:text-lg font-bold rounded-lg hover:bg-orange-50 transition-colors shadow-lg"
          >
            Obtenir un devis gratuit
            <svg className="ml-2 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 