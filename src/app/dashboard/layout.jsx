import React from "react";
import Link from "next/link";
import Links from "../components/links";
const Layout = ({ children }) => {
  return (
    <>
      <Links />
      {children}
    </>
  );
};

export default Layout;
