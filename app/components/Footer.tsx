import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ThemeToggle } from "./Themetoggle";
import { NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="md:py- relative z-10 w-full border-t py-4">
      <div className="container flex items-center justify-between gap-4 md:h-14 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
        <span className="text-primary">
          <NotebookPen size={28} className="mr-2" />
        </span>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Developed by{" "}
            <Link
              href="https://twitter.com/_victorpreston"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
                Victor Preston 
            </Link>
          </p>
        </div>
        <div className=" flex space-x-5">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}