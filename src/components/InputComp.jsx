import React from "react";

const InputComp = ({ label, id, type, register, error }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm mt-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id)}
        className=" border px-4 py-1 rounded-lg "
      />
      <p className="text-red-600 text-sm">{error?.message}</p>
    </div>
  );
};

export default InputComp;
