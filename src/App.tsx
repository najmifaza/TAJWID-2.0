import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
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
