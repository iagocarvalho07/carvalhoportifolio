"use client";

import React from 'react';
import { MacbookScroll } from './ui/macbook-scroll';

const Approach = () => {
  return (
    <div
      className="
    overflow-hidden 
    dark:bg-black-100 
    bg-black-100
    w-full 
    max-w-[1280px] 
    mx-auto 
    p-4 
    sm:p-8 
    rounded-lg 
    shadow-md 
    transition 
    duration-300
  " >
      <MacbookScroll
        title={
          <span>
            Juntos, podemos criar um futuro melhor, mais rápido e mais inteligente. <br />
            <span className='text-purple'>Tecnologia e colaboração: a chave para desbloquear sonhos.</span> <br />
          </span>
        }
        src="/logomac.jpeg" // Ensure this path is correct and the image exists
        showGradient={true}
      />
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Minha Abordagem
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">Design</h3>
          <p className="text-white-100">
            Foco em criar interfaces intuitivas e agradáveis, priorizando a experiência do usuário.
          </p>
        </div>
        <div className="bg-black-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">Desenvolvimento</h3>
          <p className="text-white-100">
            Implementação de soluções robustas e escaláveis, utilizando as melhores práticas e tecnologias modernas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;