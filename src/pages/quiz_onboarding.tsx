
import React from 'react';
import Button from '../components/button';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="bg-timberWolf h-4 w-4 rounded-full mb-8 hidden md:block"></div>
      <div className="bg-gradient-to-b rounded-lg shadow-md from-[#282828] h-80 flex flex-col md:hover:bg-gradient-to-b md:hover:from-[#313131] transition-all ease-in-out md:hover:duration-300 items-center p-8 group">
        <h1 className="font-Oswald text-semibold text-5xl p-4 group-hover:md:text-white transition-all">{title}</h1>
        <p className="font-ZenMaru text-lg text-center overflow-auto">{content}</p>
      </div>
    </div>
  );
};

interface QuizOnboardingProps {
  next: (step: number) => void;
}

const QuizOnboarding: React.FC<QuizOnboardingProps> = ({ next }) => {

  return (

    <div className="grid grid-cols-1 lg:grid-cols-4 m-8 h-full items-center ">

      <div className="mr-8">
        <h1 className='font-Oswald text-6xl font-bold mb-4 text-center lg:text-left '> Quiz </h1>
        <p className='font-ZenMaru text-3xl text-bold text-center lg:text-left'>Você saberia dizer qual arte foi criada por humanos ou por I.A.?</p>
        <div className="py-8 flex justify-center w-full lg:justify-start"><Button text="Continuar" handleClick={() => next(1)} /></div>
      </div>
      <div className="col-span-3 h-full flex items-center">
        <div>
          <div className="h-[2px] w-full bg-timberWolf -mb-2 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full items-center w-full ">
            <Card title="1" content="Reflexão sobre o conteúdo produzido por I.A.: Inteligência artificial produz arte? Existe viés nas “criações” de I.A.?" />
            <Card title="2" content="Uma arte sobre temática de racismo aparecerá na tela, você deve dizer se foi gerada por I.A. ou criada por humanos." />
            <Card title="3" content="Ao acertar ou errar, a resposta e explicação aparecerá na tela." />
          </div>
          <p className="font-ZenMaru text-lg text-center overflow-auto p-8">No final, será apresentado seu resultado (a porcentagem de acertos)</p>
        </div>

      </div>

    </div>


  );
};

export default QuizOnboarding;
