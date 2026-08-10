import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://portfoliokar-psi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Karthikeyan Prabhu — Senior Front-end Engineer",
    template: "%s | Karthikeyan Prabhu",
  },
  description:
    "Karthikeyan Prabhu is a Senior Front-end Developer at BrainCert with 4+ years of experience building scalable, high-performance web and mobile applications. Skilled in React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux, Node.js, MongoDB, React Native, Angular, Three.js, Figma, Git and Docker.",
  keywords: [
    "Karthikeyan Prabhu",
    "Senior Front-end Developer",
    "Front-end Engineer",
    "React Developer",
    "Next.js Developer",
    "UI Developer",
    "BrainCert",
    "React Native",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Karthikeyan Prabhu", url: SITE_URL }],
  creator: "Karthikeyan Prabhu",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Karthikeyan Prabhu — Portfolio",
    title: "Karthikeyan Prabhu — Senior Front-end Engineer",
    description:
      "Senior Front-end Developer at BrainCert. React.js, Next.js, TypeScript, React Native. 4+ years building scalable, high-performance web and mobile applications.",
    firstName: "Karthikeyan",
    lastName: "Prabhu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthikeyan Prabhu — Senior Front-end Engineer",
    description:
      "Senior Front-end Developer at BrainCert. React.js, Next.js, TypeScript, React Native.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Karthikeyan Prabhu",
  givenName: "Karthikeyan",
  familyName: "Prabhu",
  jobTitle: "Senior Front-end Developer",
  description:
    "Senior Front-end Developer specialising in UI engineering and design-driven development, building scalable, high-performance web and mobile applications.",
  url: SITE_URL,
  email: "mailto:karthikeyanprabhu8@gmail.com",
  telephone: "+91-63802-17451",
  worksFor: {
    "@type": "Organization",
    name: "BrainCert",
  },
  sameAs: ["https://linkedin.com/in/karthikeyan-prabhu"],
  knowsAbout: [
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
    "UI Engineering",
    "Design Systems",
    "RESTful APIs",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "De Montfort University, Singapore",
      description: "Bachelor of Engineering (B.E) – Mechatronics Engineering, 2015–2019",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Auston Institute of Technology, Singapore",
      description: "Diploma – Electronics Engineering, 2016–2017",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Cornerstone International College, Chennai, India",
      description: "Diploma – Automobile Engineering, 2015–2016",
    },
  ],
  hasCredential: [
    "IBM Full Stack Development Certification",
    "freeCodeCamp Responsive Web Design Certification",
    "HackerRank JavaScript Certification",
    "Best Performer Award (Elroi Software Solutions)",
  ],
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Senior Front-end Developer",
      occupationLocation: { "@type": "Organization", name: "BrainCert" },
      startDate: "2024-11",
    },
    {
      "@type": "Occupation",
      name: "UI Developer",
      occupationLocation: { "@type": "Organization", name: "Elroi Software Solutions" },
      startDate: "2022-11",
      endDate: "2024-10",
    },
    {
      "@type": "Occupation",
      name: "UI Developer",
      occupationLocation: { "@type": "Organization", name: "KitKat Software Solutions" },
      startDate: "2021-08",
      endDate: "2022-09",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Karthikeyan Prabhu — Portfolio",
  url: SITE_URL,
  about: { "@type": "Person", name: "Karthikeyan Prabhu" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
