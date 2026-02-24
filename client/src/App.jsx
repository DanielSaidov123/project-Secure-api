import { Route, Routes } from "react-router";
import "./App.css";
import { HomeRgister } from "./components/HomeRgister";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
        <Nav/>
      <Routes>
        <Route path="/" element={<HomeRgister />} />
        <Route path="/login" element={<HomeRgister />} />
        <Route path="/notes" element={<HomeRgister />} />
      </Routes>
    </>
  );
}

export default App;
