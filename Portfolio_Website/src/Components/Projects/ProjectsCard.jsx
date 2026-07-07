const ProjectCard = ({ title, main, icon, tags, image }) => {
  return (
    <div className="group flex w-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-500/10">
      <div className="relative h-44 overflow-hidden bg-slate-950/70 sm:h-48">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-slate-950/70 text-xl text-white shadow-lg shadow-black/30 backdrop-blur-md">
          <i className={`${icon} text-cyan-300`}></i>
        </div>
        <div className="absolute right-4 top-4 overflow-hidden rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/90 to-indigo-500/90 shadow-xl shadow-cyan-500/20 ring-2 ring-white/10">
          <img
            src={`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${title}`}
            alt={`${title} avatar preview`}
            className="h-13 w-13 object-cover"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-300">{main}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#" className="rounded-full bg-[#465697] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5a6fb1]">
            Demo
          </a>
          <a href="#" className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/20">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;