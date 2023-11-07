
import React, { useEffect, useState } from 'react';
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

function getRandomIndexes(total: number, max: number): number[] {
  // Function to generate random order 
  const indexes: Set<number> = new Set();
  while (indexes.size < total) {
    const randomIndex = Math.floor(Math.random() * max);
    indexes.add(randomIndex);
  }
  return Array.from(indexes);
}

function typeQuiz(type: string, total: number) {
  // function to get the list of items to display
  const specificOrder = [1, 0];
  let quiz: Question[] = [];
  if (type == 'normal') {
    quiz = quizData.questions.slice(0, total);
  }
  else if (type == 'specific') {
    quiz = specificOrder.map(index => quizData.questions[index]);
  }
  else if (type == 'random') {
    const randomIndexes = getRandomIndexes(total, quizData.questions.length);
    quiz = randomIndexes.map((index) => quizData.questions[index]);
  }
  return Array.from(quiz);
}

const Quiz: React.FC = () => {

  // Change here
  const total = 2;
  const type = 'normal';
  //
  
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(0);
  const [quiz, setQuiz] = useState<Question[]>(() => typeQuiz(type, 2));
  

  useEffect(() => {
    setQuiz(typeQuiz(type, total));
  }, []);


  return (
    <div className="bg-[#0D0D0D] text-timberWolf h-screen  w-screen flex items-center p-2">
      <div className='flex flex-col shadow-lg rounded-lg w-screen h-full overflow-auto p-4 bg-night'>
        <Navbar />
        {
          step === 0 && <QuizOnboarding next={setStep} />
        }
        {
          step === 1 && <QuizTips next={setStep} />
        }
        {
          step === 2 && <QuizPlay next={setStep} points={result} setPoints={setResult} total={total} quiz={quiz} />
        }
        {
          step === 3 && <QuizResult total={total} points={result} />
        }
      </div>
    </div>

  );
};

export default Quiz;
