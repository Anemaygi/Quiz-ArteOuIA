import React from 'react';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'Sobre nós' },
  { href: '/entenda', title: 'I.A. e viés algorítmico' },
  { href: '/quiz', title: 'Quiz' },
];


const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
  <div className="font-ZenMaru text-base my-1 flex justify-center lg:justify-start">
    {sidebarItems.map((item,index) => (
          <div
          key={index} 
          className={`px-4  ${item.href === window.location.pathname ? 'text-persianRed ' : 'hover:text-wine transition-all cursor-pointer text-white'}`} 
          onClick={() => {navigate(item.href)}}>
            {item.title}
          </div>
        ))}
  </div>
  );
};

export default Navbar;
