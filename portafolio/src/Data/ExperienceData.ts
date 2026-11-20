export interface ExperienceItem {
  roleKey: string;
  periodKey: string;
  show: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    roleKey: "experience_role",
    periodKey: "experience_period",
    show: false,
  },
];

export const hasVisibleExperiences = experiences.some(
  (experience) =>
    experience.show &&
    experience.roleKey.trim().length > 0 &&
    experience.periodKey.trim().length > 0,
);
