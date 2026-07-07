import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const highlights = [
    { title: "Responsive UI", icon: "fa-solid fa-mobile-screen-button", text: "Beautiful layouts that adapt smoothly from phone to desktop." },
    { title: "Fast Performance", icon: "fa-solid fa-bolt", text: "Clean code and polished interactions for a snappy experience." },
    { title: "Modern Styling", icon: "fa-solid fa-palette", text: "Elegant visuals with a consistent dark-blue theme throughout." }
];

const skills = [
    { name: "HTML5", isSvg: false, icon: "fa-brands fa-html5", color: "text-orange-400" },
    { name: "CSS3", isSvg: false, icon: "fa-brands fa-css3-alt", color: "text-sky-400" },
    { name: "JavaScript", isSvg: false, icon: "fa-brands fa-js", color: "text-yellow-400" },
    { name: "React", isSvg: false, icon: "fa-brands fa-react", color: "text-cyan-400" },
    { 
        name: "Tailwind", 
        isSvg: true, 
        svgContent: (
            <svg className="w-4 h-4 mr-2 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
            </svg>
        )
    },
    { name: "BootStrap", isSvg: false, icon: "fa-brands fa-bootstrap", color: "text-purple-600" },
    { 
        name: "Python", 
        isSvg: true, 
        svgContent: (
            <svg className="w-4 h-4 mr-2" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M439.4 153.8c0-26.8-21.7-48.5-48.5-48.5H352V64c0-35.3-28.7-64-64-64H160C124.7 0 96 28.7 96 64v48.5H48.5C21.7 112.5 0 134.2 0 161v97c0 26.8 21.7 48.5 48.5 48.5H96v48.5c0 35.3 28.7 64 64 64h41.7c-11.8-13.4-19-30.8-19-50 0-43.1 34.9-78 78-78h130.2c26.8 0 48.5-21.7 48.5-48.5v-131z" fill="#306998"/>
                <path d="M8.6 358.2c0 26.8 21.7 48.5 48.5 48.5H96V448c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64v-48.5h47.5c26.8 0 48.5-21.7 48.5-48.5v-97c0-26.8-21.7-48.5-48.5-48.5H352V217c0-35.3-28.7-64-64-64H246.3c11.8 13.4 19 30.8 19 50 0 43.1-34.9 78-78 78H57.1c-26.8 0-48.5 21.7-48.5 48.5v128.7z" fill="#FFD43B"/>
            </svg>
        )
    },
    { name: "Node.js", isSvg: false, icon: "fa-brands fa-node-js", color: "text-emerald-400" },
];

const Home = () => {
    return (
        <>
            <NavBar />
            <section className="px-6 py-24 text-white sm:px-8 lg:px-16">
                <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-16">
                    <div className="w-full max-w-2xl text-center lg:text-left">
                        <div className="mb-5 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-lg backdrop-blur-sm">
                            <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                            Available for exciting web projects
                        </div>

                        <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Hello, I&apos;m <span className="bg-gradient-to-r from-[#8fb8ff] via-[#7c9cff] to-[#93f7d2] bg-clip-text text-transparent">Mehmood Hassan</span>
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-slate-300 sm:text-xl">
                            I craft clean, modern, responsive websites with playful avatars, smooth interactions, and a polished user experience.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                            <Link to="/contact" className="rounded-full bg-[#465697] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#465697]/25 transition duration-300 hover:-translate-y-1 hover:bg-[#5a6fb1]">
                                Contact Me
                            </Link>
                            <Link to="/projects" className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20">
                                View Projects
                            </Link>
                        </div>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {highlights.map((item) => (
                                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-left shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                                    <i className={`${item.icon} mb-3 text-lg text-cyan-300`}></i>
                                    <h3 className="font-semibold text-white">{item.title}</h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                            {skills.map((skill) => (
                                <span key={skill.name} className="flex items-center rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-sm font-medium text-slate-200 shadow-sm">
                                    {skill.isSvg ? (
                                        skill.svgContent
                                    ) : (
                                        <i className={`${skill.icon} mr-2 ${skill.color}`}></i>
                                    )}
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="w-full max-w-[420px]">
                        <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-white/20 to-white/5 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
                            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_45%)]" />
                            <img
                                src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Mehmood"
                                alt="Cartoon avatar of Mehmood Hassan"
                                className="relative h-[380px] w-full rounded-[24px] object-cover object-center transition duration-500 hover:scale-[1.02] sm:h-[450px]"
                            />
                            <div className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow-lg">
                                Creative Developer
                            </div>
                            <div className="absolute bottom-6 right-6 rounded-full bg-[#465697] px-3 py-2 text-sm font-semibold text-white shadow-lg">
                                ✨ Modern UI
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;