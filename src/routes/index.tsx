import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/landingPage";
// import QuizOnboarding from "../pages/quiz_onboarding";
// import QuizPlay from "../pages/quiz_play";
// import QuizResult from "../pages/quiz_result";
import Quiz from "../pages/quiz";

export default function RootRouter() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      {/* <Route path='/quizonboarding' element={<QuizOnboarding />} /> */}
      {/* <Route path='/quizplay' element={<QuizPlay />} /> */}
      {/* <Route path='/quizresult' element={<QuizResult />} /> */}
      <Route path='/quiz' element={<Quiz />} />
    </Routes>
  );
}