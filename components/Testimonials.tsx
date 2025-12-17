import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The discipline my son learned here translated directly to his schoolwork. He's more focused, confident, and respectful.",
      name: "Sarah Jenkins",
      role: "Parent of U14 Player",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQCWZdhgLeDYnIuzmys7qEzc_d-sa8MghaOYJdGbpsg-wCBqVBJBCQXK8g97FKQwuQoYoXzsdvHLSTOg6O7qyAhsXo5yQxal6l32Xk8VKEoWz-my8ixTDshroy8OpXRP-eSMjaOR9uDIrJ7qezp-FxkmRk_LsLopgSj4K3aPmRGS7tQ5ktlgDwx3mIgjfUBrsm87Je3EpZA3lupBaYfpFuDKO2U4kvoTdqTxiyy2iTokjreDgy8HFArqlmPhzxjsM1p_qXiVe8gfsQ",
    },
    {
      quote:
        "Coaches here don't just teach you how to shoot; they teach you how to think. It's the best basketball education I've ever had.",
      name: "Michael Ross",
      role: "Elite Training Alumni",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSc7tQnQWkT1ai9ZviKsuqtRs5cMo3wdYMJqkao9ngTX6XhkumKFIOvLGFEGMp0sKicvQI59HLvSKSHD8-MBP0KceExXSXJx6222ml2_bulWlwfwk_h7LMZpzW8Z7In0nU3_whfotTRJ5sw7Yhsm-gwylzH_gXdYTkgbrX4GHnd1cgv2heijgEOntxuHsKC4Ee1V67Fcr7MbkI7zZVQldwUkwIeeNXuICHXcWwb6pCPDepWqXYURWM55Kk_-nvw6OirJCnadO9mqqc",
    },
  ];

  return (
    <section className="py-10 px-4">
      <h2 className="text-secondary dark:text-white text-2xl font-bold mb-8 text-center">
        What Parents & Players Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 relative"
          >
            <span className="material-symbols-outlined text-4xl text-primary/30 absolute top-6 right-6">
              format_quote
            </span>
            <p className="text-slate-800 dark:text-gray-200 mb-6 text-lg italic">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url("${t.image}")` }}
              ></div>
              <div>
                <p className="text-secondary dark:text-white font-bold">
                  {t.name}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;