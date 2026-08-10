import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Karthikeyan Prabhu — Senior Front-end Engineer",
  description:
    "Full profile of Karthikeyan Prabhu: Senior Front-end Developer at BrainCert. Skills, work experience, projects, education, certifications and contact details.",
  alternates: { canonical: "/about" },
};

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Redux",
  "Zustand",
  "Node.js",
  "MongoDB",
  "Figma",
  "Git",
  "React Native",
  "Angular",
  "Three.js",
  "Docker",
];

const experience = [
  {
    title: "Senior Front-end Developer",
    company: "BrainCert",
    date: "Nov 2024 – Present",
    points: [
      "Architected and developed high-performance web and mobile interfaces using the React stack.",
      "Engineered scalable component libraries and integrated complex RESTful architectures.",
      "Optimized rendering pipelines and state management strategies for enterprise-grade applications.",
    ],
  },
  {
    title: "UI Developer",
    company: "Elroi Software Solutions",
    date: "Nov 2022 – Oct 2024",
    points: [
      "Engineered interactive dashboards and enterprise CRM modules with React.js.",
      "Established and maintained rigorous design systems across multiple product lines.",
      "Managed frontend-to-backend data flows utilizing Redux and Zustand architectures.",
    ],
  },
  {
    title: "UI Developer",
    company: "KitKat Software Solutions",
    date: "Aug 2021 – Sep 2022",
    points: [
      "Transformed high-fidelity Figma prototypes into pixel-perfect technical implementations.",
      "Ensured cross-browser performance and localized UI consistency for global web applications.",
    ],
  },
];

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

const projects = [
  { name: "Dhaksha Travels", url: "https://maduraidhakshatoursandtravels.com/", stack: "React, MongoDB, Tailwind CSS", description: "Web-based platform for searching and booking car rentals from various providers." },
  { name: "AI Acme", url: "https://www.aiacme.ai/", stack: "React, REST API, SCSS", description: "Job search application with salary estimation and location-based job tracking." },
  { name: "Brugu IO", url: "https://brugu.io/", stack: "Next.js, Supabase, CSS", description: "Travel booking and destinations platform with curated recommendations." },
  { name: "Roboto 360", url: "https://www.roboto360.com/", stack: "React, MongoDB, Tailwind CSS", description: "Enterprise car rental and management dashboard with comprehensive tracking." },
  { name: "Yashini Homestays", url: "https://yashinihomestays.in/", stack: "React, MongoDB, Tailwind CSS", description: "Modern travel booking platform for homestays." },
  { name: "Blue Horse", url: "https://bluehorseindustry.com/", stack: "React, MongoDB, Tailwind CSS", description: "Web platform for industrial solutions and provider management." },
  { name: "AI Being", url: "https://ai-being.com/home/", stack: "React, MongoDB, Tailwind CSS", description: "AI-based platform for search and management with production-ready architecture." },
  { name: "Crypco Brugu", url: "https://crypco.brugu.io", stack: "React, MongoDB, Tailwind CSS", description: "Cryptocurrency management and search platform." },
  { name: "Yaal Homestay", url: "https://yaalhomestay.in/", stack: "React, MongoDB, Tailwind CSS", description: "Hospitality platform with professional booking workflows." },
];

const sideProjects = [
  { name: "Normie Agency", url: "https://agency-orpin-three.vercel.app/", stack: "React, MongoDB, Tailwind CSS", description: "Agency management platform for service-based business workflows." },
  { name: "Normie AI", url: "https://normieai.vercel.app/", stack: "React, AI, Tailwind CSS", description: "AI-integrated utility suite with automation and interactive tools." },
  { name: "Crygo App", url: "https://crygo-kk49.vercel.app/", stack: "React, Crypto APIs, Tailwind CSS", description: "Cryptocurrency tracking and analysis app with real-time reactive charts." },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-[#e8e8f0] bg-[#050816] min-h-screen">
      <article>
        <h1 className="text-4xl font-bold mb-2">Karthikeyan Prabhu</h1>
        <p className="text-lg text-[#aaa6c3] mb-8">
          Senior Front-end Developer / Front-end Engineer
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Summary</h2>
          <p className="leading-relaxed">
            Karthikeyan Prabhu is a Senior Front-end Developer currently working at BrainCert
            since November 2024. He has over four years of professional experience in UI
            engineering and design-driven development, building scalable, high-performance web
            and mobile applications. He specialises in the React ecosystem — React.js, Next.js,
            TypeScript and React Native — along with design systems, state management and
            RESTful API integration. He is based in India and is available for freelance
            projects and full-time opportunities.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Skills</h2>
          <p className="mb-3 leading-relaxed">
            Karthikeyan Prabhu&apos;s technical skills are: {skills.join(", ")}.
          </p>
          <ul className="list-disc ml-6 space-y-1">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="mt-3 leading-relaxed">
            Additional areas of expertise include UI engineering, design systems, component
            library architecture, responsive design, cross-browser compatibility, rendering
            performance optimisation and frontend-to-backend data flow management.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Work Experience</h2>
          {experience.map((job) => (
            <div key={`${job.company}-${job.date}`} className="mb-6">
              <h3 className="text-xl font-semibold">
                {job.title} — {job.company}
              </h3>
              <p className="text-[#aaa6c3] text-sm mb-2">{job.date}</p>
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
                <strong>{p.name}</strong> — {p.description} Built with {p.stack}.{" "}
                <a href={p.url} className="underline" target="_blank" rel="noopener noreferrer">
                  {p.url}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Side Projects</h2>
          <ul className="space-y-3">
            {sideProjects.map((p) => (
              <li key={p.name}>
                <strong>{p.name}</strong> — {p.description} Built with {p.stack}.{" "}
                <a href={p.url} className="underline" target="_blank" rel="noopener noreferrer">
                  {p.url}
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
                href="https://linkedin.com/in/karthikeyan-prabhu"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/karthikeyan-prabhu
              </a>
            </li>
            <li>
              Resume:{" "}
              <a href="/Resume_Karthikeyan-prabhu.pdf" className="underline">
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
    </main>
  );
}
