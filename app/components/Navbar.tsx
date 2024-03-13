import Link from "next/link";
import { ThemeToggle } from "./Themetoggle";
import { Button } from "@/components/ui/button";
import {
    RegisterLink,
    LoginLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";


export async function Navbar() {
    const { isAuthenticated } = getKindeServerSession();
    return (
        <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className="container flex items-centre justify-between">
                <Link href="/">
                    <h1 className="font-bold text-3xl">
                        Notel<span className="text-primary">y</span>
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-5">
                <ThemeToggle />
                {(await isAuthenticated()) ? (
                    <UserNav />
                ) : (
                    <div className="flex items-center gap-x-5">
                    <LoginLink>
                    <Button> SignIn</Button>
                    </LoginLink>
                    
                    <RegisterLink>
                    <Button className="mr-3" variant="secondary"> SignUp</Button>
                    </RegisterLink>
                </div>
                )}  
            </div>

        </nav>
    )
}
