
import React from 'react';
import Button from '../components/button';
import Navbar from '../components/navbar';
import {useNavigate} from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0D0D0D] text-timberWolf min-h-screen xl:h-screen h-full w-screen flex items-center p-2">
      <div className='flex flex-col shadow-lg rounded-lg w-screen h-full p-4 bg-night'>
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-2 m-8 h-full items-center ">

          <div className="my-8">

            <h1 className='font-Oswald text-5xl font-bold mb-4 leading-snug text-center lg:text-left '> Como a tecnologia perpetua racismo e outros preconceitos? </h1>
            <p className='font-ZenMaru text-2xl text-bold text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur dipiscing.</p>
            <div className="flex justify-center items-center lg:justify-start mt-4">
              <div className="w-44"><Button text="Quiz" handleClick={() => navigate('/quiz')} /></div>
              <p className="cursor-pointer text-lg px-6 hover:scale-105" onClick={() => navigate('/about')}>Entenda</p>
            </div>
          </div>
          <div>

            <img className="z-50 xl:absolute bottom-0 right-0 h-full pt-8" src="assets\hero.png" />
          </div>

        </div>
      </div>
    </div>

  );
};

export default LandingPage;
