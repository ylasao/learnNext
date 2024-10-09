import React from "react";
import { redirect } from "next/navigation";
const Page = () => {
  const useAuth = true;
  if (!useAuth) {
    redirect("/dashboard");
  }
  return (
    <div>
      <h1 className="text-center text-[3rem] text-green-900">
        Please Check again!
      </h1>
    </div>
  );
};

export default Page;
