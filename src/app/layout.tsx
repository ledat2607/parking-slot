"use client";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./utils/theme-provider";
import Loader from "@/app/utils/Loader";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Wait until the client-side is hydrated
  }, []);

  return (
    <html lang="en">
      <body
        className={`${popins.variable} ${josefin.variable} min-h-screen !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        {mounted ? (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        ) : (
          <Loader />
        )}
      </body>
    </html>
  );
}
