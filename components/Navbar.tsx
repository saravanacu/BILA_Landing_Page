import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const navLinks = [
    { name: "Our Vision", href: "#vision" },
    { name: "What We Do", href: "#programs" },
    { name: "Our Impact", href: "#achievements" },
    { name: "Our Leadership", href: "#management" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between whitespace-nowrap py-3">
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="./public/logo.jpeg"
            alt="Ball Is Life Academy"
            className="h-16 w-auto object-contain"
            onError={(e) => {
              // Fallback if image fails
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback Text Logo */}
          <div className="hidden flex-col leading-none">
            <h2 className="text-2xl font-black tracking-tighter text-secondary dark:text-white leading-[0.85]">
              BILA
            </h2>
            <span className="text-[10px] font-bold tracking-[0.15em] text-primary">
              BALL IS LIFE ACADEMY
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-6 lg:gap-8">
          <div className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="text-sm font-bold leading-normal hover:text-primary transition-colors text-slate-700 dark:text-slate-300 cursor-pointer uppercase tracking-wide"
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-secondary dark:text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 shadow-xl flex flex-col p-4 gap-4 animate-in slide-in-from-top-2 duration-200 z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-base font-bold py-2 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;