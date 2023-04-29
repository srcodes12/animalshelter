import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import React from "react";
import DirectoryPage from "./pages/DirectoryPage";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailPage from "./pages/DetailPage";
import AboutPages from "./pages/AboutPages";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAnimals } from "./features/animals/AnimalsSlice";
import { fetchPartners } from "./features/partners/partnerSlice";
import { fetchPromotions } from "./features/promotions/promotionsSlice";
import { fetchComments } from "./features/comments/commentsSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnimals());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<DirectoryPage />} />
        <Route path="directory/:animalId" element={<DetailPage />} />
        <Route path="about" element={<AboutPages />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
