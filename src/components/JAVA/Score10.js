import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Position from "../Tabelle/Position";
import Position2 from "../Tabelle/Position2";
import Player10 from "../Tabelle/Player10";

export default function FullTable() {
  const [footballData, setfootballData] = useState([]);
 
  useEffect(() => {
    fetch("https://api.openligadb.de/getgoalgetters/öbl1/2023").then((res) =>
      res.json().then((data) => {
        setfootballData(data);
      })
    );
  }, []);
 console.log(footballData, "ewfobd");
  if(footballData == []){
    return (<div className="bg-blue-500">Hurensohn</div>)
  }

    return (
      <div className="border-collapse">
        <div class="">
          {footballData.map((data, index) => {
            console.log(data, "mifdfon");
            if (index < 10 ){
            return <Player10 key={index} index={index} goal={data} />
            }
          })}
        </div>
      </div>
    );
  }
  

/*
const fillTable = (data) => {
  console.log(data);
  let table = "";
  let table2 = "";
  data.forEach((team, index) => {
    let position = index + 1;
    var output =
      '<div class="rang"><div class="tablebegin"><div class="TeamRang">' +
      position +
      '</div><div class="TeamLogo"><img class="team_logo" src=" ' +
      team.teamIconUrl +
      '"/>' +
      '</div><div class="TeamName"><a href="team.html?teamid=' +
      team.teamInfoId +
      '">' +
      team.teamName +
      "</a>" +
      '</div></div><div class="punkte">' +
      team.points +
      "</div> </div>";
    if (index < 6) table += output;
    else if (index > 5) table2 += output;
  });
  document.getElementById("leaguetable").innerHTML = table;
  document.getElementById("leaguetable2").innerHTML = table2;
  console.log(table);
};

loadData();

*/