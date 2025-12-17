import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "./public/hero-1.jpeg",
      title: "Ball Is Life Academy",
      subtitle: "Free Basketball Coaching Center",
      description: "Sholavandan, Madurai, TN, IN.",
    },
    {
      id: 2,
      image: "./public/hero-2.jpeg",
      title: "More Than Just A Game",
      subtitle: "Building Character Through Sport",
      description: "Teaching discipline, teamwork, and leadership to the next generation of athletes.",
    },
    {
      id: 3,
      image: "./public/hero-3.jpeg",
      title: "Competitive Excellence",
      subtitle: "District & State Level Tournaments",
      description: "Providing opportunities for young talent to showcase their skills on bigger stages.",
    },
    {
      id: 4,
      image: "./public/hero-4.jpeg",
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
            className={`absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center px-4 transition-all duration-700 transform ${index === currentSlide
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
              }`}
          >
            <div className="max-w-4xl flex flex-col items-center gap-4 md:gap-6">
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <h2 className="text-sky-200 text-lg md:text-2xl font-bold tracking-wide">
                {slide.subtitle}
              </h2>
              {slide.description && (
                <p className="text-slate-100 text-base md:text-lg font-medium max-w-2xl drop-shadow-md">
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