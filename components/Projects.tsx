import React from 'react';

interface Project {
    title: string;
    description: string;
    technologies: string[];
}

const projects: Project[] = [
    {
        title: "Projeto 1",
        description: "Descrição do projeto 1",
        technologies: ["React", "TypeScript", "Tailwind"]
    },
    {
        title: "Projeto 2",
        description: "Descrição do projeto 2",
        technologies: ["Next.js", "Node.js", "MongoDB"]
    },
    {
        title: "Projeto 3",
        description: "Descrição do projeto 3",
        technologies: ["React Native", "Firebase", "Redux"]
    }
];

export default function Projects() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
                Projetos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-black-200 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 text-white">{project.title}</h3>
                        <p className="text-white-100 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="px-3 py-1 bg-black-300 rounded-full text-sm text-white-100">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 