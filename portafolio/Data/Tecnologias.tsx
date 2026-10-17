import { DiMsqlServer } from "react-icons/di";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { LuWorkflow } from "react-icons/lu";
import {
  SiDotnet,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const Tecnologias = [
  { nombre: "React", icon: <SiReact />, tittle: "React", color: "icon-surface-primary", textColor: "icon-content" },
  { nombre: "Node.js", icon: <FaNodeJs />, tittle: "Node.js", color: "icon-surface-secondary", textColor: "icon-content" },
  { nombre: "Tailwind CSS", icon: <SiTailwindcss />, tittle: "Tailwind CSS", color: "icon-surface-primary", textColor: "icon-content" },
  { nombre: "TypeScript", icon: <SiTypescript />, tittle: "TypeScript", color: "icon-surface-primary", textColor: "icon-content" },
  { nombre: "GitHub", icon: <FaGithub />, tittle: "GitHub", color: "icon-surface-primary", textColor: "icon-content" },
  { nombre: "SQL Server", icon: <DiMsqlServer />, tittle: "SQL Server", color: "icon-surface-tertiary", textColor: "icon-content" },
  { nombre: "PostgreSQL", icon: <SiPostgresql />, tittle: "PostgreSQL", color: "icon-surface-tertiary", textColor: "icon-content" },
  { nombre: ".NET", icon: <SiDotnet />, tittle: ".NET", color: "icon-surface-secondary", textColor: "icon-content" },
  { nombre: "Zustand", icon: <LuWorkflow />, tittle: "Zustand", color: "icon-surface-secondary", textColor: "icon-content" },
];
