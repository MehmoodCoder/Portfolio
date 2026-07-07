import ProjectCard from "../Components/Projects/ProjectsCard";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const projects = [
  {
    title: "Blogging Platform",
    main: "A smooth content-first experience with elegant cards, dark theme, and responsive storytelling sections.",
    icon: "fa-solid fa-blog",
    tags: ["React", "Tailwind", "UI"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "YouTube Clone",
    main: "A modern media layout inspired by the streaming experience with a playful, layered interface.",
    icon: "fa-brands fa-youtube",
    tags: ["React", "CSS", "Responsive"],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Netflix Style UI",
    main: "A cinematic landing experience with immersive visuals, cards, and refined motion details.",
    icon: "fa-solid fa-clapperboard",
    tags: ["React", "Animation", "Design"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80"
  }
];

const Projects = () => {
  return (
    <>
      <NavBar /><br/>
      <section className="px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Portfolio</p>
              <h1 className="text-3xl font-bold sm:text-4xl">Selected Projects</h1>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Each project is built with a focus on clarity, responsiveness, and a polished visual identity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;