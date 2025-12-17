import React from "react";

const Impact = () => {
  const stats = [
    { label: "Students Coached", value: "100+" },
    { label: "Established", value: "2020" },
    { label: "Age Group", value: "6-16" },
  ];

  return (
    <section className="w-full bg-secondary dark:bg-slate-900 py-20 md:py-32 min-h-screen scroll-mt-20" id="achievements">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="flex flex-col gap-3 max-w-xl text-center md:text-left">
            <h2 className="text-white tracking-tight text-3xl md:text-5xl font-black">Our Impact</h2>
            <p className="text-sky-200 text-lg font-medium">
              Empowering village youth through free access to sports and mentorship.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start justify-center gap-1 rounded-lg p-6 bg-white/5 border border-white/10 backdrop-blur-sm min-w-[140px]"
              >
                <p className="text-sky-300 text-xs font-bold uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-white tracking-tight text-5xl font-black">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;