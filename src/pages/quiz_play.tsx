
import React, { useState } from 'react';
import Button from '../components/button';
import { FiX, FiCheck } from "react-icons/fi";
import { Question } from './quiz';
import axios from 'axios';

interface QuizPlayProps {
  next: (step: number) => void;
  points: number;
  setPoints: (result: number) => void;
  total: number;
  quiz: Question[];
}



const QuizPlay: React.FC<QuizPlayProps> = ({ next, points, setPoints, total, quiz }) => {

  const [imageLoading, setImageLoading] = useState(true);
  const [idx, setIdx] = useState(0);
  const [status, setStatus] = useState('na');  // na -> no answer // a1 -> already answer ia // a2 -> already answer humano

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (idx === total - 1) {
      e.preventDefault();
      const data = {
        Points: points.toString(),
        Date: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      }
      axios.post(import.meta.env.VITE_STORE_DATA, data).then((response) => console.log(response))
      next(3);
    }
    setIdx(idx + 1);
    setStatus('na');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-2 h-full items-center">

      <div className={`space-y-2 text-2xl p-4 " + ${status == 'na' ? 'hidden' : 'opacity-1'} `}>
        <p className={quiz[idx].resposta == 'ia' ? 'hidden' : ''}><b>Obra:</b> {quiz[idx].obra}</p>
        <p className={quiz[idx].resposta}><b>{quiz[idx].resposta == 'ia' ? 'Plataforma de IA:' : 'Artista:'}</b> {quiz[idx].artista}</p>
        <p className={quiz[idx].resposta == 'humano' ? 'hidden' : ''}><b>Prompt:</b> {quiz[idx].prompt}</p>
        <p className="text-lg">{quiz[idx].descricao}</p>
      </div>
      <div className={status == 'na' ? `col-span-2` : `col-span-1`}>
        <div className="h-full flex justify-center items-center ">
        {imageLoading && <div className="w-10 h-10 bg-gradient-to-r from-persianRed to-wine animate-spin rounded-full"></div>}
          <img className={`object-scale-down ${imageLoading ? 'hidden' : ''}`}
            src={quiz[idx].img}
            onLoad={() => setImageLoading(false)}/>
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
          <Button handleClick={handleButtonClick} text="Continuar" />
        </div></div>
    </div>

  );
};

export default QuizPlay;
