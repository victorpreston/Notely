import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"; 
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { Button } from "@/components/ui/button";
import { Sub } from "@radix-ui/react-dropdown-menu";
import { SubmitButton } from "@/app/components/SubmitButtons";
  
  async function getData(userId: string) {
    noStore();
    const data = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        name: true,
        email: true,
        colorScheme: true,
      },
    });
  
    return data;
  }
  
  export default async function SettingPage() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const data = await getData(user?.id as string);
  
    async function postData(formData: FormData) {
      "use server";
  
      const name = formData.get("name") as string;
      const colorScheme = formData.get("color") as string;
  
      await prisma.user.update({
        where: {
          id: user?.id,
        },
        data: {
          name: name ?? undefined,
          colorScheme: colorScheme ?? undefined,
        },
      });
  
      revalidatePath("/", "layout");
    }
  
    return (
      <div className="grid items-start gap-8">
        <div className="flex items-center justify-between px-2">
          <div className="grid gap-1">
            <h1 className="text-3xl md:text-4xl">Settings</h1>
            <p className="text-lg text-muted-foreground">Your Profile settings</p>
          </div>
        </div>
  
        <Card>
          <form action={postData}>
            <CardHeader>
              <CardTitle>General Data</CardTitle>
              <CardDescription>
                Please provide general information about yourself. Please dont
                forget to save
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label>Your Name</Label>
                  <Input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    defaultValue={data?.name ?? undefined}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Your Email</Label>
                  <Input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    disabled
                    defaultValue={data?.email as string}
                  />
                </div>
  
                <div className="space-y-1">
                  <Label>Color Scheme</Label>
                  <Select name="color" defaultValue={data?.colorScheme}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Color</SelectLabel>
                        <SelectItem value="theme-green">
                          <span className="inline-block h-4 w-4 rounded-full bg-green-500 mr-2"></span>
                          Green
                        </SelectItem>
                        <SelectItem value="theme-blue">
                          <span className="inline-block h-4 w-4 rounded-full bg-blue-500 mr-2"></span>
                          Blue
                        </SelectItem>
                        <SelectItem value="theme-violet">
                          <span className="inline-block h-4 w-4 rounded-full bg-purple-500 mr-2"></span>
                          Violet
                        </SelectItem>
                        <SelectItem value="theme-yellow">
                          <span className="inline-block h-4 w-4 rounded-full bg-yellow-500 mr-2"></span>
                          Yellow
                        </SelectItem>
                        <SelectItem value="theme-orange">
                          <span className="inline-block h-4 w-4 rounded-full bg-orange-500 mr-2"></span>
                          Orange
                        </SelectItem>
                        <SelectItem value="theme-red">
                          <span className="inline-block h-4 w-4 rounded-full bg-red-500 mr-2"></span>
                          Red
                        </SelectItem>
                        <SelectItem value="theme-rose">
                          <span className="inline-block h-4 w-4 rounded-full bg-pink-500 mr-2"></span>
                          Rose
                        </SelectItem>
                        <SelectItem value="theme-gray">
                          <span className="inline-block h-4 w-4 rounded-full bg-gray-500 mr-2"></span>
                          Default
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
  
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>
      </div>
    );
  }