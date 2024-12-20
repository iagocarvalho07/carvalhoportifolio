"use client";

import React from 'react';
import { MacbookScroll } from './ui/macbook-scroll';

const Approach = () => {
  return (
    <div
      className="
    overflow-hidden 
    dark:bg-black-100 
    bg-white 
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
    </div>
  );
};

export default Approach;