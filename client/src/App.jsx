import { Route, Routes } from "react-router";
import "./App.css";
import { HomeRgister } from "./components/HomeRgister";
import { Nav } from "./components/Nav";
import { Login } from "./components/Login";

function App() {
  return (
    <>
        <Nav/>
      <Routes>
        <Route path="/" element={<HomeRgister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<HomeRgister />} />
      </Routes>
    </>
  );
}

export default App;
