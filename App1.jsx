import { useEffect, useMemo, useState } from "react";

function App3() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState("");

  const userType = {
    underAge: age < 18 ? true : false,
    citizen: country === "Pak" ? true : false,
  };

  
  useEffect(() => {
    console.log("user type has changed!");
  }, [userType]);

  console.log("component rendered!");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} placeholder="name" />
      <input
        onChange={(e) => setAge(e.target.value)}
        placeholder="age"
        type="number"
      />
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="Pak">Pak</option>
        <option value="Ind">Ind</option>
        <option value="Uk">Uk</option>
        <option value="Usa">Usa</option>
      </select>
    </div>
  );
}

export default App3;
