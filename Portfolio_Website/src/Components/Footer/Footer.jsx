const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-4 py-8 text-white sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[24px] border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/20 backdrop-blur-sm md:flex-row md:items-center md:justify-between md:p-6">
        <div>
          <h3 className="text-xl font-semibold">Let&apos;s connect</h3>
          <p className="mt-1 text-sm text-slate-300">Open for new ideas, freelance work, and collaborations.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            { 
              label: "Instagram", 
              icon: "fa-brands fa-instagram", 
              href: "https://www.instagram.com/_mehmood_mh56",
              iconColor: "text-[#e1306c] group-hover:text-white",
              hoverClasses: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent"
            },
            { 
              label: "Facebook", 
              icon: "fa-brands fa-facebook", 
              href: "https://www.facebook.com/share/1EabhnRp6p/",
              iconColor: "text-[#1877f2] group-hover:text-white",
              hoverClasses: "hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2]"
            },
            { 
              label: "Discord", 
              icon: "fa-brands fa-discord", 
              href: "https://discord.com/users/1512160906715336874",
              iconColor: "text-[#5865f2] group-hover:text-white",
              hoverClasses: "hover:bg-[#5865f2] hover:text-white hover:border-[#5865f2]"
            },
            { 
              label: "X/Twitter", 
              icon: "fa-brands fa-square-x-twitter", 
              href: "https://x.com/MehmoodHassan56",
              iconColor: "text-white group-hover:text-white",
              hoverClasses: "hover:bg-black hover:text-white hover:border-white/30"
            },
            { 
              label: "LinkedIn", 
              icon: "fa-brands fa-linkedin", 
              href: "https://www.linkedin.com/in/mehmood-hassan-7604a03b1",
              iconColor: "text-[#0077b5] group-hover:text-white",
              hoverClasses: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]"
            },
            { 
              label: "GitHub", 
              icon: "fa-brands fa-github", 
              href: "https://github.com/MehmoodCoder",
              iconColor: "text-[#f0f6fc] group-hover:text-white",
              hoverClasses: "hover:bg-[#24292e] hover:text-white hover:border-[#24292e]"
            }
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              target="_blank" 
              rel="noreferrer" 
              className={`group rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition-all duration-300 hover:-translate-y-1 shadow-sm ${item.hoverClasses}`}
            >
              <i className={`${item.icon} mr-2 transition-colors duration-300 ${item.iconColor}`}></i>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;