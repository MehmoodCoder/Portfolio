const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-6 py-8 text-white sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[24px] border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-sm md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold">Let&apos;s connect</h3>
          <p className="mt-1 text-sm text-slate-300">Open for new ideas, freelance work, and collaborations.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            { label: "X", icon: "fa-brands fa-square-x-twitter", href: "https://x.com/MehmoodHassan56" },
            { label: "LinkedIn", icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/mehmood-hassan-7604a03b1" },
            { label: "GitHub", icon: "fa-brands fa-github", href: "https://github.com/MehmoodCoder" }
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/15">
              <i className={`${item.icon} mr-2`}></i>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;