import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gadi Satwika - Full Stack AI Engineer",
  description: "Full Stack Developer specializing in the MERN stack and AI integrations. 3rd-year CSE student at RGUKT RK Valley with a 9.89 GPA, currently interning at Smatr. Building scalable systemic solutions.",
  keywords: [
    "Gadi Satwika",
    "Satwi",
    "Full Stack Developer",
    "MERN Stack Engineer",
    "AI Integrator",
    "RGUKT RK Valley",
    "Computer Science Engineer",
    "Smatr Intern",
    "React Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Gadi Satwika" }],
  creator: "Gadi Satwika",
  publisher: "Gadi Satwika",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://satwika-gadi.vercel.app", // Replace with your actual Vercel URL later
    title: "Gadi Satwika - Full Stack AI Engineer",
    description: "MERN Stack Specialist & AI Integrator. Explore my projects including QR-Flow and Campus Canteen Connect.",
    siteName: "Gadi Satwika Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gadi Satwika - Full Stack AI Engineer",
    description: "Building the next generation of intelligent web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://satwika-gadi.vercel.app" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
