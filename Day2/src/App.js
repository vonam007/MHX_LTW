import "./styles.css";
import React, { useState } from "react";
import Header from "./Header";
import Catform from "./CatForm";
import Catlist from "./CatList";

export default function App() {
  const [cats, setCats] = useState([]);

  const handleCatSubmit = (name, stage, breed, gender, avatar) => {
    const newCat = {
      name,
      stage,
      breed,
      gender,
      avatar
    };

    setCats((prevCats) => [newCat, ...prevCats]);
  };

  return (
    <div className="App">
      <Header />
      <Catform handleCatSubmit={handleCatSubmit} />
      <Catlist cats={cats} />
    </div>
  );
}
