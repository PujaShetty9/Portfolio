import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiFlask
} from "react-icons/si";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

/* ICON MAP */
const iconMap = {
  HTML5: <FaHtml5 size={26} />,
  CSS3: <FaCss3Alt size={26} />,
  JavaScript: <SiJavascript size={26} />,
  "React.js": <FaReact size={26} />,
  "Tailwind CSS": <SiTailwindcss size={26} />,
  "Node.js": <FaNodeJs size={26} />,
  "Express.js": <SiExpress size={26} />,
  Python: <FaPython size={26} />,
  Flask: <SiFlask size={26} />,
  MongoDB: <SiMongodb size={26} />,
  MySQL: <SiMysql size={26} />
};

/* ICON COLORS */
const getIconColor = (name) => (
  name === "HTML5" ? "#E34F26" :
  name === "CSS3" ? "#1572B6" :
  name === "JavaScript" ? "#F7DF1E" :
  name === "React.js" ? "#61DAFB" :
  name === "Tailwind CSS" ? "#38BDF8" :
  name === "Node.js" ? "#3C873A" :
  name === "Express.js" ? "#ffffff" :
  name === "Python" ? "#3776AB" :
  name === "Flask" ? "#ffffff" :
  name === "MongoDB" ? "#47A248" :
  name === "MySQL" ? "#00758F" :
  "#9CA3AF"
);

const Skills = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/skills`)
      .then(res => res.json())
      .then(skills => {
        const grouped = {};
        skills.forEach(skill => {
          if (!grouped[skill.category]) grouped[skill.category] = [];
          grouped[skill.category].push(skill);
        });

        setCategories(
          Object.keys(grouped).map(cat => ({
            title: cat,
            description: `${cat}`,
            skills: grouped[cat]
          }))
        );
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="w-full min-h-screen pt-32 pb-24 px-6
      bg-white dark:bg-black transition-colors duration-300">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold mb-4
          text-gray-900 dark:text-white">
          Skills & Technologies
        </h1>

        <p className="text-lg max-w-2xl mb-14
          text-gray-600 dark:text-gray-400">
          I build fast, modern and scalable applications with a strong focus on clean UI.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="
                group p-8 rounded-3xl
                bg-gray-100/80 dark:bg-gray-900/60
                border border-gray-200 dark:border-gray-800
                shadow-lg dark:shadow-black/40
                transition-all duration-300
                hover:-translate-y-3 hover:shadow-2xl
              "
            >
              <h2 className="text-2xl font-bold mb-2
                text-gray-900 dark:text-white">
                {category.title}
              </h2>

              <p className="text-sm mb-6
                text-gray-600 dark:text-gray-400">
                {category.description}
              </p>

              {/* Skills */}
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>

                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {/* ICON WITH HOVER */}
                        <span
                          className="
                            transition-transform duration-300
                            group-hover:rotate-6 group-hover:scale-110
                          "
                          style={{ color: getIconColor(skill.name) }}
                        >
                          {iconMap[skill.name]}
                        </span>

                        <span className="font-medium
                          text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-sm
                        text-gray-600 dark:text-gray-400">
                        {skill.percent}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-2 rounded-full
                      bg-gray-300 dark:bg-gray-700 overflow-hidden">
                      <div
                        className="h-full rounded-full
                          bg-black dark:bg-white
                          transition-all duration-700"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
