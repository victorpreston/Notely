import Link from "next/link";
import { ThemeToggle } from "./Themetoggle";
import { Button } from "@/components/ui/button";
import {
    RegisterLink,
    LoginLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


export async function Navbar() {
    const { isAuthenticated } = getKindeServerSession();
    return (
        <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className="container flex items-centre justify-between">
                <Link href="/">
                    <h1 className="font-bold text-3xl">
                        Notely
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-5">
                <ThemeToggle />
                {(await isAuthenticated()) ? (
                    <LogoutLink>
                        <Button className="mr-3" >Log Out</Button>
                    </LogoutLink>
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
