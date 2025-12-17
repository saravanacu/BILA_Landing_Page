import React from "react";

const Vision = () => {
  const points = [
    {
      icon: "sports_basketball",
      title: "Fundamental Skills",
      description: "Mastering the core techniques of basketball.",
    },
    {
      icon: "fitness_center",
      title: "Physical Fitness",
      description: "Building strength, endurance, and agility.",
    },
    {
      icon: "psychology",
      title: "Confidence & Discipline",
      description: "Developing self-belief and structured habits.",
    },
    {
      icon: "groups",
      title: "Foster Teamwork",
      description: "Learning to work together towards common goals.",
    },
    {
      icon: "leaderboard",
      title: "Leadership & Social Skills",
      description: "Cultivating future leaders on and off the court.",
    },
    {
      icon: "volunteer_activism",
      title: "Supportive Environment",
      description: "A safe space for growth and encouragement.",
    },
    {
      icon: "health_and_safety",
      title: "Child Safety Awareness",
      description: "Prioritizing the well-being of every student.",
    },
    {
      icon: "menu_book",
      title: "Read Books & Travel",
      description: "Expanding horizons through education and exposure.",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-background-dark py-16 scroll-mt-20" id="vision">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-secondary dark:text-white tracking-tight text-3xl md:text-5xl font-black leading-tight max-w-4xl">
            Our Vision
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-relaxed max-w-2xl">
            Our Ball Is Life Academy aims to introduce the game of basketball to young children and help them achieve holistic development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((card, index) => (
            <div
              key={index}
              className="flex flex-1 gap-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 flex-col hover:border-primary/50 hover:shadow-lg transition-all duration-300 items-start"
            >
              <div className="text-primary bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-full w-12 h-12 flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-2xl">{card.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-secondary dark:text-white text-lg font-bold leading-tight">
                  {card.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;