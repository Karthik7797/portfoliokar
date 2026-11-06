import type { Metadata } from "next";
import { experience, headline, linkedIn, profileSummary, skillGroups } from "@/lib/portfolio-profile";
import "./globals.css";

const SITE_URL = "https://portfoliokar-psi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Karthikeyan Prabhu — ${headline}`,
    template: "%s | Karthikeyan Prabhu",
  },
  description: profileSummary,
  keywords: [
    "Karthikeyan Prabhu",
    "SharePoint & Power Platform Developer",
    "Front-end Engineer",
    "React Developer",
    "Next.js Developer",
    "UI Developer",
    "SPFx",
    "Power Apps",
    "Power Automate",
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
    title: `Karthikeyan Prabhu — ${headline}`,
    description: profileSummary,
    firstName: "Karthikeyan",
    lastName: "Prabhu",
  },
  twitter: {
    card: "summary_large_image",
    title: `Karthikeyan Prabhu — ${headline}`,
    description: profileSummary,
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
  jobTitle: experience[0].title,
  description: profileSummary,
  url: SITE_URL,
  email: "mailto:karthikeyanprabhu8@gmail.com",
  telephone: "+91-63802-17451",
  worksFor: {
    "@type": "Organization",
    name: experience[0].company,
  },
  sameAs: [linkedIn],
  knowsAbout: skillGroups.flatMap(({ skills }) => skills),
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
  hasOccupation: experience.map(({ title, company, startDate, endDate }) => ({
    "@type": "Occupation",
    name: title,
    occupationLocation: { "@type": "Organization", name: company },
    startDate,
    endDate,
  })),
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
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
