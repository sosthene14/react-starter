export const PartnersSection = () => {
    return (
        <section className="py-20 relative bg-gradient-to-b from-black via-[#6a4c44] to-black text-white">
            {/* Gradient background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
            
            <div className="container mx-auto px-4 relative">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c09b6e] to-[#6a4c44] mb-4">
                            Nos Partenaires
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Ils soutiennent les talents et contribuent au succès de notre plateforme
                        </p>
                    </div>

                    {/* Partners Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
                            <div
                                key={partner}
                                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                {/* Hover gradient effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300" />
                                
                                {/* Partner content */}
                                <div className="relative aspect-video flex items-center justify-center">
                                    {/* Here we use a placeholder, replace with actual partner logos */}
                                    <img
                                        src={`/api/placeholder/200/100`}
                                        alt={`Partenaire ${partner}`}
                                        className="max-w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Partner levels */}
                    <div className="mt-20 grid md:grid-cols-3 gap-8">
                        {[{
                            level: "Platine",
                            description: "Partenaires principaux",
                            gradient: "from-white/20 to-gray-500/20"
                        }, {
                            level: "Or",
                            description: "Partenaires majeurs",
                            gradient: "from-yellow-500/20 to-orange-500/20"
                        }, {
                            level: "Argent",
                            description: "Partenaires officiels",
                            gradient: "from-gray-400/20 to-gray-600/20"
                        }].map(({ level, description, gradient }) => (
                            <div
                                key={level}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300`} />
                                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        Partenaires {level}
                                    </h3>
                                    <p className="text-gray-300">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to action */}
                    <div className="mt-16 text-center">
                        <a
                            href="/devenir-partenaire"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#c09b6e] to-[#6a4c44] rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                        >
                            Devenir Partenaire
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
