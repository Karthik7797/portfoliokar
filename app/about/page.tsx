import type { Metadata } from "next";
import Link from "next/link";
import { headline, profileSummary, experience, skillGroups, linkedIn, resume } from "@/lib/portfolio-profile";
import { projects, ownProjects } from "@/lib/portfolio-projects";
import styles from "../portfolio.module.css";

export const metadata: Metadata = {
  title: "About",
  description: profileSummary,
  alternates: { canonical: "/about" },
};

const education = [
  {
    school: "De Montfort University, Singapore",
    degree: "Bachelor of Engineering (B.E) – Mechatronics Engineering",
    year: "2015 – 2019",
  },
  {
    school: "Auston Institute of Technology, Singapore",
    degree: "Diploma – Electronics Engineering",
    year: "2016 – 2017",
  },
  {
    school: "Cornerstone International College, Chennai, India",
    degree: "Diploma – Automobile Engineering",
    year: "2015 – 2016",
  },
];

const certifications = [
  "IBM Full Stack Development Certification — MERN stack covering React.js, Node.js, Express.js, MongoDB and Tailwind CSS.",
  "freeCodeCamp Responsive Web Design Certification — HTML, CSS, Bootstrap and responsive layout principles.",
  "HackerRank JavaScript Certification — core JavaScript concepts, problem solving and language fundamentals.",
  "Best Performer Award (Elroi Software Solutions) — recognised for outstanding contribution to CRM module development.",
];

export default function AboutPage() {
  return (
    <main className={styles.site}>
      <div className={styles.profile}>
      <article>
        <Link href="/" className={styles.textLink}>← Back to portfolio</Link>
        <h1 className="text-4xl font-bold mb-2">Karthikeyan Prabhu</h1>
        <p className="text-lg text-txt-sub mb-8">
          {headline}
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Summary</h2>
          <p className="leading-relaxed">
            {profileSummary}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Skills</h2>
          <dl className="space-y-3">
            {skillGroups.map(({ name, skills }) => (
              <div key={name}>
                <dt className="font-semibold">{name}</dt>
                <dd>{skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Work Experience</h2>
          {experience.map((job) => (
            <div key={`${job.company}-${job.date}`} className="mb-6">
              <h3 className="text-xl font-semibold">
                {job.title} — {job.company}
              </h3>
              <p className="text-txt-sub text-sm mb-2">{job.date}</p>
              <ul className="list-disc ml-6 space-y-1">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Professional Projects</h2>
          <ul className="space-y-3">
            {projects.map((p) => (
              <li key={p.name}>
                <strong>{p.name}</strong> — {p.description} {p.tags.join(" · ")}.{" "}
                <a href={p.link} className="underline" target="_blank" rel="noopener noreferrer">
                  {p.link}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Side Projects</h2>
          <ul className="space-y-3">
            {ownProjects.map((p) => (
              <li key={p.name}>
                <strong>{p.name}</strong> — {p.description} {p.tags.join(" · ")}.{" "}
                <a href={p.link} className="underline" target="_blank" rel="noopener noreferrer">
                  {p.link}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Education</h2>
          <ul className="space-y-2">
            {education.map((e) => (
              <li key={e.school}>
                <strong>{e.school}</strong> — {e.degree} ({e.year})
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Certifications and Achievements</h2>
          <ul className="list-disc ml-6 space-y-1">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Contact</h2>
          <ul className="space-y-1">
            <li>
              Email:{" "}
              <a href="mailto:karthikeyanprabhu8@gmail.com" className="underline">
                karthikeyanprabhu8@gmail.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:+916380217451" className="underline">+91 63802 17451</a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href={linkedIn}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
            </li>
            <li>
              Resume:{" "}
              <a href={resume} className="underline">
                Download PDF
              </a>
            </li>
          </ul>
        </section>

        <p>
          <Link href="/" className="underline">
            Back to the main portfolio
          </Link>
        </p>
      </article>
      </div>
    </main>
  );
}
