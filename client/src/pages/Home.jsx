import {
    FiLinkedin,
    FiGithub,
    FiMail,
    FiMapPin,
    FiDownload,
} from "react-icons/fi";

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-all duration-300 relative">

            {/* Soft Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br 
                from-gray-50 via-gray-100 to-white
                dark:from-gray-800 dark:via-gray-900 dark:to-black opacity-70"
            />

            {/* Floating Blob */}
            <div className="absolute w-72 h-72 bg-gray-300 rounded-full blur-3xl opacity-20 top-10 -left-10 dark:bg-gray-700" />

            {/* Keyframe Animation */}
            <style>
                {`
                    @keyframes subtleColorShift {
                        0% { color: #6b7280; }
                        50% { color: #111827; }
                        100% { color: #6b7280; }
                    }
                    .heading-animate {
                        animation: subtleColorShift 3.5s ease-in-out infinite;
                    }

                    .social-animate {
                        transition: transform 0.25s ease, box-shadow 0.25s ease;
                    }

                    .social-animate:hover {
                        transform: translateY(-6px) scale(1.12);
                        box-shadow: 0 10px 25px rgba(37, 99, 235, 0.35);
                    }

                    .btn-animate:hover {
                        transform: translateY(-4px) scale(1.04);
                        box-shadow: 0 10px 30px rgba(0,0,0,0.25);
                    }
                `}
            </style>

            <div className="max-w-7xl mx-auto pt-32 pb-20 px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* LEFT — Profile Card */}
                    <div className="flex justify-center md:justify-start fade-up-animation">

                        <div
                            className="
                                w-full max-w-sm 
                                backdrop-blur-xl bg-white/40 dark:bg-gray-800/40
                                border border-white/20 dark:border-gray-700/40
                                shadow-2xl rounded-3xl p-8
                                transition-all duration-500
                                hover:-translate-y-3 hover:shadow-3xl
                                hover:shadow-black/20 dark:hover:shadow-white/10
                            "
                        >

                            {/* Photo Frame — Hover Movement */}
                            <div
                                className="
                                    w-44 h-44 mx-auto rounded-2xl overflow-hidden shadow-xl 
                                    border border-gray-300 dark:border-gray-600
                                    transition-transform duration-500
                                    hover:scale-110 hover:-translate-y-2
                                "
                            >
                                <img
                                    src="/profile.jpg"
                                    alt="Puja Shetty"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h2 className="mt-6 text-4xl font-extrabold text-center">
                                Puja Shetty
                            </h2>

                            {/* Role */}
                            <p className="text-center mt-2 text-lg text-gray-700 dark:text-gray-300">
                                Full Stack Developer • Fresher
                            </p>

                            {/* Location Badge */}
                            <div className="flex justify-center mt-3">
                                <span
                                    className="
            flex items-center gap-2 px-4 py-1.5 
            bg-gray-300 dark:bg-gray-700 
            text-gray-900 dark:text-gray-300
            text-sm rounded-full shadow-sm
            transition-all duration-300
            hover:-translate-y-2 hover:scale-110 
            hover:shadow-lg hover:shadow-gray-400/50 
            dark:hover:shadow-gray-900/60
        "
                                >
                                    <FiMapPin size={16} />
                                    Navi Mumbai, Maharashtra
                                </span>
                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-center gap-4 mt-6">
                                {[
                                    {
                                        icon: <FiLinkedin size={24} />,
                                        link: "https://www.linkedin.com/in/pujashetty/",
                                    },
                                    {
                                        icon: <FiGithub size={24} />,
                                        link: "https://github.com/PujaShetty9",
                                    },
                                    {
                                        icon: <FiMail size={24} />,
                                        link: "mailto:pujashetty92006@gmail.com",
                                    },
                                ].map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.link}
                                        target="_blank"
                                        className="
                                            w-12 h-12 flex items-center justify-center rounded-xl
                                            border border-blue-600 text-blue-600 
                                            bg-white dark:bg-gray-900
                                            hover:bg-blue-600 hover:text-white 
                                            shadow-md social-animate
                                        "
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>

                            {/* Resume Button */}
                            <a
                                href="/PujaCV.pdf"
                                download="PujaCV.pdf"
                                className="
    w-full mt-7 bg-black dark:bg-white 
    text-white dark:text-black py-3.5 rounded-xl font-semibold
    transition flex items-center justify-center gap-3 shadow-md
    btn-animate
  "
                            >
                                <FiDownload size={20} />
                                Download Resume
                            </a>

                        </div>
                    </div>

                    {/* RIGHT — Hero Text */}
                    <div className="space-y-14 fade-up-animation delay-200">

                        <div>
                            <h1 className="text-6xl font-black mb-3 heading-animate">
                                Crafting Digital Experiences
                            </h1>

                            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                                Full-Stack Developer 
                            </h2>

                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                                I am a Computer Engineering undergraduate with hands-on
                                experience in building modern, scalable web applications. I specialize in crafting
                                clean, responsive user interfaces and supporting them with efficient, reliable
                                backend systems.
                                <br /><br />
                                Through projects ranging from AI-powered applications to e-commerce and civic
                                platforms, I focus on turning ideas into production-ready solutions that balance
                                performance, usability, and thoughtful design.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-6">
                            <a
                                href="/about"
                                className="
                                    px-7 py-3 rounded-xl font-semibold
                                    bg-black text-white dark:bg-white dark:text-black
                                    hover:bg-gray-900 dark:hover:bg-gray-200
                                    transition shadow-md btn-animate
                                "
                            >
                                More About Me
                            </a>

                            <a
                                href="/projects"
                                className="
                                    px-7 py-3 rounded-xl font-semibold
                                    border border-gray-700 dark:border-gray-300
                                    hover:bg-black hover:text-white 
                                    hover:dark:bg-white hover:dark:text-black
                                    transition btn-animate
                                "
                            >
                                View My Projects
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
