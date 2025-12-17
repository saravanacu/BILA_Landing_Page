import React from "react";

const Programs = () => {
  const programs = [
    {
      title: "Regular Coaching",
      description:
        "Classes are held twice a day, six days a week. Since 2020, we have coached over 100 kids in and around our village.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBAiRPm-aJvVKKIq4oDQYNPYwdVLUIrhKhecw21NN-T4JFneNtcsnCkyxyyXYdKww_2EMXjeVRLC9dHgPFAr94Ry-WQ3pJzehU7tu8-xnE5CcR84BrSiCGjJt9fGouFWn6x9h-9O4LPJNlt_Uy0wlS_Ye5yyLnpZr-sdU3Y4ijOC-u2xkRquaPoEhBd3XxZFofkaUI3lxhC8MeE-QQzsZ2yTmQnQHkM3Zgtm__BgYfe8kTIlhAe3FtbKzaT2hFHsaS2VNAjMfgsV5uf",
      alt: "Kids training",
    },
    {
      title: "Tournaments & Camps",
      description:
        "We conduct summer camps and participate in district & state level tournaments to create opportunities for young players.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD0DOEmO-p8eIEvNCQJwE5FLLknvoYyFsVS_q-vCvVj9WZW5FkXzHH2waBnzIH4ItHkWJLtMQHsLZ_VFe49NID9_cu-uHIgN3G7PB0R3c8UpvPgkoZdJ-Gru2NO97ec7b-sxGGkgQR-tjQc8PVRydxNmJhw0xAlLj5F5EE3m83AFFweMTMcgE1egk2FTENZthEzdTuoSluJ4OpdVsvT0YVm1Gd1oDEdkPx1r-P9QUJHMuxJasJnDB-V8tRwRb3bAdSodOq3eVK3CiAS",
      alt: "Tournament play",
    },
    {
      title: "Free Access for All",
      description:
        "Training is free for children aged 6-16 from all backgrounds. We provide sports accessories and equipment for kids in need.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAkfc5PqcbMM9XKmeKME8hxbZRfBgjXb4gOvxbZSq5gOc3kPV3U_EnnkhgZWhLW6g-rpqrjL9VvcmUZwIFQGz4ZTH6Ukh-0sOf2zBOCMwgDABkRTN1WKWXHX34Gi8LNba51Mao4e-gjdQaCE8ICxiOYowfnQMOaR4iTeBRTJ18rO7tZC2RJjXzP7uT6cmUEh9o1HTEAN0zTLHQrlHd8kQsWsO8r9Z_4FI-SUg6bYyY8wLeFIk1kqXjROdmUn89kRB7RQyhO2lS_Lf6w",
      alt: "Community support",
    },
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900/50 py-16 scroll-mt-20" id="programs">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <h2 className="text-secondary dark:text-white text-3xl font-bold">
            What We Do
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group flex flex-col gap-4"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl overflow-hidden relative shadow-md"
                style={{ backgroundImage: `url("${program.image}")` }}
                aria-label={program.alt}
              >
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-normal group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;