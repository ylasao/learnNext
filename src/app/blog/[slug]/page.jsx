import React from "react";

const Page = ({ params }) => {
  return (
    <>
      <h1 className="text-center text-[5rem] text-green-700">
        Hello {params.slug}
      </h1>
    </>
  );
};

export default Page;
