import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const SignInGoogle = ({ children }) => {
  const handleClick = () => {
   signIn('google', {callbackUrl: "http://localhost:3000/admin"})
  };
  return (
    <Button className="w-full mb-3" onClick={() => handleClick()}>
      {children}
    </Button>
  );
};

export default SignInGoogle;
