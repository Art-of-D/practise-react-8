import { useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState();
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar: () => setIsSidebarOpen(true),
        closeSidebar: () => setIsSidebarOpen(false),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
