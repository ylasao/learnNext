"use client";
import React from "react";
import { useState } from "react";
const Page = () => {
  const [error, setError] = useState(false);
  if (error) {
    throw new Error(`Oops something went wrong !`);
  }
  return (
    <>
      <div>
        <h1 className="text-[4rem] text-green-900 text-center">
          Products page
          <button
            onClick={() => setError(true)}
            className="p-3 bg-green-700 text-center"
          >
            Try again
          </button>
        </h1>
      </div>
    </>
  );
};

export default Page;
