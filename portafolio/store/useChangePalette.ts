import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ChooseColor {
  nombre: string;
  loading: boolean;
  error?: string;
  cargarColor: (nombre: string) => void;
}

export const useChangePalette = create<ChooseColor>()(
  persist(
    (set) => ({
      nombre: "violeta",
      loading: false,
      error: "",

      cargarColor: (nombre) => {
        set({
          nombre,
          error: "",
        });
      },
    }),
    {
      name: "palette-storage",
    },
  ),
);
