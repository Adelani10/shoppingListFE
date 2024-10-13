"use client";
import { createContext, useContext, useState } from "react";

interface AppContextInterface {
  darkmode: boolean;
}

const ProjectContext = createContext<AppContextInterface | null>(null);

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};

const ProjectProvider = ({ children }: any) => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <ProjectContext.Provider value={{ darkmode }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
