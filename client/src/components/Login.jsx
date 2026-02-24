import { loginApi } from "../api/fatch.js";
import { useState } from "react";
import { Link, NavLink } from "react-router";

export const Login = () => {
  const [inputEmail, setInputEmaile] = useState("");
  const [inputPasswors, setInputPassword] = useState("");

  function onchengeEmaile(e) {
    e.preventDefault();
    setInputEmaile(e.target.value);
  }

  function onchengePassword(e) {
    e.preventDefault();
    setInputPassword(e.target.value);
  }
  async function onsubmit(e) {
    e.preventDefault();
    try {
      const regi = {
        email: inputEmail,
        password: inputPasswors,
      };
      const token = await loginApi(regi);
      localStorage.setItem("token", token.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="divform">
      <div className="divlinks">
        <div className="buten">
      
          <NavLink to="/login" >
            login
          </NavLink>
        </div>
        <div className="buten">
          <NavLink to="/" >
            register
          </NavLink>
        </div>
      </div>
      <form className="formRegister" onSubmit={onsubmit}>
        <label htmlFor="email">Emile</label>
        <input type="email" id="email" onChange={onchengeEmaile} />
        <label htmlFor="password">Passeord</label>
        <input type="password" id="password" onChange={onchengePassword} />
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};
