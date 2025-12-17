import React from "react";

const Partners = () => {
    const partners = [
        {
            name: "Crazy Pencilz",
            image: "/crazy_pencilz.png",
            url: "https://crazypencilz.com/",
        },
        {
            name: "LMS Ace",
            image: "/lmsace.png",
            url: "https://www.lmsace.com/",
        },
        {
            name: "Blossom",
            image: "/blossom.jpg",
            url: "https://blossomindia.org/index.php",
        },
    ];

    return (
        <section className="w-full py-20 md:py-32 bg-slate-50 dark:bg-slate-900 scroll-mt-20" id="partners">
            <div className="max-w-7xl px-4 mx-auto">
                <h2 className="text-secondary dark:text-white tracking-tight text-3xl md:text-5xl font-black text-center mb-16 md:mb-20">
                    Our Partners
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
                    {partners.map((partner) => (
                        <a
                            key={partner.name}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition-all duration-300"
                        >
                            <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all duration-300">
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
