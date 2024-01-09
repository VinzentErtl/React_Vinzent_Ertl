import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function People() {
const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://65814cf53dfdd1b11c42e639.mockapi.io/person").then((res) =>
      res.json().then((data) => {
       setPeople(data);
      })
    );
  }, []);

  return (
    <div>
      <h1>People</h1>
      <div className="w-40">
        {people.map(person => {
            return <Card name={person.name} title={person.jobtitle} imageUri={person.avatar} />
        })}
      </div>
    </div>
  );
}
