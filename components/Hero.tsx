import React, { Suspense } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { AnimatedTestimonials } from './ui/animated-testimonials'
import { myImagesAndFrases } from '@/data/indexMoc'

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>


            {/**
       *  UI: Grid and Dot Backgrounds
       *  Link: https://ui.aceternity.com/components/grid-and-dot-backgrounds
       */}
            <div className="h-screen w-full dark:bg-black-100 bg-black-100 dark:bg-grid-white/[0.03] bg-grid-white/[0.03] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
            <div className="flex flex-row sm:flex-col md:flex-row lg:flex-row justify-center items-center">
                <Suspense fallback={<div>Carregando...</div>}>
                    <div className='flex justify-center relative my-20 z-10'>
                        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center'>
                            <h2 className='uppercase tracking-widest text-xs text-center text-blue-400 max-w-80 font-semibold' >
                                Web Magicamente Dinamico com Next.js
                            </h2>
                            <TextGenerateEffect
                                className='text-center text-[40] md:text-5xl lg:text-6xl text-white font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'
                                words='Transformando Ideias em Experiencia de usuario perfeita'
                            />
                            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white font-medium'>
                                Olá eu sou Iago um Desenvolvedor FullStack
                            </p>
                            <a href="#about">
                                <MagicButton
                                    title="Veja meu Trabalho" icon={<FaLocationArrow />} positon={"right"}
                                />
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-center relative my-20 z-10'>
                        <AnimatedTestimonials testimonials={myImagesAndFrases} />
                    </div>
                </Suspense>
            </div>

        </div>
    )
}

export default Hero