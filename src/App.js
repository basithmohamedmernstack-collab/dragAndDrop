import "./App.css";
import Header from "./modules/drag-and-drop/header";
import Main from "./modules/drag-and-drop/main";
import Bottom from "./modules/drag-and-drop/bottom";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Basith",
      age: 20,
      city: "Chennai",
      isVerified: false,
      isDragged: false,
    },
    {
      id: 2,
      name: "Bazeer",
      age: 23,
      city: "Chennai",
      isVerified: false,
      isDragged: false,
    },
    {
      id: 3,
      name: "Beer",
      age: 25,
      city: "Chennai",
      isVerified: false,
      isDragged: false,
    },
    {
      id: 4,
      name: "Karan",
      age: 20,
      city: "Kodambakkam",
      isVerified: false,
      isDragged: false,
    },
    {
      id: 5,
      name: "Arun",
      age: 27,
      city: "Thanjavure",
      isVerified: false,
      isDragged: false,
    },
    {
      id: 6,
      name: "Ajith",
      age: 29,
      city: "Thanjavure",
      isVerified: false,
      isDragged: false,
    },
    {
      id: 7,
      name: "Khan",
      age: 30,
      city: "Trichy",
      isVerified: false,
      isDragged: false,
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

  // if user dragged to table
  const handleIfDraggedUser = (userId, isDragged, isVerified = false) => {
    setUsers((prev) =>
      prev.map((element) =>
        element.id === userId ? { ...element, isDragged, isVerified } : element
      )
    );
  };

  // if verified user from table
  const handleIfVerifiedUser = (userData) => {
    setUsers((prev) =>
      prev.map((element) =>
        element.id === userData.id ? { ...element, isVerified: true } : element
      )
    );
  };

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
            !user.isVerified &&
            (!filters.name || user.name === filters.name) &&
            (!filters.age || user.age === filters.age) &&
            (!filters.city || user.city === filters.city)
          );
        })}
        handleIfDraggedUser={handleIfDraggedUser}
      />
      <Bottom
        filters={filters}
        handleIfDraggedUser={handleIfDraggedUser}
        handleIfVerifiedUser={handleIfVerifiedUser}
      />
    </div>
  );
}

export default App;
