import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import EventListPage from "./pages/EventListPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
