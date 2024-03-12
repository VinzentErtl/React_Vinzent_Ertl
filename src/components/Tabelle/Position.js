import React from "react";
 
export default function Position({ index, team }) {

  console.log("team", team);
  return (
    <div className="w-[26rem] border-solid border-[0.1rem] border-black p-2 my-2 flex flex-row content-between hover:bg-white items-center bg-[#D3D3D3] grid grid-cols-[40px_40px_auto_40px]">
      <div className="w-1/10 pl-2 ">{index + 1}</div>
      <div className="w-5">
        <img src={team.teamIconUrl} />
      </div>
      <div className="hidden sm:block">{team.teamName}</div>
      <div className="">{team.points}</div>
    </div>
  );
}
 