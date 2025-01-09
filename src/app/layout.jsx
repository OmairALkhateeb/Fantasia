"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigations/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const sec_section = document.getElementById("sec_section-section");
      const rect = sec_section.getBoundingClientRect();
      if (rect.top <= 0) {
        setNavbarColor("#000112");
      } else {
        setNavbarColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        style={{
          fontFamily:
            "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <Navbar navbarColor={navbarColor} />
        <main>{children}</main>
      </body>
    </html>
  );
}
