import Image from "next/image";
import { ThemeToggle } from "./components/Themetoggle";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/dashboard");
  }
  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                Sort your notes by category, date, or title.
              </span>
            </span>
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight lg:text-6xl">
              Create Your Notes 
            </h1>
            <p className="mx-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed ut purus neque. Phasellus sit amet ante ut velit aliquet tincidunt. 
            Donec feugiat eros vel nisi sagittis
            </p>
          </div>
          <div className="flex justify-center max-w-sm mx-auto mt-10 space-x-4">
          <RegisterLink>
              <Button size="lg" className="w-full">
                Get Started
              </Button>
            </RegisterLink>
          <Link href="https://github.com/victorpreston/Notely" passHref>
            <Button size="lg" className="w-full flex items-center justify-center">
              <FaGithub className="mr-2" />
              Star
            </Button>
          </Link>
          </div>
        </div>
          
      </div>

    </section>
  );
}
