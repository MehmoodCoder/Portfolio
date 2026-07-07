import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";

const expertise = [
  { title: "Frontend Developer", icon: "fa-solid fa-code", text: "I turn ideas into polished, modern interfaces with React and Tailwind." },
  { title: "UI/UX Focus", icon: "fa-solid fa-paintbrush", text: "I pay attention to spacing, color, motion, and interaction details." },
  { title: "Performance Driven", icon: "fa-solid fa-rocket", text: "Fast load times, responsive layouts, and clean structure are my priority." }
];

const About = () => {
  return (
    <>
      <NavBar /><br/>
      <section className="px-6 py-24 text-white sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[32px] border border-white/10 bg-slate-900/40 p-6 shadow-2xl shadow-black/20 backdrop-blur-lg lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          
          <div className="flex flex-col items-center justify-center rounded-[24px] border border-white/10 bg-gradient-to-br from-white/15 to-white/5 p-6 text-center">
            <img
              src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=AboutMe"
              alt="Cartoon avatar illustration"
              className="h-56 w-56 rounded-full border border-white/10 bg-white/10 object-cover p-2 shadow-lg shadow-cyan-500/10"
            />
            <h2 className="mt-6 text-3xl font-bold">About Me</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              I build polished front-end experiences that feel lively, professional, and easy to use.
            </p>
          </div>

          <div className="space-y-4">
            {expertise.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#465697] text-lg text-white">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-300">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <h3 className="text-xl font-semibold text-cyan-100">Languages I love</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { name: "HTML5", isSvg: false, icon: "fa-brands fa-html5", color: "text-orange-400" },
                  { name: "CSS3", isSvg: false, icon: "fa-brands fa-css3-alt", color: "text-sky-400" },
                  { name: "JavaScript", isSvg: false, icon: "fa-brands fa-js", color: "text-yellow-400" },
                  { name: "React", isSvg: false, icon: "fa-brands fa-react", color: "text-cyan-400" },
                  { name: "BootStrap", isSvg: false, icon: "fa-brands fa-bootstrap", color: "text-purple-600" },
                  { 
                    name: "Tailwind", 
                    isSvg: true, 
                    svgContent: (
                      <svg className="w-4 h-4 mr-2 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                      </svg>
                    )
                  },
                  { 
                    name: "Python", 
                    isSvg: true, 
                    svgContent: (
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M439.4 153.8c0-26.8-21.7-48.5-48.5-48.5H352V64c0-35.3-28.7-64-64-64H160C124.7 0 96 28.7 96 64v48.5H48.5C21.7 112.5 0 134.2 0 161v97c0 26.8 21.7 48.5 48.5 48.5H96v48.5c0 35.3 28.7 64 64 64h41.7c-11.8-13.4-19-30.8-19-50 0-43.1 34.9-78 78-78h130.2c26.8 0 48.5-21.7 48.5-48.5v-131z" fill="#306998"/>
                        <path d="M8.6 358.2c0 26.8 21.7 48.5 48.5 48.5H96V448c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64v-48.5h47.5c26.8 0 48.5-21.7 48.5-48.5v-97c0-26.8-21.7-48.5-48.5-48.5H352V217c0-35.3-28.7-64-64-64H246.3c11.8 13.4 19 30.8 19 50 0 43.1-34.9 78-78 78H57.1c-26.8 0-48.5 21.7-48.5 48.5v128.7z" fill="#FFD43B"/>
                      </svg>
                    )
                  }
                ].map((lang) => (
                  <span key={lang.name} className="flex items-center rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm font-medium text-slate-200">
                    {lang.isSvg ? (
                      lang.svgContent
                    ) : (
                      <i className={`${lang.icon} mr-2 ${lang.color}`}></i>
                    )}
                    {lang.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;