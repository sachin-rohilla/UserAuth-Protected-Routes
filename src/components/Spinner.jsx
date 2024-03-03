import React from "react";
import { PiSpinner } from "react-icons/pi";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <PiSpinner className="animate-spin text-2xl" />
    </div>
  );
};

export default Spinner;
