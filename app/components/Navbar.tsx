import Link from "next/link";
import { ThemeToggle } from "./Themetoggle";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";
import { NotebookPen } from "lucide-react";

export async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="border-b bg-background h-[10vh] flex items-center flex-wrap: wrap sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h2 className="font-bold text-3xl flex items-center">
          <span className="text-primary">
          <NotebookPen size={28} className="mr-2" />
          </span>
            Notel<span className="text-primary">y</span>
          </h2>
        </Link>

        <div className="flex items-center gap-x-2">
          <ThemeToggle />

          {(await isAuthenticated()) ? (
            <UserNav
              email={user?.email as string}
              image={user?.picture as string}
              name={user?.given_name as string}
            />
          ) : (
            <div className="flex items-center gap-x-2">
              <LoginLink>
                <Button>SignIn</Button>
              </LoginLink>

              <RegisterLink>
                <Button variant="secondary">SignUp</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}