import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
