import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { featuredProjects, projects, ownProjects, mobileApp } from "@/lib/portfolio-projects";
import { experience, linkedIn, resume } from "@/lib/portfolio-profile";
import styles from "./portfolio.module.css";

const capabilities = [
  ["◩", "Web applications", "Responsive products built with React, Next.js and TypeScript."],
  ["◉", "Design systems", "Reusable UI components that carry Figma designs into production."],
  ["◢", "Mobile interfaces", "Responsive mobile experiences with Ionic and React Native."],
  ["▦", "Microsoft 365", "SPFx web parts, Power Apps, automation and Copilot Studio agents."],
];

const stack = ["React", "TypeScript", "Next.js", "Angular", "Ionic", "SPFx", "Power Apps", "Power Automate", "Copilot Studio", "Dataverse"];
const email = "karthikeyanprabhu8@gmail.com";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className={styles.project}>
      <Image src={project.image} alt={project.name + " interface"} width={700} height={400}
        sizes="(max-width: 600px) 90vw, (max-width: 1050px) 45vw, 31vw" />
      <div className={styles.projectLabel}>
        <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <h3>{project.name}</h3>
        {project.link && <a href={project.link} target="_blank" rel="noreferrer" aria-label={"View " + project.name}>View project ↗</a>}
      </div>
      <p>{project.description}</p>
      <p className={styles.tags}>{project.tags.join(" / ")}</p>
    </article>
  );
}

export default function Home() {
  return (
    <div className={styles.site} id="top">
      <a className={styles.skip} href="#main">Skip to content</a>
      <header className={styles.header}>
        <a className={styles.wordmark} href="#top"><Image src="/icon.png" alt="" width={36} height={36} />Karthikeyan Prabhu</a>
        <nav aria-label="Primary">
          <a href="#projects">Work</a><a href="#about">About</a><a href="#services">Expertise</a>
          <a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </nav>
        <a className={styles.button} href="#contact">Let’s talk <span>↗</span></a>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <h1 id="hero-title"><span>Frontend</span><span>&amp; Power</span><span>Platform</span><span>Developer</span></h1>
            <p>I build web and mobile products, SharePoint web parts, and Power Platform solutions.</p>
            <div className={styles.actions}><a className={styles.button} href="#projects">View my work <span>↗</span></a><a className={styles.textLink} href="#about">About me</a></div>
          </div>
          <div className={styles.heroArt}>
            <div className={styles.redBlock} />
            <div className={styles.goldBlock} />
            <div className={styles.cross} aria-hidden="true">+</div>
            <div className={styles.artCaption} aria-hidden="true">Design into production</div>
            <div className={styles.dotGrid} aria-hidden="true" />
            <Image className={styles.portrait} src="/assets/portfolio-portrait-orange.png" unoptimized alt="Karthikeyan Prabhu" fill sizes="(max-width: 760px) 100vw, 52vw" preload />
          </div>
        </section>

        <section className={styles.about} id="about">
          <div className={styles.aboutCopy}>
            <div><h2>About me</h2><p>I’m Karthikeyan Prabhu, a SharePoint and Power Platform Developer at JJSoft Techno Private Limited. I have 5+ years of experience building web and mobile products, from learning platforms to CRM dashboards.</p><Link className={styles.textLink} href="/about">Read my profile ↗</Link></div>
            <dl className={styles.stats}>
              <div><dt>Building since</dt><dd>2021</dd></div>
              <div><dt>Projects featured</dt><dd>{projects.length + ownProjects.length + 1}</dd></div>
              <div><dt>Web &amp; mobile</dt><dd>02</dd></div>
            </dl>
          </div>
          <div className={styles.monogram} aria-hidden="true"><span>KP</span></div>
        </section>

        <section className={styles.services} id="services">
          <div className={styles.sectionHead}><h2>What I build</h2><a className={styles.textLink} href="#projects">See the work ↗</a></div>
          <div className={styles.servicesGrid}>{capabilities.map(([icon, title, copy]) =>
            <article key={title}><span aria-hidden="true">{icon}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
          )}</div>
        </section>

        <section className={styles.skills} id="skills">
          <div><h2>Skills</h2><ul className={styles.stack}>{stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <ol className={styles.process}>{["Design handoff", "Component systems", "Production"].map((step, i) =>
            <li key={step}><span aria-hidden="true">0{i + 1}</span>{step}</li>
          )}</ol>
          <div className={styles.skillsNote}><p>From the first Figma handoff to the last performance pass, I focus on interfaces that feel good to use and are easy to maintain.</p><a className={styles.textLink} href="#contact">Let’s work together ↗</a></div>
        </section>

        <section className={styles.projects} id="projects">
          <div className={styles.sectionHead}><h2>Selected projects</h2><a className={styles.textLink} href="#all-projects">View all projects ↗</a></div>
          <div className={styles.projectGrid}>{[...featuredProjects, ...projects.filter((project) => project.name === "AI Acme")].map((project, index) =>
            <ProjectCard key={project.name} project={project} index={index} />
          )}</div>
          <details className={styles.archive}>
            <summary>Project archive <span>All client, side and mobile projects</span></summary>
            <div className={styles.projectGrid} id="all-projects">{[...projects, ...ownProjects, mobileApp].map((project, index) =>
              <ProjectCard key={project.name} project={project} index={index} />
            )}</div>
            <div className={styles.mobileInstall}><Image src="/assets/qr_code.png" alt="QR code for the mobile app store" width={84} height={84} /><span>Scan to open the mobile app store.</span></div>
          </details>
        </section>

        <section className={styles.experience} id="experience">
          <h2>Experience</h2>
          <div className={styles.roleList}>{experience.map(({ company }) => <span key={company}>{company}</span>)}</div>
          <Link href="/about" className={styles.textLink}>Career details ↗</Link>
        </section>

        <section className={styles.contact} id="contact">
          <div className={styles.contactTitle}><h2>Let’s build<br />something<br />remarkable</h2></div>
          <div className={styles.contactInfo}>
            <a href={"mailto:" + email}>✉ <span>{email}</span></a>
            <span>⌖ <span>Coimbatore, Tamil Nadu</span></span>
            <a href={linkedIn}>↗ <span>LinkedIn</span></a>
          </div>
          <div className={styles.contactAction}><p>Have a project or role in mind?</p><a href={"mailto:" + email}>Send an email <span>↗</span></a><a href={resume}>Download résumé <span>↓</span></a></div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.wordmark} href="#top"><Image src="/icon.png" alt="" width={36} height={36} />Karthikeyan Prabhu</a><small>© {new Date().getFullYear()} Karthikeyan Prabhu</small>
        <div><a href={linkedIn}>LinkedIn</a><a href="/about">Full profile</a><a className={styles.top} href="#top" aria-label="Back to top">↑</a></div>
      </footer>
      <Script src="/assets/swarm/init.js" strategy="afterInteractive" />
    </div>
  );
}
