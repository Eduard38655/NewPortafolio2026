type Service = {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
  iconColor?: string;
};

export const ServicesData: Service[] = [
  {
    id: 1,
    title: "service_frontend_title",
    description: "service_frontend_description",
    backgroundColor: "action-primary",
  },
  {
    id: 2,
    title: "service_apps_title",
    description: "service_apps_description",
    backgroundColor: "action-secondary",
  },
  {
    id: 3,
    title: "service_ui_title",
    description: "service_ui_description",
    backgroundColor: "accent-tertiary",
  },
  {
    id: 4,
    title: "service_optimization_title",
    description: "service_optimization_description",
    backgroundColor: "service-accent-4",
    iconColor: "#1D283A",
  },
];
