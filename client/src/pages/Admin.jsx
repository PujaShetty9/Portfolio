import { useEffect, useState } from "react";

const API = "http://localhost:5000/api";

const Admin = () => {

  /* ✅ FORCE LIGHT MODE FOR ADMIN */
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  /* ================= PROJECTS ================= */
  const [projects, setProjects] = useState([]);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    image: "",
    tech: "",
    live: "",
    github: ""
  });

  /* ================= SKILLS ================= */
  const [skills, setSkills] = useState([]);
  const [editingSkillId, setEditingSkillId] = useState(null);
  const [skillForm, setSkillForm] = useState({
    name: "",
    category: "",
    percent: ""
  });

  /* ================= FETCH ================= */
  useEffect(() => {
    fetchProjects();
    fetchSkills();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch(`${API}/projects`);
    setProjects(await res.json());
  };

  const fetchSkills = async () => {
    const res = await fetch(`${API}/skills`);
    setSkills(await res.json());
  };

  /* ================= PROJECT CRUD ================= */
  const submitProject = async (e) => {
    e.preventDefault();

    const url = editingProjectId
      ? `${API}/projects/${editingProjectId}`
      : `${API}/projects`;

    const method = editingProjectId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...projectForm,
        tech: projectForm.tech.split(",").map(t => t.trim())
      })
    });

    setProjectForm({
      title: "",
      description: "",
      image: "",
      tech: "",
      live: "",
      github: ""
    });
    setEditingProjectId(null);
    fetchProjects();
  };

  const editProject = (p) => {
    setEditingProjectId(p._id);
    setProjectForm({
      title: p.title,
      description: p.description,
      image: p.image,
      tech: p.tech.join(", "),
      live: p.live,
      github: p.github
    });
  };

  const deleteProject = async (id) => {
    await fetch(`${API}/projects/${id}`, { method: "DELETE" });
    fetchProjects();
  };

  /* ================= SKILL CRUD ================= */
  const submitSkill = async (e) => {
    e.preventDefault();

    const url = editingSkillId
      ? `${API}/skills/${editingSkillId}`
      : `${API}/skills`;

    const method = editingSkillId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(skillForm)
    });

    setSkillForm({ name: "", category: "", percent: "" });
    setEditingSkillId(null);
    fetchSkills();
  };

  const editSkill = (s) => {
    setEditingSkillId(s._id);
    setSkillForm({
      name: s.name,
      category: s.category,
      percent: s.percent
    });
  };

  const deleteSkill = async (id) => {
    await fetch(`${API}/skills/${id}`, { method: "DELETE" });
    fetchSkills();
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gray-100 p-10 text-gray-900">
      <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

      {/* ================= PROJECTS ================= */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h3 className="font-semibold mb-4">
            {editingProjectId ? "Edit Project" : "Add New Project"}
          </h3>

          <form onSubmit={submitProject} className="grid grid-cols-2 gap-4">
            <input className="border p-2 rounded" placeholder="Title"
              value={projectForm.title}
              onChange={e => setProjectForm({ ...projectForm, title: e.target.value })} />

            <input className="border p-2 rounded" placeholder="Image URL"
              value={projectForm.image}
              onChange={e => setProjectForm({ ...projectForm, image: e.target.value })} />

            <input className="border p-2 rounded col-span-2"
              placeholder="Tech Stack (React, Node, MongoDB)"
              value={projectForm.tech}
              onChange={e => setProjectForm({ ...projectForm, tech: e.target.value })} />

            <input className="border p-2 rounded" placeholder="Live URL"
              value={projectForm.live}
              onChange={e => setProjectForm({ ...projectForm, live: e.target.value })} />

            <input className="border p-2 rounded" placeholder="GitHub URL"
              value={projectForm.github}
              onChange={e => setProjectForm({ ...projectForm, github: e.target.value })} />

            <textarea className="border p-2 rounded col-span-2"
              placeholder="Description"
              value={projectForm.description}
              onChange={e => setProjectForm({ ...projectForm, description: e.target.value })} />

            <button className="bg-black text-white py-2 rounded col-span-2">
              {editingProjectId ? "Update Project" : "Add Project"}
            </button>
          </form>
        </div>

        {projects.map(p => (
          <div key={p._id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center mb-2">
            <span>{p.title}</span>
            <div className="space-x-4">
              <button onClick={() => editProject(p)} className="text-blue-600 font-semibold">
                Edit
              </button>
              <button onClick={() => deleteProject(p._id)} className="text-red-600 font-semibold">
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* ================= SKILLS ================= */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>

        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h3 className="font-semibold mb-4">
            {editingSkillId ? "Edit Skill" : "Add New Skill"}
          </h3>

          <form onSubmit={submitSkill} className="grid grid-cols-3 gap-4">
            <input className="border p-2 rounded" placeholder="Skill Name"
              value={skillForm.name}
              onChange={e => setSkillForm({ ...skillForm, name: e.target.value })} />

            <input className="border p-2 rounded" placeholder="Category"
              value={skillForm.category}
              onChange={e => setSkillForm({ ...skillForm, category: e.target.value })} />

            <input className="border p-2 rounded" placeholder="Percent"
              value={skillForm.percent}
              onChange={e => setSkillForm({ ...skillForm, percent: e.target.value })} />

            <button className="bg-black text-white py-2 rounded col-span-3">
              {editingSkillId ? "Update Skill" : "Add Skill"}
            </button>
          </form>
        </div>

        {skills.map(s => (
          <div key={s._id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center mb-2">
            <span>{s.name} ({s.percent}%)</span>
            <div className="space-x-4">
              <button onClick={() => editSkill(s)} className="text-blue-600 font-semibold">
                Edit
              </button>
              <button onClick={() => deleteSkill(s._id)} className="text-red-600 font-semibold">
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Admin;
