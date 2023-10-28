import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/landingPage";
import Quiz from "../pages/quiz_onboarding";
import QuizPlay from "../pages/quiz_play";

export default function RootRouter() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/quizplay' element={<QuizPlay />} />s
    </Routes>
  );
}