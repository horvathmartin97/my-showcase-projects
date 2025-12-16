export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-600 py-4 text-center text-xs">
      <p>
        © {new Date().getFullYear()} Szaki Autókozmetika | Developed by{" "}
        <a
          href="https://martin-horvath-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-500 hover:underline"
        >
          Martin Horváth
        </a>
      </p>
    </footer>
  );
}
