import React from "react";
import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/settings">Setting</Link>
          </li>
          <li>
            <Link href="/dashboard/products">Product</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default Layout;
