import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="flex items-center justify-between py-5">
      <div className="flex items-center gap-6">
        <Link href="/">
          <Image
            src="/BlogueLogo.svg"
            alt="BlogueLogo"
            width={50}
            height={50}
          />
        </Link>

        {/* athor links */}
        <div className="flex items-center gap-6">
          <Link
            className="text-lg font-bold hover:text-gray-500 transition-color"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-lg font-bold hover:text-gray-500 transition-color"
            href="/dashboard"
          >
            Articles
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
