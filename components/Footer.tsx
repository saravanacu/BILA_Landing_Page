import React from "react";

const Footer = () => {
  const navLinks = [
    { name: "Our Vision", href: "#vision" },
    { name: "What We Do", href: "#programs" },
    { name: "Our Impact", href: "#achievements" },
    { name: "Our Leadership", href: "#management" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-background-dark">
      <div className="max-w-7xl px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3 select-none">
          <img
            src="/logo.jpeg"
            alt="Ball Is Life Academy"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden flex-col leading-none">
            <h2 className="text-xl font-black tracking-tighter text-secondary dark:text-white leading-[0.85]">
              BILA
            </h2>
            <span className="text-[8px] font-bold tracking-[0.15em] text-primary">
              BALL IS LIFE ACADEMY
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex gap-8 text-slate-600 dark:text-gray-400 text-sm font-medium">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-secondary dark:text-white hover:bg-primary hover:text-white transition-all duration-300"
            href="https://www.instagram.com/ballislifeacademy?igsh=MTFlNnAxM3E5YXlwMg%3D%3D&utm_source=qr"
            target="_blank"
            aria-label="Instagram"
          >
            <svg
              fill="currentColor"
              height="20"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </a>
        </div>
      </div>
      <p className="text-center text-slate-400 text-xs mt-8">
        © 2025 Ball Is Life Academy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;