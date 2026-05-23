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
  title: "Damarla Chandu - Full Stack and Cyber Security Engineer",
  description: "Full Stack Developer and Cyber Security Aspirant. Final-year CSE student at SRM University with a 7.6 GPA. Building scalable systemic solutions.",
  keywords: [
    "Damarla Chandu",
    "Chandu",
    "Full Stack Developer",
    "MERN Stack Engineer",
    "AI Integrator",
    "RGUKT RK Valley",
    "Computer Science Engineer",
    "Smatr Intern",
    "React Developer",
    "Next.js Portfolio",
    "Cyber Security Aspirant"
  ],
  authors: [{ name: "Damarla Chandu" }],
  creator: "Damarla Chandu",
  publisher: "Damarla Chandu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chandu-damarla.vercel.app", // Replace with your actual Vercel URL later
    title: "Gadi Satwika - Full Stack AI Engineer",
    description: "MERN Stack Specialist & AI Integrator. Explore my projects including QR-Flow and Campus Canteen Connect.",
    siteName: "Damarla Chandu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damarla Chandu - Full Stack and Cyber Engineer",
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
        <link rel="canonical" href="https://chandu-damarla.vercel.app" />
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
