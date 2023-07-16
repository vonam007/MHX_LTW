import React, { useState } from "react";

const Catform = ({ handleCatSubmit }) => {
  const [name, setName] = useState("");
  const [stage, setStage] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleCatSubmit(name, stage, breed, gender, avatar);

    setName("");
    setStage("");
    setBreed("");
    setGender("");
    setAvatar("");
  };

  return (
    <div>
      <form
        className="form_container form_contain"
        id="form_contain"
        onSubmit={handleSubmit}
      >
        <div className="">
          <h3 className="form_contain title_name">Create a Cat</h3>
        </div>
        <div className="form_contain avatar_contain">
          <label for="avatar" className="label">
            Avatar
          </label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            className="inputbox"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            required
            placeholder="Avatar here"
          ></input>
        </div>
        <div className="form_contain name_contain">
          <label for="name" className="label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="inputbox"
            placeholder="name here"
          ></input>
        </div>
        <div className="form_contain stage_contain">
          <label for="stage" className="label">
            Stage
          </label>
          <select
            name="stage"
            id="stage"
            className="stage inputbox"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            required
          >
            <option value="" selected>
              Select stage
            </option>
            <option value="kitten">Kitten</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
          </select>
        </div>
        <div className="form_contain breed_contain">
          <label for="breed" className="label">
            Breed
          </label>
          <input
            type="text"
            name="breed"
            id="breed"
            className="inputbox"
            placeholder="bread here"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          ></input>
        </div>
        <div className="form_contain gender_contain">
          <label htmlFor="gender" className="label">
            Gender
          </label>
          <div className="radio_contain">
            <input
              type="radio"
              className="gender"
              name="gender"
              value="Male"
              id="maleRadio"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label htmlFor="maleRadio" className="radio_label">
              Male
            </label>
          </div>
          <div className="radio_contain">
            <input
              type="radio"
              className="gender"
              name="gender"
              value="Female"
              id="femaleRadio"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label htmlFor="femaleRadio" className="radio_label">
              Female
            </label>
          </div>
        </div>
        <button className="submit create_btn" id="create_btn">
          Create
        </button>
      </form>
      <div className="cat_card_contain" id="cat_card_contain"></div>
    </div>
  );
};

export default Catform;
