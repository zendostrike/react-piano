import { useContext, createContext } from "react";

export const PianoContext = createContext(null);

export function usePianoContext() {
  return useContext(PianoContext);
}
