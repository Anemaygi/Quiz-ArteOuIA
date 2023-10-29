
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import QuizOnboarding from './quiz_onboarding';
import QuizPlay from './quiz_play';
import QuizResult from './quiz_result';
// import QuizPlay from './quiz_play';



const Quiz: React.FC = () => {

  const [step, setStep] = useState(0);
  const [result, setResult] = useState(0);
  const total = 2;

  return (
  <div className="bg-[#0D0D0D]  text-timberWolf h-screen  w-screen flex items-center p-2">
        <div className='flex flex-col shadow-lg rounded-lg w-screen h-full overflow-auto p-4 bg-night'>
          <Navbar />
          {
            step === 0 && <QuizOnboarding next={setStep}/>
          }
          {
            step === 1 && <QuizPlay next={setStep} points={result} setPoints={setResult} total={2}/>
          }
          {
            step === 2 && <QuizResult total={total} points={result}/>
          }
          
        </div>
  </div>
  
  );
};

export default Quiz;
