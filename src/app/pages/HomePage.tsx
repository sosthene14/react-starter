
import { Logo } from "../../assets/image";
import { PartnersSection } from "../components/Parteners";
import { useCategoriesStore } from "../store/dataStore";
import { PartyPopper, Music, Ticket } from 'lucide-react';
import { FooterPage } from "./FooterPage";

const StarBackground = () => (
    <div className="absolute inset-0 z-20 overflow-hidden opacity-30">
        <div className="absolute h-2 w-2 bg-white rounded-full top-[10%] left-[25%] animate-twinkle" />
        <div className="absolute h-1.5 w-1.5 bg-white rounded-full top-[20%] left-[55%] animate-twinkle-delayed" />
        <div className="absolute h-1 w-1 bg-white rounded-full top-[45%] left-[35%] animate-twinkle" />
        <div className="absolute h-2 w-2 bg-white rounded-full top-[65%] left-[75%] animate-twinkle-delayed" />
        <div className="absolute h-1.5 w-1.5 bg-white rounded-full top-[80%] left-[15%] animate-twinkle" />
        <div className="absolute h-1 w-1 bg-white rounded-full top-[15%] left-[85%] animate-twinkle-delayed" />
        <div className="absolute h-2 w-2 bg-white rounded-full top-[75%] left-[45%] animate-twinkle" />
    </div>
);

export const HomePage = () => {
    const { categories } = useCategoriesStore();
    return (
        <div className="min-h-screen relative">
            <img src={Logo} alt="Logo" className="w-[150px] absolute top-0 left-0 z-10" />
            <img src={Logo} alt="Logo" className="w-[150px] absolute top-0 right-0 z-10" />

            {/* Hero Header avec image de festival */}

            <header className="relative min-h-[90vh] bg-black text-white">
                {/* Image de fond avec overlay */}

                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                </div>

                {/* Contenu du hero */}
                <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center">
                    {/* Effet de particules animées */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="animate-float absolute top-20 left-20 w-4 h-4 bg-yellow-400/30 rounded-full" />
                        <div className="animate-float-delayed absolute top-40 right-32 w-6 h-6 bg-purple-400/30 rounded-full" />
                        <div className="animate-float-slow absolute bottom-20 left-1/4 w-5 h-5 bg-pink-400/30 rounded-full" />
                    </div>

                    {/* En-tête principal */}
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-title">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c09b6e] via-[#6a4c44] to-[#5f423a]">
                                Festival des Talents
                            </span>
                        </h1>
                        <p className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
                            Une expérience unique de musique, d'art et de culture
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="#categories"
                                className="px-8 py-4 bg-gradient-to-r from-[#c09b6e] to-[#6a4c44] rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Découvrir les catégories
                            </a>
                            <a
                                href="#billetterie"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full font-bold text-lg hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Consulter les résultats
                            </a>
                        </div>
                    </div>

                    {/* Features du festival */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-5xl mx-auto">
                        {[
                            { icon: Music, title: '50+ Artistes', text: 'Sur 3 scènes' },
                            { icon: PartyPopper, title: '3 Jours', text: 'De célébration' },
                            { icon: Ticket, title: 'Pass Festival', text: 'Early Bird disponible' }
                        ].map(({ icon: Icon, title, text }) => (
                            <div key={title} className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl">
                                <Icon className="w-10 h-10 text-[#c09b6e]" />
                                <div>
                                    <h3 className="font-bold text-xl">{title}</h3>
                                    <p className="text-gray-300">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* Section Catégories */}
            <section
                id="categories"
                className="py-20 bg-gradient-to-b from-black via-[#6a4c44] to-black text-white"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold text-center mb-16">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c09b6e] to-[#6a4c44]">
                            Catégories
                        </span>
                    </h2>
                    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {categories?.sort((a, b) => a.name.localeCompare(b.name)).map((category) => (
                            <div
                                key={category.name}
                                className="group relative overflow-hidden rounded-2xl p-4 bg-black/30 backdrop-blur-md hover:bg-black/40 transition-all duration-300"
                            >
                                <StarBackground />
                                <div className="relative z-10">
                                    <div className="aspect-square w-full mb-6 overflow-hidden rounded-xl bg-gradient-to-r from-[#c09b6e] to-[#6a4c44]">
                                        <img
                                            src={category.image || ""}
                                            alt={category.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3
                                        className="text-xl text-center font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#c09b6e] to-[#e2d1b7]"
                                        style={{ fontFamily: "'Cinzel', serif" }}
                                    >
                                        {category.name}
                                    </h3>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <PartnersSection />

            <FooterPage />


        </div>
    );
};

export default HomePage;