"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import data from "./data.json";

interface AppContextInterface {
  darkmode: boolean;
  setDarkmode: Dispatch<SetStateAction<boolean>>;
  itemsArr: dataTypes[];
  itemToBeAdded: dataTypes | null;
  setItemToBeAdded: Dispatch<SetStateAction<dataTypes | null>>;
  isItemClicked: boolean;
  setIsItemClicked: Dispatch<SetStateAction<boolean>>;
  addItem: boolean;
  setAddItem: Dispatch<SetStateAction<boolean>>;
  currentList: dataTypes[] | null;
  setCurrentList: Dispatch<SetStateAction<dataTypes[]>>;
  getCategoriesObj: (arr: dataTypes[]) => any
}

export interface dataTypes {
  name: string;
  image: string;
  category: string;
  note: string;
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
  const [itemsArr, setItemsArr] = useState<dataTypes[]>(data);
  const [darkmode, setDarkmode] = useState<boolean>(false);
  const [itemToBeAdded, setItemToBeAdded] = useState<dataTypes | null>(null);
  const [isItemClicked, setIsItemClicked] = useState<boolean>(false);
  const [addItem, setAddItem] = useState<boolean>(false);
  const [currentList, setCurrentList] = useState<dataTypes[]>([])


  const getCategoriesObj = (arr: dataTypes[]) => {
    return arr.reduce((acc: any, cur: dataTypes) => {
      if (!acc[cur.category]) {
        acc[cur.category] = [];
      }
      acc[cur.category].push(cur);
      return acc;
    }, {});
  };

  return (
    <ProjectContext.Provider
      value={{
        darkmode,
        setDarkmode,
        itemsArr,
        itemToBeAdded,
        setItemToBeAdded,
        isItemClicked,
        setIsItemClicked,
        addItem,
        setAddItem,
        currentList,
        setCurrentList,
        getCategoriesObj,

      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
