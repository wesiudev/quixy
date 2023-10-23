"use client";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  function emailPasswordLogin() {
    if (email.includes("@") && email.includes(".")) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {})
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            setEmailError("Niepoprawne dane.");
            setTimeout(() => {
              setEmailError("");
            }, 7500);
          }
        });
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Wpisz poprawny login");
      setTimeout(() => {
        setEmailError("");
      }, 7500);
    }
    if (password.length < 6) {
      setPasswordError("Błędne hasło");
      setTimeout(() => {
        setPasswordError("");
      }, 7500);
    }
  }
  return (
    <div>
      <h1 className="text-center text-2xl py-12 bg-purple-400 text-white">
        Zaloguj do panelu administracyjnego
      </h1>
      <div className="flex flex-col w-full justify-center items-center bg-black">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="LOGIN"
          className={`p-4 text-2xl border-2 border-blue-400 my-3 focus:outline-none ${
            emailError !== "" && "border-2 border-red-600"
          }`}
        />
        {emailError !== "" && (
          <span className=" text-red-600">{emailError}</span>
        )}
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
          className={`p-4 text-2xl border-2 border-blue-400 my-3
         focus:bg-white focus:outline-none${
           passwordError !== "" && "border-2 border-red-600"
         }`}
        />{" "}
        {passwordError !== "" && (
          <span className=" text-red-600">{passwordError}</span>
        )}
        <button
          disabled={emailError !== "" || (passwordError !== "" && true)}
          onClick={() => emailPasswordLogin()}
          className="bg-blue-400 w-full p-4 text-white mt-3 disabled:cursor-not-allowed"
        >
          ZALOGUJ
        </button>
      </div>
    </div>
  );
}
