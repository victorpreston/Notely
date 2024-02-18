import Link from "next/link";
import { ThemeToggle } from "./Themetoggle";
import { Button } from "@/components/ui/button";


export function Navbar() {
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
                <div className="flex items-center gap-x-5">
                    <Button> SignIn</Button>
                    <Button className="mr-3" variant="secondary"> SignUp</Button>
                </div>
            </div>

        </nav>
    )
}
