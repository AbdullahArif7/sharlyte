import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sharlyte Staffing Solutions | Premium Healthcare Staffing",
    template: "%s | Sharlyte Staffing Solutions"
  },
  description: "Luxury healthcare staffing agency providing human-centered healthcare recruitment. Connecting facilities with exceptional talent across Texas, Florida, and beyond.",
  keywords: ["Healthcare Staffing", "Nursing Jobs", "Staffing Solutions", "Texas Healthcare Recruitment", "Per Diem Nursing", "Travel Nursing"],
  icons: {
    icon: '/images/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans text-muted-gray bg-soft-ivory antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
