import SPSsoftware from "../src/Images/SPSsoftware-CGnWAbXJ.png";
import AutoMundo from "../src/Images/AutoMunoIMG-Chddp5Md.png";
import GlobalGazette from "../src/Images/GlobalGazzette-P890ck_q.png";
import GourmetGO from "../src/Images/GourmetGO-BXGKzaL9.png";

type Project = {
  nombre: string;
  description: string;
  imageAlt: string;
  imagen: string;
  tecnologias: string[];
  link: string;
  demo: string;
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
];