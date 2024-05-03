import { useState } from "react";
import { sculptureList } from "./api-data";
import Oneseven from "./dataone";

export default function Datarender() {
  const [index, setindex] = useState(0);
  const scrs = sculptureList[index];

  function Next() {
    setindex(index + 1);
  }
  function prev() {
    setindex(index - 1);
  }
  return (
    <>
      <img src={scrs.url} alt={scrs.alt} width="200px" length="200px" />
      <br />
      <Oneseven
        username={"ajsingh"}
        classname={"commerce"}
        schoolname={"Kv1 patiala"}
      />
      <Oneseven
        username={"SARTAJ"}
        classname={"commerce"}
        schoolname={"Kv1 patiala"}
      />
      <button onClick={prev}>prev</button>
      <button onClick={Next}>Next</button>
    </>
  );
}
