import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/landingPage";
import Quiz from "../pages/quiz";
import AboutPage from "../pages/AboutPage";

export default function RootRouter() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/about' element={<AboutPage/> }/>
    </Routes>
  );
}