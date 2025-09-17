import React from "react";
import NavLink from "./NavLink";

export default function MainNavbar() {
  return (
    <nav className="w-[100%] flex justify-center  ">
      <NavLink containerStyles="  flex flex-col gap-6 justify-center p-5" />
    </nav>
  );
}
