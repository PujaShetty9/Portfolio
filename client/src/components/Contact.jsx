import { FiMail, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            className="relative w-full min-h-screen pt-32 pb-24 px-6 overflow-hidden"
            aria-label="Contact Section"
        >
            {/* Animated Background Ring */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full 
                bg-gradient-to-tr from-gray-300/30 to-transparent blur-3xl animate-pulse" />

            <div className="max-w-7xl mx-auto fade-up-animation relative z-10">

                {/* Heading */}
                <div className="mb-20 max-w-2xl relative">
                    <h1 className="text-5xl font-extrabold mb-4">Let’s Connect</h1>
                    <div className="w-24 h-1 bg-black dark:bg-white rounded-full mb-6 animate-pulse" />
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Have an idea, a project, or just want to say hello?
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* LEFT — Info Cards */}
                    <div className="space-y-8">
                        {[
                            {
                                icon: <FiMail />,
                                title: "Email",
                                value: "pujashetty92006@gmail.com",
                                link: "mailto:pujashetty92006@gmail.com"
                            },
                            {
                                icon: <FiLinkedin />,
                                title: "LinkedIn",
                                value: "linkedin.com/in/pujashetty",
                                link: "https://www.linkedin.com/in/pujashetty/"
                            },
                            {
                                icon: <FiGithub />,
                                title: "GitHub",
                                value: "github.com/PujaShetty9",
                                link: "https://github.com/PujaShetty9"
                            }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                className="
                                    group flex items-center gap-5 p-6 rounded-2xl
                                    bg-white/70 dark:bg-gray-800/60
                                    border border-gray-200 dark:border-gray-700
                                    shadow-lg card-tilt
                                    transition-all duration-300
                                    hover:-translate-y-2 hover:shadow-2xl
                                "
                            >
                                <div className="
                                    w-12 h-12 flex items-center justify-center rounded-xl
                                    bg-black text-white dark:bg-white dark:text-black
                                    transition-all
                                    group-hover:rotate-6 group-hover:scale-110
                                ">
                                    {item.icon}
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">{item.title}</p>
                                    <p className="font-medium group-hover:underline">
                                        {item.value}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* RIGHT — Contact Form */}
                    <div className="
                        relative p-10 rounded-3xl
                        bg-white/70 dark:bg-gray-800/60
                        border border-gray-200 dark:border-gray-700
                        shadow-xl card-tilt
                        transition-all hover:-translate-y-3 hover:shadow-2xl
                    ">
                        {/* Mouse Glow Layer */}
                        <div className="absolute inset-0 rounded-3xl pointer-events-none 
                            bg-gradient-to-br from-black/5 to-transparent dark:from-white/5" />

                        <h2 className="text-2xl font-semibold mb-8 relative z-10">
                            Send a Message
                        </h2>

                        {!submitted ? (
                            <form
                                className="space-y-6 relative z-10"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    className="contact-input"
                                />

                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Email"
                                    className="contact-input"
                                />

                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Message"
                                    className="contact-input resize-none"
                                />

                                {error && (
                                    <p className="text-red-500 text-sm">{error}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="
                                        w-full py-3 rounded-xl font-semibold
                                        bg-black text-white dark:bg-white dark:text-black
                                        flex items-center justify-center gap-3
                                        transition-all relative overflow-hidden
                                        hover:scale-[1.03] hover:shadow-xl
                                        active:scale-95
                                    "
                                >
                                    <FiSend />
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-20 relative z-10">
                                <h3 className="text-2xl font-bold mb-3">
                                    Message Sent 🚀
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I’ll get back to you as soon as possible.
                                </p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
