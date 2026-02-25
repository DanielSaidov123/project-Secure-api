import React, { useState } from "react";
import { NavLink } from "react-router";
import { createNotes } from "../api/fatch.js";

export const Notes = () => {
  const [inputTitle, setInputTitel] = useState("");
  const [inputContet, setInputContet] = useState("");

  function onchengeTitle(e) {
    e.preventDefault();
    setInputTitel(e.target.value);
  }

  function onchengeContet(e) {
    e.preventDefault();
    setInputContet(e.target.value);
  }
  async function onsubmit(e) {
    e.preventDefault();
    try {
      const regi = {
        title: inputTitle,
        content: inputContet,
      };
      const localtoken = localStorage.getItem("token");
      const text = await createNotes(regi, localtoken);
      console.log(text)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="divform">
      <div className="divlinks">
        <div className="buten">
          <NavLink to="/login">login</NavLink>
        </div>
        <div className="buten">
          <NavLink to="/">register</NavLink>
        </div>
      </div>

      <form className="formRegister" onSubmit={onsubmit}>
        <label htmlFor="text">title</label>
        <input type="text" id="text" onChange={onchengeTitle} />

        <label htmlFor="Content">Content</label>
        <textarea type="Content" id="Content" onChange={onchengeContet} />

        <input type="submit" className="submit" />
      </form>
    </div>
  );
};
