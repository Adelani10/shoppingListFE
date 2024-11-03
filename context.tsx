"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import data from "./data";
import { redirect, usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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
  savedList: saved[];
  weekdays: string[];
  showCheckout: boolean;
  setShowCheckout: Dispatch<SetStateAction<boolean>>;
  getTopItems: () => any;
  getTopCategories: () => any;
  groupedLists: any;
  totalsByMonth: any;
  total: (data: any) => number;
  dataForGraph: any;
  search: (text: string) => void;
  pathName: string;
  router: AppRouterInstance;
  renderAuth: boolean;
  setRenderAuth: Dispatch<SetStateAction<boolean>>;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export interface mainItemTypes {
  id: any;
  name: string;
  image: string;
  category: string;
  note: string;
  quantity: number;
}

export interface saved {
  id: any;
  title: string;
  items: mainItemTypes[];
  completed: boolean;
  localDate: string;
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
  const [itemClickedOn, setItemClickedOn] = useState<mainItemTypes | null>(
    null
  );
  const [isItemClicked, setIsItemClicked] = useState<boolean>(false);
  const [addItem, setAddItem] = useState<boolean>(false);
  const [currentList, setCurrentList] = useState<mainItemTypes[]>([]);
  const [savedList, setSavedList] = useState<saved[]>([]);
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  const weekdays: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const router = useRouter();
  const pathName = usePathname();
  const [renderAuth, setRenderAuth] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const total = (data: any) =>
    Object.values(data).reduce((acc: number, cur: any) => acc + cur, 0);

  const totalsByMonth = savedList.reduce((acc: any, cur: saved) => {
    const [year, month, day] = cur.localDate.split("-");
    const monthYear = new Date(
      parseInt(year),
      parseInt(month) - 1
    ).toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    if (!acc[monthYear]) {
      acc[monthYear] = 0;
    }

    acc[monthYear] += cur.items.length;
    return acc;
  }, {});

  const groupedLists = savedList.reduce((acc: any, cur: saved) => {
    const [year, month, day] = cur.localDate.split("-");
    const dateKey = new Date(
      parseInt(year),
      parseInt(month) - 1
    ).toLocaleDateString("default", {
      month: "long",
      year: "numeric",
    });

    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }

    acc[dateKey].push(cur);
    return acc;
  }, {});

  const getCategoriesObj = (arr: mainItemTypes[]) => {
    return arr.reduce((acc: any, cur: mainItemTypes) => {
      if (!acc[cur.category]) {
        acc[cur.category] = [];
      }
      acc[cur.category].push(cur);
      return acc;
    }, {});
  };

  const getTopItems = () => {
    const map: any = new Map();

    savedList.forEach((list) => {
      list.items.forEach((item) => {
        const itemName = item.name;
        const itemQty = item.quantity;
        map.set(itemName, (map.get(itemName) || 0) + itemQty);
      });
    });
    const sortedItems = [...map.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    return Object.fromEntries(sortedItems);
  };

  const getTopCategories = () => {
    const map: any = new Map();
    savedList.forEach((list) => {
      list.items.forEach((item) => {
        const categoryName = item.category;
        const categoryQty = item.quantity;
        map.set(categoryName, (map.get(categoryName) || 0) + categoryQty);
      });
    });
    const sortedCats = [...map.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    return Object.fromEntries(sortedCats);
  };

  const sortedTotalsByMonth = Object.keys(totalsByMonth)
    .sort((a, b) => {
      const [monthA, yearA] = a.split(" ");
      const [monthB, yearB] = b.split(" ");

      const monthToNumber = (month: any) =>
        new Date(Date.parse(`${month} 1, 1970`)).getMonth();

      const yearDifference = parseInt(yearA) - parseInt(yearB);
      if (yearDifference === 0) {
        return monthToNumber(monthA) - monthToNumber(monthB);
      }
      return yearDifference;
    })
    .reduce((acc: any, key: any) => {
      acc[key] = totalsByMonth[key];
      return acc;
    }, {});

  const dataForGraph = Object.entries(sortedTotalsByMonth).map(
    ([monthYear, totalItems]) => ({
      monthYear,
      totalItems,
    })
  );

  const search = (text: string) => {
    try {
      // if (text && !pathName.startsWith("/search")) {
      //   router.push(`/search/${text}`);
      // } else {
      //   console.log("sure");
      // }

      router.push(`/search/${text}`);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getTopItems();
    getTopCategories();

    const token = localStorage.getItem("authToken");
    if (!token) {
      router.replace("/auth/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [savedList, router, isAuthenticated]);

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
        savedList,
        weekdays,
        showCheckout,
        setShowCheckout,
        getTopItems,
        getTopCategories,
        groupedLists,
        totalsByMonth,
        total,
        dataForGraph,
        search,
        pathName,
        router,
        renderAuth,
        setRenderAuth,
        setIsAuthenticated
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
