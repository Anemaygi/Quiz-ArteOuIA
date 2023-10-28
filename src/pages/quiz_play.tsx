
import React, { useState } from 'react';
import Button from '../components/button';
import { FiX, FiCheck } from "react-icons/fi";
import quizData from '../data/quiz.json';

function RandomQuiz(qtdGerada: number, totalQuestions: number) {
  const randomQuestions = new Set();
  while (randomQuestions.size < qtdGerada) {
    const randomNumber = Math.floor(Math.random() * (totalQuestions));
    randomQuestions.add(randomNumber);
  }
  return Array.from(randomQuestions);
}



interface QuizPlayProps {
  next: (step: number) => void;
  points: number;
  setPoints: (result: number) => void;
  total: number;
}

interface Question {
  obra: string;
  artista: string;
  descricao: string;
  prompt: string;
  img: string;
  resposta: string;
}


const QuizPlay: React.FC<QuizPlayProps> = ({next, points, setPoints, total}) => {
  let quiz: Question[] = [];

  const ordem = 'random'
  if(ordem == 'random'){
    const lista = RandomQuiz(total, quizData.questions.length);
    lista.forEach(function(number) {
      quiz.push(quizData.questions[number as number]);
    });
  }
  else{
    quiz = quizData.questions;
  }
  
  const [idx, setIdx] = useState(0);
  const [status, setStatus] = useState('na');  // na -> no answer // a1 -> already answer ia // a2 -> already answer humano


  return (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-2 h-full items-center">

          <div className={`space-y-2 text-2xl p-4 " + ${status == 'na' ? 'hidden' : 'opacity-1'} `}>
            <p className={quiz[idx].resposta == 'ia' ? 'hidden' : ''}><b>Obra:</b> {quiz[idx].obra}</p>
            <p className={quiz[idx].resposta == 'ia' ? 'hidden' : ''}><b>Artista:</b> {quiz[idx].artista}</p>
            <p className={quiz[idx].resposta == 'humano' ? 'hidden' : ''}><b>Prompt:</b> {quiz[idx].prompt}</p>
            <p className="text-lg">{quiz[idx].descricao}</p>
            {/* <p>{quiz.length}</p> */}
          </div>
          <div className={status == 'na' ? `col-span-2` : `col-span-1`}>
            <div className="h-full flex justify-center items-center ">
              <img className="object-scale-down" src={quiz[idx].img} />
            </div>
          </div>
          <div className=" w-full h-fit flex flex-col justify-end">
            <div className="border my-2 shadow-md rounded-full border-solid  border-grayTheme group"
              onClick={() => {
                if (status == 'na') {
                  if (quiz[idx].resposta == 'ia') setPoints(points + 1);
                  setStatus('a1');
                }
              }}>
              <div
                className={`text-timberWolf border rounded-full border-solid  transition-all border-timberWolf p-1 m-1.5 flex ${status == 'na' ? 'group-hover:bg-timberWolf  cursor-pointer group-hover:text-night' : status == 'a1' && quiz[idx].resposta == 'ia' ? 'bg-[#45877B]' : status == 'a1' && quiz[idx].resposta != 'ia' ? 'bg-persianRed' : ''} `}>
                <p className="flex flex-grow px-3 py-0.5 text-lg">Gerado por inteligência artificial</p>
                <p className={`flex items-center mx-2 ${status == 'a1' ? '' : 'hidden'}`}> {quiz[idx].resposta == 'ia' ? <FiCheck size={20} /> : <FiX size={20} />} </p>
              </div>
            </div>

            <div className="border my-2 shadow-md rounded-full border-solid border-grayTheme group"
              onClick={() => {
                if (status == 'na') {
                  if (quiz[idx].resposta == 'humano') setPoints(points + 1);
                  setStatus('a2');
                }
              }}>
              <div
                className={`text-timberWolf border rounded-full border-solid  transition-all border-timberWolf p-1 m-1.5 flex ${status == 'na' ? 'group-hover:bg-timberWolf  cursor-pointer group-hover:text-night' : status == 'a2' && quiz[idx].resposta == 'humano' ? 'bg-[#45877B]' : status == 'a2' && quiz[idx].resposta != 'humano' ? 'bg-persianRed' : ''} `}>
                <p className="flex flex-grow px-3 py-0.5 text-lg">Criado por humanos</p>
                <p className={`flex items-center mx-2 ${status == 'a2' ? '' : 'hidden'}`}> {quiz[idx].resposta == 'humano' ? <FiCheck size={20} /> : <FiX size={20} />} </p>
              </div>
            </div></div>


          <div className={`w-full  h-fit flex justify-end items-end ${status == 'na' ? `hidden` : `opacity-1`}`}>
            <div className="m-3 w-56">
              <Button handleClick={() => {
                
                if(idx == total-1) next(2)
                setIdx(idx + 1);
                setStatus('na');
                
              }} text="Continuar" />
            </div></div>
        </div>

  );
};

export default QuizPlay;
