
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import QuizOnboarding from './quiz_onboarding';
import QuizPlay from './quiz_play';
import QuizResult from './quiz_result';
import QuizTips from './quiz_tips';
import quizData from '../data/quiz.json';

export interface Question {
  obra: string;
  artista: string;
  descricao: string;
  prompt: string;
  img: string;
  resposta: string;
}

function typeQuiz(type: string, total: number){
  const specificOrder = [1,0];
  let quiz: Question[] = [];
  
  if(type == 'normal'){
    quiz = quizData.questions.slice(0, total);  
  }
  else if (type == 'specific'){
    quiz = specificOrder.map(index => quizData.questions[index]);
  }
  return Array.from(quiz);
}

const Quiz: React.FC = () => {

  const [step, setStep] = useState(0);
  const [result, setResult] = useState(0);
  const total = 2;
  
  const quiz = typeQuiz('normal',2);

  return (
  <div className="bg-[#0D0D0D] text-timberWolf h-screen  w-screen flex items-center p-2">
        <div className='flex flex-col shadow-lg rounded-lg w-screen h-full overflow-auto p-4 bg-night'>
          <Navbar />
          {
            step === 0 && <QuizOnboarding next={setStep}/>
          }
          {
            step === 1 && <QuizTips next={setStep}/>
          }
          {
            step === 2 && <QuizPlay next={setStep} points={result} setPoints={setResult} total={total} quiz={quiz}/>
          }
          {
            step === 3 && <QuizResult total={total} points={result}/>
          }
          
          
          
        </div>
  </div>
  
  );
};

export default Quiz;
