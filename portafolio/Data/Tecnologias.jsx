import { FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { LuWorkflow } from "react-icons/lu";

export const Tecnologias = [
  {
    nombre: "React",
    icon: <SiReact />,
    tittle: "React",
  },
  {
    nombre: "Node.js",
    icon: <FaNodeJs />,
    tittle: "Node.js",
  },
  {
    nombre: "GitHub",
    icon: <FaGithub />,
    tittle: "GitHub",
  },
  {
    nombre: "SQL Server",
    icon: <DiMsqlServer />,
    tittle: "SQL Server",
  },
  {
    nombre: "PostgreSQL",
    icon: <SiPostgresql />,
    tittle: "PostgreSQL",
  },
  {
    nombre: "TypeScript",
    icon: <SiTypescript />,
    tittle: "TypeScript",
  },
  {
    nombre: "Tailwind CSS",
    icon: <SiTailwindcss />,
    tittle: "Tailwind CSS",
  },
  {
    nombre: ".NET",
    icon: <SiDotnet />,
    tittle: ".NET",
  },
  {
    nombre: "Zustand",
    icon: <LuWorkflow />,
    tittle: "Zustand",
  },
];
