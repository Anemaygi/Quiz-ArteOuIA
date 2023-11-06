
import React from 'react';
import Button from '../components/button';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    
      <div className="bg-gradient-to-b rounded-lg shadow-md from-[#282828] h-full w-full flex lg:flex-row flex-col hover:bg-gradient-to-b hover:from-[#313131] transition-all ease-in-out hover:duration-300 items-center p-2 group">
        <h1 className="font-Oswald text-semibold text-3xl p-4 group-hover:text-white transition-all">{title}</h1>
        <p className="font-ZenMaru text-lg text-center overflow-auto">{content}</p>
      </div>
    
  );
};

interface QuizOnboardingProps {
  next: (step: number) => void;
}

const QuizTips: React.FC<QuizOnboardingProps> = ({ next }) => {

  return (
    <div className="h-full w-full p-2 grid-cols-1 grid lg:grid-cols-3 gap-4">
      {/* antes era flex flex-wrap /\ */}
      <div className="w-full p-4 flex items-center flex-col justify-center">
        <div>
        <h1 className='font-Oswald text-7xl font-bold mb-4 text-center lg:text-left'>Inteligência <br className="hidden lg:flex"/>artificial <br className="hidden lg:flex"/>produz <br className="hidden lg:flex"/><b className="text-persianRed">arte</b>? </h1>
        <div className="py-8 flex justify-center w-full lg:justify-start">
          <Button text="Continuar" handleClick={() => next(2)} /></div>
          </div>
      </div>
      
      <div className="w-full h-full bg-gradient-to-b rounded-lg shadow-md from-[#282828] flex flex-col hover:bg-gradient-to-b items-center justify-center hover:from-[#313131] transition-all ease-in-out hover:duration-300 p-8 group">
          <h1 className="font-Oswald text-semibold text-[2.5rem] p-4 group-hover:text-white transition-all">Como I.A. cria "arte"?</h1>
         <img className="m-8" src="https://i.imgur.com/TfKiLI3.png" />
         <p className="font-ZenMaru text-lg text-center overflow-auto">Lorem ipsum dolor sit amet, consectetur dipiscing.Lorem ipsum dolor sit amet, consectetur dipiscing.Lorem ipsum dolor sit amet, consectetur dipiscing.Lorem ipsum dolor sit amet, consectetur dipiscing.</p>
         

        </div>
        <div className="w-full grid grid-rows-3 h-full gap-4">
        <Card title={'Subjetividade'} content={'Lorem ipsum dolor sit amet, consectetur dipiscing.'} />
        <Card title={'Subjetividade'} content={'Lorem ipsum dolor sit amet, consectetur dipiscing.'} />
        <Card title={'Subjetividade'} content={'Lorem ipsum dolor sit amet, consectetur dipiscing.'} />
        </div>

    </div>

    // <div className="grid grid-cols-1 lg:grid-cols-4 m-8 h-full lg:items-center bg-emerald-500 ">

    //   <div className="bg-yellow-500 h-fit lg:h-full w-fit min-w-full p-4">
    //     <h1 className='font-Oswald text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left '> Inteligência artificial produz <b className="text-persianRed">arte</b>? </h1>
    //     <div className="py-8 flex justify-center w-full lg:justify-start"><Button text="Continuar" handleClick={() => next(2)} /></div>
    //   </div>
    //   <div className="col-span-3 h-full flex lg:flex-row flex-col items-center">
    //   <div className="h-full w-full bg-red-400">oi</div>

      //    <div className="w-full lg:w-1/2 h-full bg-gradient-to-b rounded-lg shadow-md m-4 from-[#282828] block hover:bg-gradient-to-b items-center justify-center hover:from-[#313131] transition-all ease-in-out hover:duration-300 p-8 group">
      //   <div className="h-full w-full flex flex-col items-center justify-center"><h1 className="font-Oswald text-semibold text-5xl p-4 group-hover:text-white transition-all">Como I.A. cria "arte"?</h1>
      //   <img className="m-8" src="https://i.imgur.com/TfKiLI3.png" />
      //   <p className="font-ZenMaru text-lg text-center overflow-auto">Lorem ipsum dolor sit amet, consectetur dipiscing.Lorem ipsum dolor sit amet, consectetur dipiscing.Lorem ipsum dolor sit amet, consectetur dipiscing.Lorem ipsum dolor sit amet, consectetur dipiscing.</p>
      //   </div>
      // </div>
  
    //     <div className="flex flex-col h-full space-y-4 w-full lg:w-1/2 ">
    //         <Card title={'Subjetividade'} content={'Lorem ipsum dolor sit amet, consectetur dipiscing.'} />
    //         <Card title={'Subjetividade'} content={'Lorem ipsum dolor sit amet, consectetur dipiscing.'} />
    //         <Card title={'Subjetividade'} content={'Lorem ipsum dolor sit amet, consectetur dipiscing.'} />
    //     </div>

    //   </div> 

    // </div>


  );
};

export default QuizTips;
