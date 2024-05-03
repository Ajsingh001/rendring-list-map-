//When rendering lists in React, it's crucial to provide a unique key prop for each item. The key helps React identify which items have changed, are added, or are removed efficiently. This aids in performance optimization and prevents unexpected behavior when the list changes.

import React, { useState } from "react";

export default function List() {
  const [count, setcount] = useState(0);

  function incre() {
    if (count < 10) {
      setcount(count + 1);
    } else {
      return count;
    }
  }
  function dec() {
    if (count > 0) {
      setcount(count - 1);
    } else {
      return count == 0;
    }
  }
  const [isItem, setSetitemz] = useState(false); // Correctly declare state variable and setter function

  let myarr = [
    { name: "Ajsingh", id: 1 },
    { name: "Sartaj", id: 2 },
    { name: "Harjot", id: 3 },
    { name: "Bangali(Akash)", id: 4 },
    { name: "Chumme(Gupreet)", id: 5 },
    { name: "KAKU", id: 6 },
    { name: "DAANA(aman)", id: 7 },
  ];

  let myarr2 = ["one", "two", "three", "four", "five"];

  function listgen() {
    console.log("this is working");
    setSetitemz(true); // Use setSetitemz to update the state
  }

  return (
    <>
      <h1>List of hoomies</h1>

      <ul id="ourul">
        {/* rendering list */}
        {myarr.map((i) => {
          return (
            <li key={i.id}>
              {i.name} ands {i.id}
            </li>
          );
        })}
      </ul>

      {isItem && (
        <ul>
          {myarr2.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      )}
      <h1>count {count}</h1>
      <button onClick={incre}>plus</button>
      <button onClick={dec}>minus</button>

      <button onClick={listgen}>new-gen</button>
    </>
  );
}
