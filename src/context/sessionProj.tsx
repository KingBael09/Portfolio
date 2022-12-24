import { createContext, useContext, useState } from "react";
import { typeData } from "../data/failSafe";

export const ProjectContext = createContext<typeData[] | null>(null);

export function DataWrapper({ children }: any) {
  const [state, setstate]: any = useState(null);
  return (
    <ProjectContext.Provider value={[state, setstate]}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  return useContext(ProjectContext);
}
