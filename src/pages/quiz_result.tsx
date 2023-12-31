
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface QuizResultProps {
  points: number;
  total: number;
}

const QuizResult: React.FC<QuizResultProps> = ({ points, total }) => {

  const navigate = useNavigate();
  return (

    <div className="h-full w-full flex flex-wrap">
      <div className="flex flex-col p-16  w-full md:w-fit h-full justify-center">
        <div className="flex flex-wrap">
          <div className="pr-8 pb-8">
            <h1 className='font-Oswald text-6xl font-bold mb-4 text-center lg:text-left '>Resultados</h1>
            <div className="grid grid-cols-2 items-center">
              <p className="font-bold">Erros</p>
              <p>{total - points}</p>
              <p className="font-bold">Acertos</p>
              <p>{points}</p>
            </div>
          </div>
          <div className="bg-gradient-to-b rounded-lg shadow-md from-[#282828] h-fit flex flex-col hover:bg-gradient-to-b hover:from-[#313131] transition-all ease-in-out hover:duration-300 items-center p-8 group">
            <h1 className="font-Oswald text-semibold text-7xl p-4 group-hover:text-white transition-all">{(points / total * 100).toFixed(0)}%</h1>
          </div>
        </div>
        <p className="text-lg mt-8">Consuma a tecnologia de forma consciente!</p>
        <p>Aprenda mais sobre <b className="text-persianRed underline underline-offset-1 hover:cursor-pointer" onClick={() => navigate("/entenda")}>I.A. e viés algoritmos</b></p>
      </div>
      <img className="lg:absolute lg:inset-y-0 lg:right-0 lg:block hidden" src="https://i.imgur.com/NriR4dE.png" />
    </div>

  );
};

export default QuizResult;
