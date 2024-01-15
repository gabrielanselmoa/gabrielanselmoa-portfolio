import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// import favicon from "../../logo-black.ico"

export const metadata: Metadata = {
  title: "Gabriel Anselmo - Portfolio",
  description: "Version - 2.0",
  icons: {
    apple: "/logo-favicon.svg",
    icon: "/logo-favicon.svg",
    shortcut: "/logo-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
