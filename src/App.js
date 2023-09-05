import Users from "./Components/Users";
import Courses from "./Components/Courses";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Notfound } from "./Components/Notfound";
import { Nav } from "./Components/Nav";
export const users = [
  { name: "Hossein", age: 41, sex: "male" },
  { name: "Rahele", age: 39, sex: "female" },
  { name: "Faren", age: 3.8, sex: "female" },
  { name: "Azadeh", age: 44, sex: "female" },
  { name: "Amaneh", age: 43, sex: "female" },
  { name: "Abbass", age: 37, sex: "male" },
  { name: "Mina", age: 35, sex: "female" },
  { name: "Fatemeh", age: 35, sex: "female" },
  { name: "Vahid", age: 36, sex: "male" },
  { name: "Mona", age: 44, sex: "female" },
  { name: "Alireza", age: 45, sex: "male" },
];
export const coursNames = [
  { name: "html", active: true },
  { name: "javaScript", active: false },
  { name: "react", active: true },
  { name: "nodejs", active: false },
  { name: "bootStrap", active: false },
  { name: "css", active: false },
  { name: "python", active: true },
];

function App() {
  const siteName = "Tervetuloa!";

  return (
    <BrowserRouter>
    <Nav/>
      <div>
        <h1 style={{ textAlign: "center", color: "green" }}>
          {siteName.toUpperCase()}
        </h1>
        <Routes>
        <Route path="/" />
        <Route path="/users" element={<Users />}/>
        <Route path="/course" element={<Courses />}/>
        <Route path="*" element={<Notfound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
