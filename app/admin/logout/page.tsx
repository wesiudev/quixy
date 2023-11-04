"use client";

import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    signOut(auth).then(() => (window.location.href = "/admin"));
  }, []);
  return <div></div>;
}
