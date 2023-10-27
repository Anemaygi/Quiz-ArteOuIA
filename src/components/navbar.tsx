import React from 'react';

const sidebarItems = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'Sobre nós' },
  { href: '/entenda', title: 'I.A. e viés algoritmo' },
  { href: '/quiz', title: 'Quiz' },
];


const Navbar: React.FC = () => {

  return (
  <div className="font-ZenMaru text-base my-2 flex justify-center lg:justify-start">
    {sidebarItems.map((item) => (
          <a 
          className={`px-8  ${item.href === window.location.pathname ? 'text-persianRed ' : 'hover:text-wine transition-all text-white'}`} 
          href={item.href}>
            {item.title}
          </a>
        ))}
  </div>
  );
};

export default Navbar;
