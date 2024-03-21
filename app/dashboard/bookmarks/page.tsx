import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Edit, File } from "lucide-react";
import { Card } from "@/components/ui/card";


export default async function DashboardPage() {
    return (
      <div className="grid items-start gap-y-8">
        <div className="flex items-center justify-between px-2">
          <div className="grid gap-1">
            <h1 className="text-3xl md:text-4xl">BookMarks</h1>
            <p className="text-lg text-muted-foreground">
              You will see your BookMarks
            </p>
          </div>
  
          <Button asChild>
            <Link href="/dashboard/new">BookMark Notes</Link>
          </Button>
        </div>
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <File className="w-10 h-10 text-primary" />
            </div>
  
            <h2 className="mt-6 text-xl font-semibold">
              You do not have any BookMarks
            </h2>
            <p className="mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground max-w-sm mx-auto">
              You currently dont have BookMarks. BookMark 
              your notes and see them here
            </p>
  
            <Button asChild>
              <Link href="/dashboard/new">Create BookMarks</Link>
            </Button>
          </div>
        </div>
    );
    }