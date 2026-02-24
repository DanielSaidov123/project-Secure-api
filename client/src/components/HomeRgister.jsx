import { useState } from "react";
import { registerApi } from "../api/fatch.js";

export const HomeRgister = () => {
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
        password : inputPasswors
      };
      const token = await registerApi(regi);
       localStorage.setItem("token",token.data.token)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="divform">
      <div className="buten">
        <button>login</button>
        <button>register</button>
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
