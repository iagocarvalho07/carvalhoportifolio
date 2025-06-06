import Approach from "@/components/Approach";
import Grind from "@/components/Grind";
import Myfooter from "@/components/Myfooter";
import RecentProjects from "@/components/RecentProjects";
import WorkExperience from "@/components/WorkExperience";
import { FaHome } from "react-icons/fa";
import { FaDiagramProject, FaEnvelope, FaPersonChalkboard } from "react-icons/fa6";
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
  loading: () => <div>Carregando...</div>
});

const DynamicFloatingNav = dynamic(() => import('@/components/ui/FloatingNav').then(mod => mod.FloatingNav), {
  ssr: false,
  loading: () => <div>Carregando...</div>
});

export default function Page() {
  return (
    <Suspense>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full overflow-auto">
          <DynamicFloatingNav navItems={[
            { name: 'home', link: "#", icon: <FaHome /> },
            { name: 'Sobre', link: "#about", icon: <FaPersonChalkboard /> },
            { name: 'Projetos', link: "#projects", icon: <FaDiagramProject /> },
            { name: 'Experiencia', link: "#experience", icon: <FaEnvelope /> },
          ]} />
          <DynamicHero />
          <Grind />
          <RecentProjects />
          <WorkExperience />
          <Approach />
        </div>
        <Myfooter />
      </main>
    </Suspense>
  );
}
