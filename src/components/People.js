import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function People() {
const [people, setPeople] = useState([]);
const [color, setColor] = useState("green");

  useEffect(() => {
    fetch("https://65814cf53dfdd1b11c42e639.mockapi.io/person").then((res) =>
      res.json().then((data) => {
       setPeople(data);
      })
    );
  }, []);

  useEffect(()=>{
    alert("change")
  }, [color])

  return (
    <div>
      <h1>People</h1>
      <button onClick={()=>{setColor("orange")}}>Change Color</button>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {people.map(person => {
            return <Card name={person.name} title={person.jobtitle} imageUri={person.avatar} />
        })}
      </div>
    </div>
  );
}
