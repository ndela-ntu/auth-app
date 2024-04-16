import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import bcrypt from 'bcryptjs';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link
        href="/login"
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>Log in</span> <BiArrowFromLeft className="w-5 md:w-6" />
      </Link>
    </main>
  );
}
