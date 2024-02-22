import React from "react";
import Logo from "./Logo";
import ImageLogo from "./ImageLogo";
import Navigation from "./Navigation";

export default function TopMenu() {
  return (
    <div className="gap-2.5 bg-neutral-500 p-5 flex justify-between items-center font-inter " >
      <Logo />
    <Navigation/>
      <ImageLogo />
    </div>
  );
}
