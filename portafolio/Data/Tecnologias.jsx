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
    color: "icon-color",
    textColor: "icon-text",
  },
  {
    nombre: "Node.js",
    icon: <FaNodeJs />,
    tittle: "Node.js",
    color: "icon-color2",
    textColor: "icon-text",
  },
  {
    nombre: "GitHub",
    icon: <FaGithub />,
    tittle: "GitHub",
    color: "icon-color",
    textColor: "icon-text",
  },
  {
    nombre: "SQL Server",
    icon: <DiMsqlServer />,
    tittle: "SQL Server",
    color: "icon-color3",
    textColor: "icon-text",
  },
  {
    nombre: "PostgreSQL",
    icon: <SiPostgresql />,
    tittle: "PostgreSQL",
    color: "icon-color3",
    textColor: "icon-text",
  },
  {
    nombre: "TypeScript",
    icon: <SiTypescript />,
    tittle: "TypeScript",
    color: "icon-color",
    textColor: "icon-text",
  },
  {
    nombre: "Tailwind CSS",
    icon: <SiTailwindcss />,
    tittle: "Tailwind CSS",
    color: "icon-color",
    textColor: "icon-text",
  },
  {
    nombre: ".NET",
    icon: <SiDotnet />,
    tittle: ".NET",
    color: "icon-color2",
    textColor: "icon-text",
  },
  {
    nombre: "Zustand",
    icon: <LuWorkflow />,
    tittle: "Zustand",
    color: "icon-color2",
    textColor: "icon-text",
  },
];
