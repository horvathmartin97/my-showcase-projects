import { useNavigate } from "react-router";
const features = [
  {
    icon: "📋",
    title: "Organize",
    desc: "Create multiple lists for any occasion",
    gradient: "from-lime-400/20 to-emerald-400/10",
    border: "border-lime-500/30",
  },
  {
    icon: "👥",
    title: "Share",
    desc: "Invite friends & family to collaborate live",
    gradient: "from-pink-400/20 to-purple-400/10",
    border: "border-pink-500/30",
  },
  {
    icon: "✅",
    title: "Track",
    desc: "Check off items as you shop together",
    gradient: "from-sky-400/20 to-indigo-400/10",
    border: "border-sky-500/30",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-800/60 border border-indigo-600 text-indigo-200 text-sm font-medium">
          🛒 Your smart shopping companion
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5 leading-tight">
          Shopping lists,{" "}
          <span className="bg-linear-to-r from-lime-400 to-pink-400 bg-clip-text text-transparent">
            done together.
          </span>
        </h1>

        <p className="text-indigo-200 text-lg md:text-xl max-w-xl mb-10">
          Create, share and manage your shopping lists in real time with your
          family or friends — anywhere, anytime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-3 bg-linear-to-r from-lime-400 to-emerald-500 text-gray-900 text-lg rounded-2xl font-bold hover:opacity-90 transition shadow-lg shadow-lime-400/20"
          >
            Get started free ✨
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 border-2 border-indigo-500 text-indigo-200 text-lg rounded-2xl font-semibold hover:bg-indigo-800/40 transition"
          >
            Login
          </button>
        </div>
      </main>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 px-6 pb-20 max-w-4xl mx-auto w-full">
        {features.map((f) => (
          <div
            key={f.title}
            className={`bg-liner-to-br ${f.gradient} border ${f.border} rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-200`}
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="text-lg font-bold text-white mb-1">{f.title}</h3>
            <p className="text-indigo-200 text-sm">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
