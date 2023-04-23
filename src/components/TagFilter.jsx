import { useMediaQuery } from "react-responsive";

const TagFilter = ({ handleTagFilter }) => {
  const isMobile = useMediaQuery({ maxWidth: 1280 });

  return (
    <>
      {isMobile ? (
        <div className="flex justify-center w-full px-3 ">
          <select
            className="w-2/4 text-center"
            onChange={(e) => handleTagFilter(e.target.value)}
          >
            <option value="">TODOS</option>
            <option value="Assassin">ASSASSINOS</option>
            <option value="Fighter">LUTADORES</option>
            <option value="Mage">MAGOS</option>
            <option value="Marksman">ATIRADORES</option>
            <option value="Support">SUPORTES</option>
            <option value="Tank">TANQUES</option>
          </select>
        </div>
      ) : (
        <div className="flex justify-between w-full px-3 ">
          <button onClick={() => handleTagFilter("")}>TODOS</button>
          <button onClick={() => handleTagFilter("Assassin")}>
            ASSASSINOS
          </button>
          <button onClick={() => handleTagFilter("Fighter")}>LUTADORES</button>
          <button onClick={() => handleTagFilter("Mage")}>MAGOS</button>
          <button onClick={() => handleTagFilter("Marksman")}>
            ATIRADORES
          </button>
          <button onClick={() => handleTagFilter("Support")}>SUPORTES</button>
          <button onClick={() => handleTagFilter("Tank")}>TANQUES</button>
        </div>
      )}
    </>
  );
};

export default TagFilter;
