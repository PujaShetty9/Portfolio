import React, { useEffect, useState } from "react";

const About = () => {
  const [stats, setStats] = useState({ projects: 0, hack: 0, tech: 0 });

  useEffect(() => {
    let p = 0, h = 0, t = 0;
    const interval = setInterval(() => {
      if (p < 5) p++;
      if (h < 2) h++;
      if (t < 12) t++;
      setStats({ projects: p, hack: h, tech: t });
      if (p === 5 && h === 2 && t === 12) clearInterval(interval);
    }, 40);
  }, []);

  return (
    <section id="about" className="w-full py-24 bg-gray-50 dark:bg-gray-900 transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Title */}
        <div className="text-center mb-20 fade-up-animation">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="mt-3 h-1 w-24 bg-black dark:bg-white mx-auto rounded-full"></div>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Crafting modern, scalable and impactful digital products.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT GLASS CARD */}
          <div
            className="
              backdrop-blur-xl bg-white/40 dark:bg-gray-800/40
              shadow-xl border border-white/20 dark:border-gray-700/50
              rounded-3xl p-10 fade-up-animation delay-200
              hover:bg-white/50 hover:dark:bg-gray-700/40
              hover:shadow-2xl hover:-translate-y-2
              hover:shadow-black/20 dark:hover:shadow-white/10
              transition-all duration-500
              card-tilt
            "
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I’m <span className="font-semibold">Puja Shetty</span>, a
              passionate <span className="font-semibold">Computer Engineering Student </span>
              who enjoys solving real-world problems through code and technology. I approach development with a strong foundation in both frontend and backend concepts, and I’m always curious about how systems work end-to-end.
            </p>

            <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I enjoy learning new technologies, experimenting with different frameworks, and refining my skills through hands-on implementation rather than just theory.
            </p>

            <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I thrive in collaborative environments, take ownership of my work, and continuously look for opportunities to grow as a developer while contributing meaningfully to impactful projects.
            </p>

            {/* Counter Stats */}
            <div className="grid grid-cols-3 gap-5 mt-10">
              {[
                { num: stats.projects + "+", label: "Projects" },
                { num: stats.hack + "+", label: "Hackathons" },
                { num: stats.tech + "+", label: "Technologies" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    text-center bg-white/30 dark:bg-gray-700/30 
                    backdrop-blur-lg rounded-2xl py-5
                    border border-white/20 dark:border-gray-700/50
                    shadow-lg hover:-translate-y-1 hover:shadow-2xl 
                    hover:shadow-black/20 dark:hover:shadow-white/10
                    transition-all duration-500
                    card-tilt
                  "
                >
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {item.num}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-10">

            {/* What I Do Card */}
            <div
              className="
                bg-gray-100 dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                shadow-xl rounded-3xl p-8 fade-up-animation delay-300
                hover:-translate-y-2 hover:shadow-2xl
                hover:shadow-black/20 dark:hover:shadow-white/10
                transition-all duration-500
                card-tilt
              "
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                What I Do
              </h3>

              <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                <li>✔ Build modern full-stack web applications</li>
                <li>✔ Design clean and responsive user interfaces</li>
                <li>✔ Develop backend logic and REST APIs</li>
                <li>✔ Integrate AI-based features and analytics</li>
                <li>✔ Manage databases and authentication systems</li>
                <li>✔ Deliver real-world, production-ready solutions</li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="fade-up-animation delay-400">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                My Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js",
                  "MongoDB", "Tailwind", "REST APIs", "Git", "JWT Auth", "Responsive UI"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 py-2 text-sm rounded-full
                      bg-white dark:bg-gray-800
                      border border-gray-300 dark:border-gray-700
                      text-gray-700 dark:text-gray-300
                      shadow transition-all duration-300 cursor-default
                      hover:bg-black hover:text-white
                      hover:dark:bg-white hover:dark:text-black
                      hover:scale-105 hover:-translate-y-1
                      card-tilt
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
