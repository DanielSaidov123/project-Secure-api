import { useState } from "react";
import { registerApi } from "../api/fatch.js";
import { NavLink, useNavigate } from "react-router";
export const HomeRgister = () => {
  const [inputEmail, setInputEmaile] = useState("");
  const [inputPasswors, setInputPassword] = useState("");
 const navigate = useNavigate();
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
      const token = await registerApi(regi);

      localStorage.setItem("token", token.data.token);

      if (token.status >= 200 && token.status < 300) {
        navigate("/notes");
      } else {
         alert("התחברות נכשלה נסה שוב")
      }
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
        <label htmlFor="email">Emile</label>
        <input type="email" id="email" onChange={onchengeEmaile} />
        <label htmlFor="password">Passeord</label>
        <input type="password" id="password" onChange={onchengePassword} />
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};
