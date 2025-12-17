import React from "react";

const Programs = () => {
  const programs = [
    {
      title: "Regular Coaching",
      description:
        "Classes are held twice a day, six days a week. Since 2020, we have coached over 100 kids in and around our village.",
      image:
        "/hello-1.jpeg",
      alt: "Kids training",
    },
    {
      title: "Tournaments & Camps",
      description:
        "We conduct summer camps and participate in district & state level tournaments to create opportunities for young players.",
      image:
        "/hello-2.jpeg",
      alt: "Tournament play",
    },
    {
      title: "Free Access for All",
      description:
        "Training is free for children aged 6-16 from all backgrounds. We provide sports accessories and equipment for kids in need.",
      image:
        "/hello-3.jpeg",
      alt: "Community support",
    },
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900/50 py-20 md:py-32 min-h-screen scroll-mt-20" id="programs">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <h2 className="text-secondary dark:text-white tracking-tight text-3xl md:text-5xl font-black">
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