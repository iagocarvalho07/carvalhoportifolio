import Approach from "@/components/Approach";
import Grind from "@/components/Grind";
import Hero from "@/components/Hero";
import Myfooter from "@/components/Myfooter";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WorkExperience from "@/components/WorkExperience";
import { FaHome } from "react-icons/fa";
import { FaDiagramProject, FaEnvelope, FaPersonChalkboard } from "react-icons/fa6";

export default function page() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full overflow-auto">
        <FloatingNav navItems={[
          { name: 'home', link: "#", icon: <FaHome /> },
          { name: 'Sobre', link: "#about", icon: <FaPersonChalkboard /> },
          { name: 'Projetos', link: "#projects", icon: <FaDiagramProject /> },
          { name: 'Experiencia', link: "#experience", icon: <FaEnvelope /> },
        ]} />
        <Hero />
        <Grind />
        <RecentProjects />
        <WorkExperience />
        <Approach />
      </div>
      <Myfooter />
    </main>

  );
}
