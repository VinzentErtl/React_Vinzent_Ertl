import React from "react";
import Logo from "./Logo";
import ImageLogo from "./ImageLogo";

export default function TopMenu() {
  return (
    <div className="bg-neutral-500 p-4 flex justify-between items-center font-inter" >
      <Logo />
      <ul className="flex p-5 justify-between ">
        <li className="text-xl">Home</li>
        <li className="text-xl">Goal Getters</li>
      </ul>
      <ImageLogo />
    </div>
  );
}
