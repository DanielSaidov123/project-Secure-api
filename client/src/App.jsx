import { Route, Routes } from "react-router";
import "./App.css";
import { HomeRgister } from "./components/HomeRgister";
import { Nav } from "./components/Nav";
import { Login } from "./components/Login";
import { Notes } from "./components/Notes";

function App() {
  return (
    <>
        <Nav/>
      <Routes>
        <Route path="/" element={<HomeRgister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
