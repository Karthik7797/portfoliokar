import Link from "next/link";
import Nav from "@/components/Nav";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#experience"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
      >
        Skip to content
      </a>

      <Nav />

      <main className="relative z-0 min-h-dvh bg-background">
        <ScrollyCanvas />

        <div className="relative z-20 bg-background">
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />

          <footer className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
            <div className="hairline flex flex-col gap-4 py-8 font-mono text-[11px] uppercase tracking-[0.14em] text-txt-muted sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Karthikeyan Prabhu</p>
              <div className="flex items-center gap-6">
                <Link href="/about" className="transition-colors hover:text-accent">
                  About
                </Link>
                <a href="#top" className="transition-colors hover:text-accent">
                  Back to top ↑
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
