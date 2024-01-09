import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function People() {
  const [people, setPeople] = useState([]);
  const [filterdPeople, setFilterdPeople] = useState([]);

  useEffect(() => {
    fetch("https://65814cf53dfdd1b11c42e639.mockapi.io/person").then((res) =>
      res.json().then((data) => {
        setPeople(data);
        setFilterdPeople(data);
      })
    );
  }, []);

  const filterPeople = (filter) =>{
    let filterd = people.filter(person => person.name.includes(filter));
    setFilterdPeople(filterd);
  }

  return (
    <div className="p-8">
      <h1>People</h1>
      <div className="border">
        <input
          className="border p-4"
          type="text"
          placeholder="Search"
          onChange={(el) => {
            console.log(el.target.value);
            filterPeople(el.target.value);
          }}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {filterdPeople.map((person) => {
          return (
            <Card
              name={person.name}
              title={person.jobtitle}
              imageUri={person.avatar}
            />
          );
        })}
      </div>
    </div>
  );
}
