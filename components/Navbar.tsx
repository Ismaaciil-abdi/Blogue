import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="flex items-center justify-between py-5">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-bold">Blogue</h1>
        </Link>

        {/* athor links */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-cyan-500 transition-color"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-cyan-500 transition-color"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </div>
      {user ? (
        <div className="flex items-center gap-4">
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: "secondary" })}>
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-6">
          <LoginLink className={buttonVariants()}>Login</LoginLink>
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign in
          </RegisterLink>
        </div>
      )}
    </nav>
  );
}
