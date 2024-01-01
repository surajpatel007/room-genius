"use client";
import { useUser,UserButton } from "@clerk/nextjs";
import Link from "next/link";

import React from "react";

function UserInf() {
  const { user } = useUser();
  return !user ? (
    <Link href={"/room"} className="bg-red-500 transition-all ease-in-out delay-5 hover:scale-110  rounded-lg text-black text-xl font-bold text-center px-5 py-3">
      Log in
    </Link>
  ) : (
    <UserButton/>
  );
}

export default UserInf;