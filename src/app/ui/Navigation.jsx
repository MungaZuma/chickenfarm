import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const Navigation = () => {
  return (
    <div className="h-auto w-auto flex  justify-between py-2 px-5">
      <div className="flex gap-4 items-center w-auto bg-[#afcdedff] py-2 px-2 rounded-full">
        <div>
          <MagnifyingGlassIcon className="h-5 w-5" />
        </div>
        <div className="capitalize">search</div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="h-[30px] w-[30px] rounded-full bg-[#afcdedff] border-2 border-solid border-gray-800 "></div>
        <div>profile</div>
      </div>
    </div>
  );
};

export default Navigation;
