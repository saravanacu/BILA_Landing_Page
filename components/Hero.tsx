import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/hero-1.jpeg",
      title: "Ball Is Life Academy",
      subtitle: "Free Basketball Coaching Center",
      description: "Sholavandan, Madurai, TN, IN.",
    },
    {
      id: 2,
      image: "/hero-2.jpeg",
      title: "More Than Just A Game",
      subtitle: "Building Character Through Sport",
      description: "Teaching discipline, teamwork, and leadership to the next generation of athletes.",
    },
    {
      id: 3,
      image: "/hero-3.jpeg",
      title: "Competitive Excellence",
      subtitle: "District & State Level Tournaments",
      description: "Providing opportunities for young talent to showcase their skills on bigger stages.",
    },
    {
      id: 4,
      image: "/hero-4.jpeg",
      title: "Community First",
      subtitle: "Empowering Rural Youth",
      description: "Creating a safe, supportive environment for children from all backgrounds since 2020.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-slate-900">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-linear transform scale-105"
            style={{ backgroundImage: `url("${slide.image}")` }}
          ></div>
          {/* Overlay removed for clear image visibility */}
        </div>
      ))}

      {/* Content Overlay - Positioned at the bottom center */}
      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 flex flex-col justify-end items-center text-center pb-24 md:pb-32">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute bottom-24 md:bottom-32 left-0 right-0 flex flex-col justify-center items-center px-4 transition-all duration-700 transform ${index === currentSlide
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
              }`}
          >
            <div className="max-w-4xl flex flex-col items-center gap-2 md:gap-4 bg-black/40 p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-2xl">
                {slide.title}
              </h1>
              <h2 className="text-sky-300 text-lg md:text-xl font-extrabold tracking-widest uppercase">
                {slide.subtitle}
              </h2>
              {slide.description && (
                <p className="text-white text-sm md:text-base font-semibold max-w-2xl drop-shadow-md opacity-90">
                  {slide.description}
                </p>
              )}
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
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;