import React, { useEffect, useState } from 'react'

export default function script() {
    const [footballData, setfootballData] = useState();

    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/öbl1/2023").then((res) =>
          res.json().then((data) => {
            fillTable(data);
          })
        );
      }, []);
    
      const fillTable = (data) => {
        console.log(data);
        let table = "";
        let table2 = "";
        data.forEach((team, index) => {
          let position = index + 1;
          var output =
            '<h1>' +
            position +
            '</h1> <h2> ' +
            team.teamIconUrl +
            '</h2>' +
            '<h3>' +
            team.teamInfoId +
            '</h3>' +
            team.teamName +
            '<h4>' +
            team.points +
            "</h4>";
          if (index < 6) table += output;
          else if (index > 5) table2 += output;
        });
        document.getElementById("leaguetable").innerHTML = table;
        document.getElementById("leaguetable2").innerHTML = table2;
        console.log(table);
      };
      
      loadData();
  return (
    <div>script</div>
  )
}


/*
<div className=' w-[26rem] border-solid border border-black p-2.5 flex items-center bg-gray-400 justify-between flex-row'>
            <h1>1</h1>
            <h2><img
              className='w-8 h-8'
              src='RB.png'
              alt='Salzburglogo'/></h2>
            <h3>FC RedBull Salzburg</h3>
            <h4>41</h4>
            </div>
*/