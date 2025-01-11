
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Music, Heart } from 'lucide-react';

export const FooterPage = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black to-black text-white py-16">
      {/* Particules décoratives */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse-slow absolute top-10 left-[10%] w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />
        <div className="animate-pulse-slower absolute bottom-10 right-[10%] w-32 h-32 bg-pink-500/10 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Music className="w-8 h-8 text-[#c09b6e]" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#c09b6e] to-[#6a4c44] bg-clip-text text-transparent">
                Festival des Talents
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Rejoignez-nous pour une célébration unique de l'art, de la musique et de la culture. Trois jours inoubliables d'expériences artistiques.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {['Programmation', 'Artistes', 'Billetterie', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#c09b6e] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:w-2 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@festival.com" className="flex items-center gap-3 text-gray-300 hover:text-[#c09b6e] transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                  <span>contact@festival.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+33123456789" className="flex items-center gap-3 text-gray-300 hover:text-[#c09b6e] transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                  <span>+33 1 23 45 67 89</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>Parc des Expositions, Paris</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-[#c09b6e]' },
                { icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-sky-500' },
                { icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-pink-600' }
              ].map(({ icon: Icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white/5 backdrop-blur-sm ${color} hover:text-white transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <button className="w-full py-3 px-6 bg-gradient-to-r from-[#c09b6e] to-[#6a4c44] rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2">
                Newsletter
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Festival des Talents. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/mentions-legales" className="hover:text-yellow-400 transition-colors duration-300">Mentions légales</a>
            <a href="/confidentialite" className="hover:text-yellow-400 transition-colors duration-300">Politique de confidentialité</a>
            <a href="/cgv" className="hover:text-yellow-400 transition-colors duration-300">CGV</a>
          </div>
        </div>
      </div>

   
    </footer>
  );
};