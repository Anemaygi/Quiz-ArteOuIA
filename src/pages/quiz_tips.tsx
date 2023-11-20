
import React from 'react';
import Button from '../components/button';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (

    <div className="bg-gradient-to-b rounded-lg shadow-md from-[#282828] h-full w-full flex lg:flex-row flex-col md:hover:bg-gradient-to-b md:hover:from-[#313131] transition-all ease-in-out md:hover:duration-300 items-center p-2 group">
      <h1 className="font-Oswald text-semibold text-3xl p-4 md:group-hover:text-white transition-all">{title}</h1>
      <p className="font-ZenMaru text-md text-justify overflow-auto">{content}</p>
    </div>

  );
};

interface QuizOnboardingProps {
  next: (step: number) => void;
}

const QuizTips: React.FC<QuizOnboardingProps> = ({ next }) => {

  return (
    <div className="h-full w-full p-2 grid-cols-1 grid lg:grid-cols-3 gap-4">
      <div className="w-full p-4 flex items-center flex-col justify-center">
        <div>
          <h1 className='font-Oswald text-7xl font-bold mb-4 text-center lg:text-left'>Inteligência <br className="hidden lg:flex" />artificial <br className="hidden lg:flex" />produz <br className="hidden lg:flex" /><b className="text-persianRed">arte</b>? </h1>
          <div className="py-8 flex justify-center w-full lg:justify-start">
            <Button text="Continuar" handleClick={() => next(2)} /></div>
        </div>
      </div>

      <div className="w-full overflow-y-auto h-full bg-gradient-to-b rounded-lg shadow-md from-[#282828] flex flex-col md:hover:bg-gradient-to-b items-center justify-center md:hover:from-[#313131] transition-all ease-in-out md:hover:duration-300 p-8 group">
        <h1 className="font-Oswald text-semibold text-[2.5rem] p-4 md:group-hover:text-white transition-all">Como I.A. cria "arte"?</h1>
        <img className="m-8 w-40" src="assets\iaarte.png" />
        <p className="font-ZenMaru text-md text-center overflow-auto">Em 2014, surgiu um novo método de aprendizado de máquina chamado Generative Adversarial Network (GAN), adotado especialmente por artistas devido à capacidade de criar não apenas "arte visual", mas várias outras aplicações de geração de imagem por Inteligência Artificial. Para gerar imagens, esses modelos usam grandes conjuntos de dados, contendo milhares ou até milhões de exemplos de imagens reais, para treinar o Gerador (responsável por criar imagens) e o Discriminador (que avalia se a imagem gerada parece real). Ambos aprendem juntos para produzir resultados mais convincentes, capturando padrões e características estatísticas do conjunto de dados de treinamento.</p>


      </div>
      <div className="w-full grid grid-rows-3 h-full gap-4">
      <Card title={'Subjetividade'} content={'A I.A. pode ampliar a criatividade dos artistas, mas não tem a capacidade de expressar vivências com criatividade e subjetividade.'} />
        <Card title={'Autoria'} content={'O modelo recebe instruções, mas utiliza dados já existentes (que podem ter direitos autorais) para criar resultados com características semelhantes.'} />
        <Card title={'Viés'} content={'A utilização de dados pode levar à perpetuação de discriminações existentes na sociedade nos resultados.'} />
      </div>

    </div>

  );
};

export default QuizTips;
