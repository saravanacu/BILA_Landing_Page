import React from "react";

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="w-full relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.85) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7OH87ZkTwW2fb1V-xhXjIKTr68jmmA9ddoAaDyn5Ifp_HF3gig3N9XvHUAwXhjxpPKPm8UFazZ-b-ydBniRInPGvuf7vcvXUEwhv8oYObb11hlpj-KfAdtM_AlEB3jjx0MNUSXqxI5nSLh49ux9yXCihR06A3wu0H53dnZlA65pFCYd88lkhLVc9uD_mp8FDEUaiLR3sJIxrDvmJV9jfe89eFaZJu3yCNphflgYVDWyhX96U30xdC72qh5v8exPBsfpgz3WPpZqRb")',
      }}
    >
      <div className="w-full max-w-7xl px-4 flex flex-col items-center text-center relative z-10 gap-6 py-20">
        <div className="flex flex-col gap-4 max-w-[800px]">
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em] drop-shadow-2xl">
            Ball Is Life <span className="text-primary">Academy</span>
          </h1>
          <h2 className="text-sky-100 text-xl md:text-3xl font-bold leading-normal max-w-2xl mx-auto">
            Free Basketball Coaching Center
          </h2>
          <div className="flex flex-col gap-1 text-slate-200 text-base md:text-lg font-medium mt-2">
             <p>Founder: Saravana Kumar R</p>
             <p>@ Sholavandan, Madurai, Tamil Nadu, India – 625 214</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a 
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform shadow-lg shadow-primary/30"
          >
            <span className="truncate">Join Us</span>
          </a>
          <a 
            href="#vision"
            onClick={(e) => handleScroll(e, "#vision")}
            className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors"
          >
            <span className="truncate">Learn More</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;