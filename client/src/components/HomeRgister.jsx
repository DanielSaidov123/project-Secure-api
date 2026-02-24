export const HomeRgister = () => {
  return (
    <div className="divform">
      <div className="buten">
        <button>login</button>
        <button>register</button>
      </div>
      <form className="formRegister">
        <label htmlFor="email">Emile</label>
        <input type="email" id="email" />
        <label htmlFor="password">Passeord</label>
        <input type="password" id="password" />
      </form>
    </div>
  );
};
