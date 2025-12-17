import React from "react";

const Management = () => {
  return (
    <section className="w-full bg-white dark:bg-background-dark py-16 scroll-mt-20" id="management">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10 items-center">
        <h2 className="text-secondary dark:text-white text-3xl md:text-4xl font-bold text-center">
          Our Leadership
        </h2>

        <div className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center md:items-start border border-slate-100 dark:border-slate-800">
          <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-full bg-white dark:bg-slate-700 overflow-hidden border-8 border-white dark:border-slate-600 shadow-xl">
            <div className="w-full h-full flex items-center justify-center text-slate-300 dark:text-slate-500 bg-slate-200 dark:bg-slate-800">
              {/* <span className="material-symbols-outlined text-7xl">person</span> */}
              <img src="./public/founder_pp.jpeg" alt="Founder Saravana Kumar" />
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left flex-1">
            <div>
              <h3 className="text-3xl font-bold text-secondary dark:text-white">
                Saravana Kumar R
              </h3>
              <p className="text-primary font-bold text-sm tracking-widest uppercase mt-1">
                Founder & Coach
              </p>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-3xl">
              Dedicated to transforming the lives of youth in Sholavandan through basketball. With a vision to provide free, high-quality coaching to children from all backgrounds, Saravana leads the academy with passion and discipline.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="mailto:bilafoundation2020@gmail.com"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary transition-all font-medium"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
                bilafoundation2020@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;