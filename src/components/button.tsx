import { FiArrowRight } from "react-icons/fi";
import React from 'react';


interface ButtonProps {
  handleClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({handleClick, text}) => {

  return (
  <div className="border shadow-md rounded-full border-solid border-grayTheme cursor-pointer hover:scale-105 transition-all" onClick={handleClick}>
    <div className="text-timberWolf border rounded-full border-solid border-timberWolf p-2 m-1.5 flex">
          <p className="flex flex-grow px-3 py-0.5 text-lg">{text}</p>
          <p className="flex items-center"><FiArrowRight size={24}/></p>
    </div>
  </div>
  );
};

export default Button;
