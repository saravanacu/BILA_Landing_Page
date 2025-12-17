import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7OH87ZkTwW2fb1V-xhXjIKTr68jmmA9ddoAaDyn5Ifp_HF3gig3N9XvHUAwXhjxpPKPm8UFazZ-b-ydBniRInPGvuf7vcvXUEwhv8oYObb11hlpj-KfAdtM_AlEB3jjx0MNUSXqxI5nSLh49ux9yXCihR06A3wu0H53dnZlA65pFCYd88lkhLVc9uD_mp8FDEUaiLR3sJIxrDvmJV9jfe89eFaZJu3yCNphflgYVDWyhX96U30xdC72qh5v8exPBsfpgz3WPpZqRb",
      title: "Ball Is Life Academy",
      subtitle: "Free Basketball Coaching Center",
      description: "Founder: Saravana Kumar R • Sholavandan, Madurai",
      cta: "Join Us",
      ctaLink: "#contact",
      secondaryCta: "Learn More",
      secondaryCtaLink: "#vision"
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAiRPm-aJvVKKIq4oDQYNPYwdVLUIrhKhecw21NN-T4JFneNtcsnCkyxyyXYdKww_2EMXjeVRLC9dHgPFAr94Ry-WQ3pJzehU7tu8-xnE5CcR84BrSiCGjJt9fGouFWn6x9h-9O4LPJNlt_Uy0wlS_Ye5yyLnpZr-sdU3Y4ijOC-u2xkRquaPoEhBd3XxZFofkaUI3lxhC8MeE-QQzsZ2yTmQnQHkM3Zgtm__BgYfe8kTIlhAe3FtbKzaT2hFHsaS2VNAjMfgsV5uf",
      title: "More Than Just A Game",
      subtitle: "Building Character Through Sport",
      description: "Teaching discipline, teamwork, and leadership to the next generation of athletes.",
      cta: "Our Programs",
      ctaLink: "#programs"
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0DOEmO-p8eIEvNCQJwE5FLLknvoYyFsVS_q-vCvVj9WZW5FkXzHH2waBnzIH4ItHkWJLtMQHsLZ_VFe49NID9_cu-uHIgN3G7PB0R3c8UpvPgkoZdJ-Gru2NO97ec7b-sxGGkgQR-tjQc8PVRydxNmJhw0xAlLj5F5EE3m83AFFweMTMcgE1egk2FTENZthEzdTuoSluJ4OpdVsvT0YVm1Gd1oDEdkPx1r-P9QUJHMuxJasJnDB-V8tRwRb3bAdSodOq3eVK3CiAS",
      title: "Competitive Excellence",
      subtitle: "District & State Level Tournaments",
      description: "Providing opportunities for young talent to showcase their skills on bigger stages.",
      cta: "See Our Impact",
      ctaLink: "#achievements"
    },
    {
      id: 4,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkfc5PqcbMM9XKmeKME8hxbZRfBgjXb4gOvxbZSq5gOc3kPV3U_EnnkhgZWhLW6g-rpqrjL9VvcmUZwIFQGz4ZTH6Ukh-0sOf2zBOCMwgDABkRTN1WKWXHX34Gi8LNba51Mao4e-gjdQaCE8ICxiOYowfnQMOaR4iTeBRTJ18rO7tZC2RJjXzP7uT6cmUEh9o1HTEAN0zTLHQrlHd8kQsWsO8r9Z_4FI-SUg6bYyY8wLeFIk1kqXjROdmUn89kRB7RQyhO2lS_Lf6w",
      title: "Community First",
      subtitle: "Empowering Rural Youth",
      description: "Creating a safe, supportive environment for children from all backgrounds since 2020.",
      cta: "Support Us",
      ctaLink: "#contact"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-slate-900">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-linear transform scale-105 hover:scale-100"
            style={{ backgroundImage: `url("${slide.image}")` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900/80"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center px-4 transition-all duration-700 transform ${
              index === currentSlide
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <div className="max-w-4xl flex flex-col items-center gap-4 md:gap-6">
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-lg">
                {slide.title}
                {index === 0 && <span className="text-primary block md:inline"> Academy</span>}
              </h1>
              <h2 className="text-sky-200 text-lg md:text-2xl font-bold tracking-wide">
                {slide.subtitle}
              </h2>
              {slide.description && (
                <p className="text-slate-100 text-base md:text-lg font-medium max-w-2xl drop-shadow-md">
                  {slide.description}
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={slide.ctaLink}
                  onClick={(e) => handleScroll(e, slide.ctaLink)}
                  className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 md:h-14 px-8 bg-primary text-white text-base md:text-lg font-bold hover:bg-sky-600 transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-1"
                >
                  {slide.cta}
                </a>
                {slide.secondaryCta && (
                  <a
                    href={slide.secondaryCtaLink}
                    onClick={(e) => handleScroll(e, slide.secondaryCtaLink || "#")}
                    className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 md:h-14 px-8 bg-white/10 backdrop-blur-md border border-white/30 text-white text-base md:text-lg font-bold hover:bg-white/20 transition-all transform hover:-translate-y-1"
                  >
                    {slide.secondaryCta}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;