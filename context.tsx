"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import data from "./data";
import { nanoid } from "nanoid";

interface AppContextInterface {
  darkmode: boolean;
  setDarkmode: Dispatch<SetStateAction<boolean>>;
  itemsArr: mainItemTypes[];
  itemClickedOn: mainItemTypes | null;
  setItemClickedOn: Dispatch<SetStateAction<mainItemTypes | null>>;
  isItemClicked: boolean;
  setIsItemClicked: Dispatch<SetStateAction<boolean>>;
  addItem: boolean;
  setAddItem: Dispatch<SetStateAction<boolean>>;
  currentList: mainItemTypes[];
  setCurrentList: Dispatch<SetStateAction<mainItemTypes[]>>;
  getCategoriesObj: (arr: mainItemTypes[]) => any;
}

export interface mainItemTypes {
  id: any;
  name: string;
  image: string;
  category: string;
  note: string;
  quantity: number;
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
  const [itemsArr, setItemsArr] = useState<mainItemTypes[]>(data);
  const [darkmode, setDarkmode] = useState<boolean>(false);
  const [itemClickedOn, setItemClickedOn] = useState<mainItemTypes | null>(null);
  const [isItemClicked, setIsItemClicked] = useState<boolean>(false);
  const [addItem, setAddItem] = useState<boolean>(false);
  const [currentList, setCurrentList] = useState<mainItemTypes[]>([]);

  const getCategoriesObj = (arr: mainItemTypes[]) => {
    return arr.reduce((acc: any, cur: mainItemTypes) => {
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
        itemClickedOn,
        setItemClickedOn,
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
