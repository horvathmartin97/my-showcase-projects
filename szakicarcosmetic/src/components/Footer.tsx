export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-600 py-4 text-center text-xs">
      <p>
        © {new Date().getFullYear()} Szaki Autókozmetika | Developed by{" "}
        <a
          href="www.linkedin.com/in/martin-horváth-069487363"
          className="text-cyan-500 hover:underline"
        >
          Martin Horváth
        </a>
      </p>
    </footer>
  );
}
