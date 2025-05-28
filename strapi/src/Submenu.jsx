import { useGlobalContext } from "./Context";
import sublinks from "./data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((link) => link.pageId === pageId);
  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={() => setPageId(null)}
    >
      <h4>{currentPage?.page}</h4>
      <div className="submenu-links">
        {currentPage?.links?.map((link) => {
          const { url, icon, label, id } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
