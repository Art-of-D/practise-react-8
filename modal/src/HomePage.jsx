import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
const HomePage = () => {
  const { openModal, openSidebar } = useGlobalContext();
  return (
    <>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
    </>
  );
};
export default HomePage;
