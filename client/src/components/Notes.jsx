import React from 'react'

export const Notes = () => {
  
  
  
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
        <label htmlFor="text">title</label>
        <input type="text" id="text" onChange={onchengeEmaile} />
        <label htmlFor="password">Passeord</label>
        <input type="password" id="password" onChange={onchengePassword} />
        <input type="submit" className="submit" />
      </form>
    </div>
  )
}
