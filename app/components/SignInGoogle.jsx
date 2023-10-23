import React from "react";
import { Button } from "./ui/button";

const SignInGoogle = ({ children }) => {
  const handleClick = () => {
    console.log("Login with Google");
  };
  return (
    <Button className="w-full mb-3" onClick={() => handleClick()}>
      {children}
    </Button>
  );
};

export default SignInGoogle;
