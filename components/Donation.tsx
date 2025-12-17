import React from "react";

const Donation = () => {
  return (
    <section className="w-full bg-sky-50 dark:bg-slate-900/80 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-3xl text-center md:text-left">
            <h2 className="text-secondary dark:text-white text-3xl md:text-4xl font-black">
              Support Our Mission
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              We do not charge any fees for training. Your support helps cover our operational costs, including sports kits (shoes, jerseys, balls), nutrition supplements for kids, and tournament participation expenses (travel & accommodation).
            </p>
          </div>
          <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em] shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all whitespace-nowrap">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Donation;