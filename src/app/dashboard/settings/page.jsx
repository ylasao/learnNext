import React from "react";
import ClientSideRedirect from "../../components/content";
const Page = () => {
  return (
    <>
      <h1 className="text-center text-[5rem] text-green-700">
        Hello nested router
      </h1>
      <div className="content">
        <ClientSideRedirect />
      </div>
    </>
  );
};

export default Page;
