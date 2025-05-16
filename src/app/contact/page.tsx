'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    type_projet: 'renovation_interieure',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l&apos;envoi du message');
      }

      setStatus('success');
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        type_projet: 'renovation_interieure',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      console.error('Erreur:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Contactez-nous</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900">Adresse</h3>
                  <p className="text-gray-600">
                    181 AVENUE DE VERDUN<br />
                    BATIMENT B - RESIDENCE LES CEDRES<br />
                    83340 LE CANNET-DES-MAURES
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900">Téléphone</h3>
                  <p className="text-gray-600">06 51 39 28 34</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900">Email</h3>
                  <p className="text-gray-600">renovationfrance45@gmail.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900">Horaires</h3>
                  <p className="text-gray-600">
                    Lundi - Vendredi : 8h - 18h<br />
                    Samedi : Sur rendez-vous<br />
                    Dimanche : Fermé
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="type_projet" className="block text-sm font-medium text-gray-900 mb-1">
                  Type de projet *
                </label>
                <select
                  id="type_projet"
                  name="type_projet"
                  required
                  value={formData.type_projet}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="renovation_interieure">Rénovation intérieure</option>
                  <option value="renovation_exterieure">Rénovation extérieure</option>
                  <option value="amenagement">Aménagement</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                  status === 'loading'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-orange-600 hover:bg-orange-700 text-white'
                }`}
              >
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                  Votre message a été envoyé avec succès ! Nous vous contacterons rapidement.
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                  Une erreur est survenue lors de l&apos;envoi du message. Veuillez réessayer.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 