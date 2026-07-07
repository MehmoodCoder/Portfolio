import { useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const socials = [
    { label: "Email", value: "mehmood.mh56@gmail.com", icon: "fa-solid fa-envelope", href: "mailto:mehmood.mh56@gmail.com?subject=Portfolio%20Contact" },
    { label: "LinkedIn", value: "linkedin.com/in/mehmood-hassan-7604a03b1", icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/mehmood-hassan-7604a03b1" },
    { label: "GitHub", value: "github.com/MehmoodCoder", icon: "fa-brands fa-github", href: "https://github.com/MehmoodCoder" },
];

const buildMailtoLink = (name, email, subject, message) => {
    const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message
    ].join("\n");

    const params = new URLSearchParams({
        subject: subject || "Portfolio Contact",
        body
    });

    return `mailto:mehmood.mh56@gmail.com?${params.toString()}`;
};

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (submitted) setSubmitted(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const mailtoLink = buildMailtoLink(
            formData.name,
            formData.email,
            formData.subject,
            formData.message
        );

        if (typeof window !== "undefined") {
            window.location.href = mailtoLink;
        }

        setSubmitted(true);
    };

    return (
        <>
            <NavBar />
            <section className="px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:px-16">
                <div className="mx-auto grid max-w-7xl gap-5 rounded-[32px] border border-white/10 bg-slate-950/40 p-2 shadow-[0_30px_90px_rgba(2,6,23,0.5)] backdrop-blur-2xl sm:gap-6 sm:p-3 md:gap-8 md:p-4 lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
                    <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5 sm:p-6 lg:p-8 flex flex-col justify-between gap-6">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.24),_transparent_32%)]" />
                        
                        <div className="relative z-10 w-full">
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300 sm:text-sm">Contact</p>
                            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">Let&apos;s create something remarkable</h2>
                            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:mt-4 sm:text-base">
                                Whether it&apos;s a launch, a redesign, or a bold new idea, I&apos;m ready to bring it to life with thoughtful design and polished execution.
                            </p>

                            <div className="mt-6 grid gap-4 w-full sm:grid-cols-1">
                                {socials.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target= "_blank"
                                        rel="noreferrer"
                                        className="group flex items-center gap-4 rounded-[20px] border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.18)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-800/80 active:scale-[0.99] w-full min-w-0"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-white shadow-lg shadow-indigo-500/20 transition group-hover:scale-105">
                                            <i className={`${item.icon} text-lg`}></i>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="font-semibold text-white text-base">{item.label}</div>
                                            <div className="mt-0.5 break-all text-sm text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">{item.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 rounded-[24px] border border-white/10 bg-white/10 p-4 shadow-inner shadow-cyan-950/30 backdrop-blur-sm sm:p-5 w-full">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-white shadow-lg shadow-cyan-500/20">
                                    <i className="fa-solid fa-paper-plane text-lg"></i>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-base font-semibold text-white">Fast response</p>
                                    <p className="text-sm text-slate-300">Usually replies within a day</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-4 shadow-inner shadow-black/20 backdrop-blur-sm sm:p-6 lg:p-8">
                        <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">Send a message</p>
                                <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">Tell me about your project</h3>
                            </div>
                            <div className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                                Available for work
                            </div>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <input
                                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40 focus:bg-white/10 placeholder:text-slate-400"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    spellCheck="false"
                                    required
                                />
                                <input
                                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40 focus:bg-white/10 placeholder:text-slate-400"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <input
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40 focus:bg-white/10 placeholder:text-slate-400"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                            />
                            <textarea
                                className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40 focus:bg-white/10 placeholder:text-slate-400"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your idea..."
                                required
                            ></textarea>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <button className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto">
                                    Send Message
                                </button>
                                <p className="text-sm text-slate-400">No spam, just a genuine conversation.</p>
                            </div>
                            {submitted && (
                                <p className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-200">
                                    Thanks! Your message is being prepared for mehmood.mh56@gmail.com
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;