import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-white dark:bg-background-dark py-20 md:py-32 min-h-screen scroll-mt-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-12">
        <div className="max-w-3xl">
          <h2 className="text-secondary dark:text-white tracking-tight text-3xl md:text-5xl font-black mb-4">
            Contact Us
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            For more details, please contact Mr. Saravana Kumar R, Founder and Coach of Ball Is Life Academy Foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="flex flex-col items-center gap-4 p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">location_on</span>
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Address</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Sholavandan, Madurai<br />
                Tamil Nadu, India – 625 214
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">call</span>
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Phone</h3>
              <p className="text-slate-600 dark:text-slate-400">
                +91 99445 90997
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">mail</span>
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Email</h3>
              <p className="text-slate-600 dark:text-slate-400">
                bilafoundation2020@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;