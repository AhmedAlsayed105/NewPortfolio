"use client";
import React from "react";
import { NavItme, PropNavLink } from "../Types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: NavItme = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export default function NavLink({ containerStyles }: PropNavLink) {
  const pathName = usePathname();

  return (
    <ul className={containerStyles}>
      {links.map((itme) => {
        // is Active
        const isActive = pathName === itme.path;
        // calculate the number leanght
        const chartLength = itme.name.length;
        // line width
        const lineWidth =
          chartLength > 5 ? "after:w-[120px]" : "after:w-[90px]";
        return (
          <li key={itme.name}>
            <Link
              className={`relative text-lg text-white uppercase
              ${
                isActive &&
                `after:content-[''] after:block ${lineWidth} after:absolute after:left-0 after:top-1/2  after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0`
              }
              `}
              href={itme.path}
            >
              <span className="relative z-[10]">{itme.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
