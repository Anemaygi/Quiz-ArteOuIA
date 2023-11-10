import React from 'react';

const sidebarItems = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'Sobre nós' },
  { href: '/entenda', title: 'I.A. e viés algorítmico' },
  { href: '/quiz', title: 'Quiz' },
];


const Navbar: React.FC = () => {

  return (
  <div className="font-ZenMaru text-base my-1 flex justify-center lg:justify-start">
    {sidebarItems.map((item,index) => (
          <a
          key={index} 
          className={`px-4  ${item.href === window.location.pathname ? 'text-persianRed ' : 'hover:text-wine transition-all text-white'}`} 
          href={item.href}>
            {item.title}
          </a>
        ))}
  </div>
  );
};

export default Navbar;
