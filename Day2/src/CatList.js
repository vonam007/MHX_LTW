import React from "react";
import Catitem from "./CatItem.js";

const Catlist = ({ cats }) => {
  return (
    <section id="cat_card_contain">
      <h2 class="cat_card_contain title_name">List of Cats</h2>
      <ul id="cat-list" className="cat-list">
        {cats.map((cat, index) => (
          <Catitem key={index} cat={cat} />
        ))}
      </ul>
    </section>
  );
};

export default Catlist;
