import React from "react";
import LoginForm from "../ui/login-form";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center md:h-screen">
      <h1>Auth App</h1>
      <LoginForm />
    </div>
  );
}
