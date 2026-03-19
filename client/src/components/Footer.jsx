import { FiLinkedin, FiGithub, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="
            w-full mt-20 
            bg-gray-100 dark:bg-gray-800 
            border-t border-gray-300 dark:border-gray-700 
            py-10
        ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

                {/* 1. ABOUT SECTION */}
                <div>
                    <h3 className="text-xl font-semibold">Portfolio</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                        I am passionate about building 
                        clean, user-friendly, and scalable applications. 
                    </p>
                </div>

                {/* 2. QUICK LINKS */}
                <div>
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">

                        <li>
                            <Link to="/" className="hover:text-blue-600">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/projects" className="hover:text-blue-600">
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact" className="hover:text-blue-600">
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* 3. SOCIAL + LOCATION */}
                <div>
                    <h3 className="text-xl font-semibold">Connect</h3>

                    <div className="flex items-center gap-3 mt-4">
                        <FiLinkedin size={22} className="text-blue-600" />
                        <a
                            href="https://www.linkedin.com/in/pujashetty/"
                            target="_blank"
                            className="hover:text-blue-600 transition"
                        >
                            LinkedIn
                        </a>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                        <FiGithub size={22} className="text-blue-600" />
                        <a
                            href="https://github.com/PujaShetty9"
                            target="_blank"
                            className="hover:text-blue-600 transition"
                        >
                            GitHub
                        </a>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                        <FiMail size={22} className="text-blue-600" />
                        <a
                            href="mailto:pujashetty92006@gmail.com"
                            className="hover:text-blue-600 transition"
                        >
                            Email
                        </a>
                    </div>

                    <div className="flex items-center gap-3 mt-3 text-gray-700 dark:text-gray-300">
                        <FiMapPin size={22} className="text-blue-600" />
                        <span>Navi Mumbai, Maharashtra</span>
                    </div>
                </div>

            </div>

            {/* COPYRIGHT BAR */}
            <div className="text-center mt-10 pt-5 border-t border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Puja Shetty — All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
