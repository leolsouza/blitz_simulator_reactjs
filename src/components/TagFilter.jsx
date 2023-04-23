const TagFilter = ({ handleTagFilter }) => {
  return (
    <div className="flex justify-between w-full px-3 ">
      <button onClick={() => handleTagFilter("")}>TODOS</button>
      <button onClick={() => handleTagFilter("Assassin")}>ASSASSINOS</button>
      <button onClick={() => handleTagFilter("Fighter")}>LUTADORES</button>
      <button onClick={() => handleTagFilter("Mage")}>MAGOS</button>
      <button onClick={() => handleTagFilter("Marksman")}>ATIRADORES</button>
      <button onClick={() => handleTagFilter("Support")}>SUPORTES</button>
      <button onClick={() => handleTagFilter("Tank")}>TANQUES</button>
    </div>
  );
};

export default TagFilter;
