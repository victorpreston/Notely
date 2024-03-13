"use client";

import { cn } from "@/lib/utils";
import { CreditCard, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems = [
    { name: "Home", href: "/dashboard", icon: Home},
    { name: "Settings", href: "/dashboard/settings", icon: Settings},
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard},
    
  ];
export function DashboardNav() {
    const pathname = usePathname();
    console.log(pathname);
    return (
      <nav className="grid items-start gap-2">
        {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
                <span className={cn(
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href ? "bg-accent" : "bg-transparent"
                )}>
                    <item.icon className="mr-2 h-4 w-4 text-primary" />
                    <span>{item.name}</span>
                </span>
            </Link>
        ))}
      </nav>
    );
}