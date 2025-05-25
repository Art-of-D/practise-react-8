import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
const HomePage = () => {
  const { openModal, openSidebar } = useGlobalContext();
  return (
    <div>
      <h1 className="title">Home Page</h1>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
    </div>
  );
};
export default HomePage;
