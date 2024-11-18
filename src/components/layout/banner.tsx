"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";

function Banner() {
  const { theme } = useTheme();
  return (
    <div
      className={`*:w-full mx-auto text-white dark:bg-gray-800 dark:text-gray-100 
                   ${
                     theme === "light"
                       ? "gradient-background-light"
                       : "gradient-background-dark"
                   }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        <p className="text-2xl font-bold tracking-tight sm:text-4xl">
          <Link href={"/"}>Parking slot</Link>
        </p>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Banner;
