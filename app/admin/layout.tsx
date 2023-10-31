"use client";
import { auth } from "@/firebase";
import Header from "./Header";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "./LoginPage";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="w-full font-coco relative z-[9999] bg-white">
      {user ? (
        <>
          <Header /> {children}
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}
