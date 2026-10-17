import type { ReactNode } from "react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
type SocialLink = {
  icons: ReactNode;
  nombre: string;
  link: string;
};

// Set this to the real profile URL to show the LinkedIn link.
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/feed/";

export const SocialMedia: SocialLink[] = [
  {
    icons: <LuGithub aria-hidden="true" />,
    nombre: "GitHub",
    link: "https://github.com/Eduard38655",
  },
   
  {
    icons: <LuLinkedin aria-hidden="true" />,
    nombre: "LinkedIn",
    link: LINKEDIN_PROFILE_URL,
  },
];