import Education from "./components/education";
import Hero from "./components/hero";
import Navbar from "./components/navBar";
import Projects from "./components/project";
import Footer from "./components/footer";
import About from "./components/skill";
import Contact from "./components/contact";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
