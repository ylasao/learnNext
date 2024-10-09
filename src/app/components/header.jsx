"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  return (
    <>
      <nav>
        <ul className="flex">
          <li className="p-4">
            <button
              className="p-3 bg-green-100 border rounded-md text-green-900 font-bold"
              type="button"
              onClick={() => router.push("/")}
            >
              Home Me 😋
            </button>
          </li>
          <li className="p-4">
            <button
              className="p-3 bg-green-100 border rounded-md text-green-900 font-bold"
              type="button"
              onClick={() => router.push("/dashboard")}
            >
              Dashboard 😍
            </button>
          </li>
          <li className="p-4">
            <button
              className="p-3 bg-green-100 border rounded-md text-green-900 font-bold"
              type="button"
              onClick={() => router.push("/login")}
            >
              Login 😍
            </button>
          </li>
          <li className="p-4">
            <button
              className="p-3 bg-green-100 border rounded-md text-green-900 font-bold"
              type="button"
              onClick={() => router.push("/infoMarketing")}
            >
              Marketing 😍
            </button>
          </li>
          <li className="p-4">
            <button
              className="p-3 bg-green-100 border rounded-md text-green-900 font-bold"
              type="button"
              onClick={() => router.push("/cartShop")}
            >
              Cart shop 😍
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
