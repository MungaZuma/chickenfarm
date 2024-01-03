import Image from "next/image";
import React from "react";

const User = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <Image src="/public/vercel.svg" alt="User" width={50} height={50} />
      </div>
      <div className="flex-col">
        <p className="font-bold">David Munga</p>
        <p className="font-light">Administartor</p>
      </div>
      
    </div>
  );
};

export default User;
