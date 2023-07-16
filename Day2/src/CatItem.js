import React from "react";

const Catitem = ({ cat }) => {
  const { name, stage, breed, avatar, gender } = cat;

  return (
    <li className="cat_card">
      <img className="cat_img " src={avatar} alt="" />
      <div className="cat_card_info">
        <h3 className="cat_name">{name}</h3>
        <p className="cat_stage">{stage}</p>
        <p className="cat_breed">{breed}</p>
        <p className="cat_gender">{gender}</p>
      </div>
    </li>
  );
};

export default Catitem;
