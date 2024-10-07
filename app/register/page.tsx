import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { register } from "@/services/userService";

const Register = async () => {
  return (
    <div className="flex flex-col mx-auto mt-10 w-full max-w-80 max-h-full border-solid border-2 border-orange-200 border-spacing-10 rounded-md bg-zinc-100">
      <h2 className="pt-5 font-sans antialiased font-medium text-center">
        Welcome to next-js-auth
      </h2>
      <p className="font-sans antialiased font-normal text-center">
        Please provide all necessary information
      </p>

      <form action={register}>
        <div className="pt-5 m-2 justify-items-start">
          <Label className="text-sm">First Name</Label>
          <Input
            className="bg-white"
            id="firstname"
            placeholder="John Doe"
            type="text"
            name="firstname"
          />
        </div>

        <div className="pt-5 m-2 justify-items-start">
          <Label>Last Name</Label>
          <Input
            className="bg-white"
            id="lastname"
            placeholder="John Doe"
            type="text"
            name="lastname"
          />
        </div>

        <div className="pt-5 m-2 justify-items-start">
          <Label>Email</Label>
          <Input
            className="bg-white"
            id="email"
            placeholder="test@kpksoftwareinnovations.com"
            type="email"
            name="email"
          />
        </div>

        <div className="pt-5 m-2 justify-items-start">
          <Label>Password</Label>
          <Input
            className="bg-white"
            id="password"
            placeholder="***********"
            type="password"
            name="password"
          />
        </div>

        <div className="flex pt-5 justify-center">
          <Button> Sign up &rarr;</Button>
        </div>

        <p className="flex pl-5 pt-2  pb-5 text-sm text-neutral-600 max-w-sm dark:text-neutral-300">
           <span className="pr-2">Already have an account?</span><Link href="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
