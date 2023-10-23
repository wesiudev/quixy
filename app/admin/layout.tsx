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
    <div className="w-full font-coco">
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
