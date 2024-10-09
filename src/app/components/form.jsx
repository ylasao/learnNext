"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Form = () => {
  const router = useRouter();
  const goBack = () => {
    history.back();
  };
  return (
    <>
      <form className="">
        <div className="group mt-3 block">
          <label className="font-bold text-[0.9rem]">Name</label>
          <input
            className="text-[0.9rem] text-black capitalize w-full mt-2 p-2 rounded-md outline-blue-900"
            placeholder="Enter name"
            type="text"
          />
        </div>
        <div className="group mt-3 block">
          <label className="font-bold text-[0.9rem]">Email</label>
          <input
            className="text-[0.9rem] text-black capitalize w-full mt-2 p-2 rounded-md outline-blue-900"
            placeholder="Enter email"
            type="email"
          />
        </div>
        <div className="group mt-3 block">
          <label className="font-bold text-[0.9rem]">Password</label>
          <input
            className="text-[0.9rem] text-black capitalize w-full mt-2 p-2 rounded-md outline-blue-900"
            placeholder="Enter password"
            type="password"
          />
        </div>
        <div className="submit">
          <button
            onClick={() => router.push("/protected")}
            type="button"
            className="bg-blue-600 w-full p-2 mt-3 rounded-md font-semibold"
          >
            Submit
          </button>
          <button className="mt-3" type="button" onClick={goBack}>
            Go back 🚗
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
