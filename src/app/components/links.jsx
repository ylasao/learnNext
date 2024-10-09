"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Links = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="w-[200px] h-[100vh] fixed bg-white ml-4 rounded-md text-green-700">
        <ul>
          <li className="p-4">
            <Link
              className={`link ${
                pathname === "/dashboard/settings" ? "active" : ""
              }`}
              href="/dashboard/settings"
            >
              Setting
            </Link>
          </li>
          <li className="p-4">
            <Link
              className={`link ${
                pathname === "/dashboard/products" ? "active" : ""
              }`}
              href="/dashboard/products"
            >
              Product
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Links;
