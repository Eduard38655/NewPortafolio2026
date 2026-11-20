import AutoMundo from "../src/Images/AutoMunoIMG-Chddp5Md.png";
import GlobalGazette from "../src/Images/GlobalGazzette-P890ck_q.png";
import GourmetGO from "../src/Images/GourmetGO-BXGKzaL9.png";
import OlivoSystem from "../src/Images/OlivosSystem.png";
import SPSsoftware from "../src/Images/SPSsoftware-CGnWAbXJ.png";
import HuevosFerreras from "../src/Images/HuevosFerreras.webp";
import NexoraTech from "../src/Images/NexoraTech.webp";

 
type Project = {
  nombre: string;
  description: string;
  imageAlt: string;
  imagen: string;
  tecnologias: string[];
  featured?: boolean;
  link?: string;
  demo?: string;
  youtube?: string;
};

export const Proyects: Project[] = [
  {
    nombre: "proyect-nom-1",
    description: "proyect-dec-1",
    imageAlt: "project-image-alt-1",
    imagen: SPSsoftware,
    tecnologias: ["React", "CSS"],
    link: "https://github.com/Eduard38655/SPS-software",
    demo: "https://eduard38655.github.io/SPS-software/",
  },
  {
    nombre: "proyect-nom-2",
    description: "proyect-dec-2",
    imageAlt: "project-image-alt-2",
    imagen: AutoMundo,
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    link: "https://github.com/Eduard38655/AutoMundo",
    demo: "https://eduard38655.github.io/AutoMundo/",
  },
  {
    nombre: "proyect-nom-3",
    description: "proyect-dec-3",
    imageAlt: "project-image-alt-3",
    imagen: GlobalGazette,
    tecnologias: ["React"],
    link: "https://github.com/Eduard38655/PersonalBlog",
    demo: "https://eduard38655.github.io/PersonalBlog/",
  },
  {
    nombre: "proyect-nom-4",
    description: "proyect-dec-4",
    imageAlt: "project-image-alt-4",
    imagen: GourmetGO,
    tecnologias: ["React"],
    link: "https://github.com/Eduard38655/E-commersePage",
    demo: "https://eduard38655.github.io/E-commersePage/",
  },
  {
    nombre: "proyect-nom-5",
    description: "proyect-dec-5",
    imageAlt: "project-image-alt-5",
    imagen: OlivoSystem,
    tecnologias: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "ASP.NET Core Minimal APIs",
      "Dapper",
      "CASL",
      "ASP.NET Core Identity",
    ],
    featured: true,
    link: "https://github.com/Eduard38655/lavanderiaOlivos",
    youtube: "https://youtu.be/4Aq2ZnmdBy0",
  },
  {
    nombre: "proyect-nom-6",
    description: "proyect-dec-6",
    imageAlt: "project-image-alt-6",
    imagen: HuevosFerreras,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https://huevos-fereras.netlify.app/",
  },
  {
    nombre: "proyect-nom-7",
    description: "proyect-dec-7",
    imageAlt: "project-image-alt-7",
    imagen: NexoraTech,
    tecnologias: ["React", "TypeScript", "Tailwind CSS"],
    demo: "https://nexoras-tech.netlify.app/#servicios",
  },
];