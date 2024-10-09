import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Header from "./components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "tran van y",
  description: "Generated by create next app",
};
import { Suspense } from "react";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Suspense fallback={<i>Loading header .....</i>}>
            <Header />
          </Suspense>
        </header>
        {children}
      </body>
    </html>
  );
}
