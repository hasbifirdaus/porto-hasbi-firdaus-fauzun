import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  variable: "--font-ovo",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hasbi Firdaus Fauzun - Full Stack Web Developer Portfolio",
  description:
    "Discover the professional portfolio of Hasbi Firdaus Fauzun, a full stack web developer specializing in building responsive and high-performance websites using Next.js, React, and Tailwind CSS.",
  icons: {
    icon: "/favicon-hasbi.png",
  },

  keywords: [
    "Hasbi Firdaus Fauzun",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Portfolio",
    "Tailwind CSS",
    "React Developer",
    "Frontend Developer",
    "Backend Developer",
    "Indonesia Developer",
  ],
  authors: [
    { name: "Hasbi Firdaus Fauzun", url: "https://your-portfolio-url.com" },
  ],
  creator: "Hasbi Firdaus Fauzun",
  openGraph: {
    title: "Hasbi Fauzun – Full Stack Web Developer Portfolio",
    description:
      "Explore Hasbi's latest web projects and experience in building modern websites using React, Next.js, and more.",
    url: "https://porto-hasbi-firdaus-fauzun.vercel.app",
    siteName: "Hasbi Firdaus",
    images: [
      {
        url: "/og-image.jpg", // <- Gambar yang muncul di saat dibagikan
        width: 1200,
        height: 630,
        alt: "Hasbi Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasbi Fauzun - Full Stack Web Developer",
    description:
      "Welcome to Hasbi's portfolio. See the latest full stack web projects built with modern technologies.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://porto-hasbi-firdaus-fauzun.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-[var(--dark-theme)] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
