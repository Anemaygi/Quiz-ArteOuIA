import React from 'react';
import Navbar from '../components/navbar';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-[#0D0D0D] text-timberWolf min-h-screen xl:h-screen h-full w-screen flex items-center p-2">
            <div className='flex flex-col shadow-lg rounded-lg w-screen h-full p-4 bg-night gap-16 overflow-y-auto'>
                <Navbar />
                <div className="flex gap-8 px-14 lg:flex-nowrap flex-wrap">
                    <div className='flex flex-col gap-10'>
                        <h1 className='font-Oswald text-6xl font-semibold '>Sobre nós</h1>
                        <p className='font-ZenMaru text-xl font-normal'> Resultante da proposta de avaliação da disciplina <b>ACH0152 - Sociedade, Meio Ambiente e Cidadania (2023)</b>,
                        que compõe o Ciclo Básico do curso de Sistemas de Informação da EACH USP, a presente plataforma visa explorar de maneira crítica o papel da tecnologia,
                        especialmente a Inteligência Artificial (IA), na perpetuação de questões relacionadas ao racismo e outros preconceitos.
                        </p>
                        <p className='font-ZenMaru text-xl font-normal'> Ao explorar nosso site, convidamos você a se aprofundar nessas questões complexas e a realizar nosso <a style={{ color: '#9d0000' }} href="/quiz">quiz</a> educativo.</p>
                    </div>
                    <img className="h-[395px] object-scale-down p-8" src='assets/BlondeBraidsStudyIV.png' alt='Imagem criada por Inteligência artificial. “Blonde Braids Study IV”, de Minne Atairu'></img>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;