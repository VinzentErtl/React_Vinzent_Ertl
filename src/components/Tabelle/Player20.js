import React from "react";
 
export default function Player20({ goal, index }) {

  return (
    <div className="w-[26rem] border-solid border-[0.1rem] grid-cols-[1px_75px_auto] gap-36 border-black p-2 my-2 flex flex-row content-between items-center hover:bg-white bg-[#D3D3D3] grid grid-cols-[40px_40px_auto_40px]">
      <div className="w-1/10 pl-2 ">{index + 1}</div>
      <div className="hidden sm:block w-max">{goal.goalGetterName}</div>
      <div className="">{goal.goalCount}</div>
    </div>
  );
}
 