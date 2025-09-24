import "./App.css";
import Header from "./modules/drag-and-drop/header";
import Main from "./modules/drag-and-drop/main";
import Bottom from "./modules/drag-and-drop/bottom";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Basith",
      age: 20,
      city: "Chennai",
    },
    {
      name: "Bazeer",
      age: 23,
      city: "Chennai",
    },
    {
      name: "Beer",
      age: 25,
      city: "Chennai",
    },
    {
      name: "Karan",
      age: 20,
      city: "Kodambakkam",
    },
    {
      name: "Arun",
      age: 27,
      city: "Thanjavure",
    },
    {
      name: "Ajith",
      age: 29,
      city: "Thanjavure",
    },
    {
      name: "Khan",
      age: 30,
      city: "Trichy",
    },
  ]);
  const [filters, setFilters] = useState({});

  // menu constructions
  const { names, ages, cities } = users.reduce(
    (list, user) => {
      list.names.add(user.name);
      list.ages.add(user.age);
      list.cities.add(user.city);
      return list;
    },
    {
      names: new Set(),
      ages: new Set(),
      cities: new Set(),
    }
  );
  const nameList = [...names];
  const ageList = [...ages];
  const cityList = [...cities];

  return (
    <div className="app-container">
      <Header
        nameList={nameList}
        ageList={ageList}
        cityList={cityList}
        setFilters={setFilters}
        filters={filters}
      />
      <Main
        users={users.filter((user) => {
          return (
            (!filters.name || user.name === filters.name) &&
            (!filters.age || user.age === filters.age) &&
            (!filters.city || user.city === filters.city)
          );
        })}
      />
      <Bottom filters={filters} />
    </div>
  );
}

export default App;
