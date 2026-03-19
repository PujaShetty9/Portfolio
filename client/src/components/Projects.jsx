import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH PROJECTS FROM BACKEND
  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative w-full min-h-screen pt-32 pb-24 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 
        w-[650px] h-[650px] rounded-full 
        bg-gradient-to-tr from-gray-300/30 to-transparent 
        blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="mb-20 max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-4">Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Carefully crafted projects focusing on performance,
            scalability, and user experience.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-gray-500 text-lg">Loading projects...</p>
        )}

        {/* Empty State */}
        {!loading && projects.length === 0 && (
          <p className="text-gray-500 text-lg">
            No projects added yet.
          </p>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

          {[...projects].reverse().map((project, index) => (
            <div
              key={project._id || index}
              className="
                relative rounded-3xl
                bg-white/70 dark:bg-gray-800/60
                backdrop-blur-xl
                border border-gray-200 dark:border-gray-700
                shadow-xl
                transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl
              "
            >
              {/* IMAGE FRAME */}
              <div className="
                relative mx-6 mt-6 rounded-2xl overflow-hidden
                border border-gray-300 dark:border-gray-600
                shadow-lg
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl
              ">
                <img
                  src={project.image || "/projects/placeholder.jpg"}
                  alt={project.title}
                  className="
                    w-full h-52 object-cover
                    transition-transform duration-700
                    hover:scale-110
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold">{project.title}</h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 text-xs font-medium rounded-full
                        bg-gray-200/80 dark:bg-gray-700/80
                        backdrop-blur
                        transition
                        hover:-translate-y-0.5 hover:shadow-md
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex items-center gap-4 pt-5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="
                        flex items-center gap-2 text-sm font-semibold
                        px-5 py-2.5 rounded-xl
                        bg-black text-white
                        dark:bg-white dark:text-black
                        hover:scale-105 transition
                      "
                    >
                      <FiExternalLink />
                      Live
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="
                        flex items-center gap-2 text-sm font-semibold
                        px-5 py-2.5 rounded-xl
                        border border-gray-400 dark:border-gray-500
                        hover:bg-black hover:text-white
                        dark:hover:bg-white dark:hover:text-black
                        transition
                      "
                    >
                      <FiGithub />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
