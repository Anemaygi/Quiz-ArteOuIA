import React from 'react';
import Navbar from '../components/navbar';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-[#0D0D0D] text-timberWolf min-h-screen xl:h-screen h-full w-screen flex items-center p-2">
            <div className='flex flex-col shadow-lg rounded-lg w-screen h-full p-4 bg-night gap-16'>
                <Navbar />
                <div className="flex gap-8 px-14">
                    <div className='flex flex-col gap-10'>
                        <h1 className='font-Oswald text-6xl font-semibold '>Sobre nós</h1>
                        <p className='font-ZenMaru text-xl font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu nibh 
                            et diam volutpat sollicitudin. Donec cursus vel mauris ac placerat. Integer egestas risus quis velit dictum, accumsan
                            varius sem euismod. Quisque id justo cursus, ornare ex at, ullamcorper ligula. In porttitor orci est. Quisque nibh quam, 
                            dignissim id nibh ut, eleifend porta ex. Nam laoreet velit sed est commodo consectetur. Etiam dictum congue varius. Proin 
                            elit quam, elementum scelerisque lacus vitae, scelerisque feugiat diam. Nunc orci leo, finibus eget mauris id, sodales 
                            vulputate tortor.
                        </p>
                        <p className='font-ZenMaru text-xl font-normal'> Lorem ipsum dolor sit amet consectetur. Nunc vitae lacus vel etiam diam imperdiet justo vitae. 
                            Mi tempus amet non scelerisque dignissim ac. Purus euismod quam scelerisque enim dui ipsum. 
                            Leo vestibulum libero commodo ultricies facilisi adipiscing tristique. In efficitur, nisi ultrices cursus 
                            sollicitudin, lacus lectus accumsan erat, et cursus elit diam aliquet dui. In vitae eros lacus. Nunc elementum 
                            auctor condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut
                             mattis porta lectus. Praesent a urna dapibus, tincidunt quam quis, blandit est. Nulla nec euismod risus. 
                             Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </p>
                    </div>
                    <img className="w-2/5 h-[395px] pt-8" src='src/assets/BlondeBraidsStudyIV.png' alt='Imagem criada por Inteligência artificial. “Blonde Braids Study IV”, de Minne Atairu'></img>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;