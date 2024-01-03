"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Menulink = ({ item }) => {
  const pathname = usePathname();

  const isActive = pathname === item.path;

  return (
    <Link
      href={item.path}
      className={`
        flex items-center gap-2 ml-5 mt-3 px-3 py-2 text-sm rounded-md
        ${isActive ? "bg-[#393c40ff]" : ""}  
      `}
    >
      <div>{item.icon}</div>
      <div>{item.title}</div>
    </Link>
  );
};

export default Menulink;
