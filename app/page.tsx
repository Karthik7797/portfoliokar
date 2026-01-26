import ScrollyCanvas from "@/components/ScrollyCanvas";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen relative z-0">

      {/* Hero Section */}
      <ScrollyCanvas />

      {/* Main Content */}
      <div className="relative z-20 bg-primary">
        {/* Added z-20 background to cover the canvas when scrolling past it if needed, though canvas is 500vh */}

        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Achievements />

        <div className="relative z-0">
          <Contact />
        </div>

        {/* Simple Footer Text */}
        <footer className="py-6 text-center text-secondary text-sm bg-primary border-t border-white/5">
          <p>© 2026 Karthikeyan Prabhu. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
