import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Success = () => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col-reverse justify-center items-center">
        <p className="font-varela text-3xl text-center font-bold">
          Thank you for your kind donation!
        </p>
        <IoIosCheckmarkCircle className="text-9xl text-green-500" />
      </div>
    </>
  );
};

export default Success;
