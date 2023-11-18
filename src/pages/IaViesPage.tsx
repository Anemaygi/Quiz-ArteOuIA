import React from 'react';
import Navbar from '../components/navbar';

const IaViesPage: React.FC = () => {
    return (
        <div className="bg-[#0D0D0D] text-timberWolf min-h-screen xl:h-screen h-full w-screen flex items-center p-2">
            <div className='flex flex-col shadow-lg rounded-lg w-screen h-full p-4 bg-night gap-16 overflow-y-auto'>
                <Navbar />
                <h1 className='font-Oswald text-6xl font-semibold mx-14'>O que é IA e Viés algorítmico?</h1>
                <div className="flex lg:flex-nowrap flex-wrap px-14">
                    
                    <div className='flex flex-col gap-5'>
                        <h2 className='font-MuseoModerno text-4xl font-bold'>O que é IA?</h2>
                        <p className='font-ZenMaru text-xl font-normal'> O termo Inteligência Artificial (IA) abrange uma variedade de aplicações que realizam tarefas
                            complexas anteriormente reservadas à interação humana, como interagir com clientes online ou jogar xadrez. Frequentemente, utiliza-se o termo
                            de forma intercambiável com seus subcampos, que incluem Machine Learning (ML) e Deep Learning.
                        </p>
                        <p className='font-ZenMaru text-xl font-normal'> Apesar disso, é crucial reconhecer as distinções entre esses conceitos. O Machine Learning, por
                            exemplo, concentra-se na criação de sistemas capazes de aprender e aprimorar seu desempenho com base nos dados que recebem. Vale ressaltar que,
                            embora todo Machine Learning seja IA, nem toda IA é Machine Learning.
                        </p>
                        <p className='font-ZenMaru text-xl font-normal'> Em outras palavras, a inteligência artificial é um campo da ciência preocupado com a criação de
                            computadores e máquinas que podem raciocinar, aprender e atuar de maneira que normalmente exigiria inteligência humana ou que envolvia dados
                            com escala maior que as pessoas podem analisar.
                        </p>
                        <p className='font-ZenMaru text-xl font-normal'> IA é um campo amplo que abrange muitas disciplinas diferentes, incluindo ciência da computação,
                            análise e estatística de dados, engenharia de hardware e software, linguística, neurociência e até mesmo filosofia e psicologia.
                        </p>
                        <p className='font-ZenMaru text-xl font-normal'> Em um nível operacional para uso comercial, a IA é um conjunto de tecnologias baseadas principalmente
                            em Machine Learning e Deep Learning, usada para análise de dados, previsões e previsão, categorização de objetos, processamento de linguagem
                            natural, recomendações, recuperação inteligente de dados e muito mais.
                        </p>

                        <h2 className='font-MuseoModerno text-4xl font-bold'>O que é viés algorítmico?</h2>
                        <p className='font-ZenMaru text-xl font-normal'> O viés algorítmico refere-se aos erros sistêmicos e repetíveis em um sistema de computador
                            que criam resultados injustos, como privilegiar um grupo arbitrário de usuários em detrimento de outros.
                        </p>
                        <p className='font-ZenMaru text-xl font-normal'> De forma didática, imagine uma ferramenta simples de tomada de decisão, como um chapéu seletor
                            que classifica as pessoas em diferentes categorias. Mas e se o chapéu só tiver sido exposto a um tipo específico de pessoa enquanto aprende
                            a sua tarefa? Então, poderá julgar mal os indivíduos que não se enquadram nos critérios “habituais”, mostrando preconceito em relação aos que
                            se enquadram. Esse é o cerne do viés algorítmico.
                        </p>
                        <p className='font-ZenMaru text-xl font-normal'> Este preconceito tem origem em dados de entrada distorcidos ou limitados, algoritmos injustos ou
                            práticas de exclusão durante o desenvolvimento da IA. É crucial abordar esta questão, uma vez que os sistemas de IA estão agora envolvidos em
                            domínios importantes como os cuidados de saúde, as finanças e a justiça criminal, onde decisões tendenciosas podem levar a efeitos prejudiciais.
                        </p>
                        <p className='font-ZenMaru text-xl font-normal'> Por exemplo, um algoritmo de justiça criminal usado em Broward Country, Flórida, rotulou erroneamente
                            os réus afro-americanos como “de alto risco”, quase o dobro da taxa em que rotulou erroneamente os réus brancos.
                        </p>
                        <p className='font-ZenMaru text-xl font-normal'> O preconceito pode se infiltrar nos algoritmos de várias maneiras. Os sistemas de IA aprendem a tomar
                            decisões com base em dados de treinamento, que podem incluir decisões humanas tendenciosas ou refletir desigualdades históricas ou sociais, mesmo
                            que variáveis sensíveis como gênero, raça ou orientação sexual sejam removidas. A Amazon parou de usar um algoritmo de contratação depois de descobrir
                            que favoreceu candidatos com base em palavras como “executado” ou “capturado”, que eram mais comumente encontradas em currículos masculinos, por exemplo.
                            Outra fonte de viés é a amostragem de dados defeituosa, na qual os grupos estão superrepresentados ou sub-representados nos dados de treinamento. Por
                            exemplo, Joy Buolamwini, do MIT, trabalhando com Timnit Gebru encontraram que as tecnologias de análise facial tiveram maiores taxas de erro para minorias
                            e, particularmente, mulheres minoritárias, potencialmente devido a dados de treinamento não representativos.
                        </p>

                        <h3 className='font-MuseoModerno text-2xl font-bold'>Exemplos de vieses algorítmicos</h3>
                        <p className='font-ZenMaru text-xl font-normal'> O site <a style={{ color: '#9d0000' }} target="_blank" href='https://www.programaria.org/algoritmos-de-inteligencia-artificial-e-vieses-uma-reflexao-sobre-etica-e-justica/'> PrograMaria </a>
                            traz uma série de exemplos de vieses algorítmicos. Os mais conhecidos são:
                        </p>
                        <ul className='font-ZenMaru text-xl font-normal' style={{ listStyleType: 'circle', marginLeft: '1.5em' }}>
                            <li><b>Viés de afinidade:</b> tendência a avaliar melhor o que é similar a coisas conhecidas para nós;</li>
                            <li><b>Viés de percepção:</b> quando as pessoas acreditam e reforçam estereótipos sem base concreta em fatos;</li>
                            <li><b>Viés confirmatório:</b> disposição para buscar informações que confirmem nossas hipóteses e ignorem as que contradigam;</li>
                            <li><b>Efeito de auréola (efeito halo):</b> propensão de ter mais disposição a avaliar positivamente o restante das informações a partir de uma única
                                informação positiva ou agradável;
                            </li>
                            <li><b>Viés de grupo:</b> seguir o padrão de um grupo, levando à concordância de uma mesma ideia.</li>
                        </ul>
                        <p className='font-ZenMaru text-xl font-normal'> A imagem abaixo traz outros exemplos:</p>
                        <img className="object-scale-down p-8" src='assets\ExamplesOfBiases.png' alt='Imagem com 20 exemplos de vieses algorítmicos'></img>
                    </div>
                    <img className="h-[395px] object-scale-down p-8" src='assets\GenderBias.jpg' alt='Imagem representando viés de gênero - inteligência artificial'></img>
                </div>
            </div>
        </div>
    );
}

export default IaViesPage;