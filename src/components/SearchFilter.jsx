const SearchFilter = ({ value, handleSearchFilter, champions }) => {
  return (
    <div className="relative">
      <input
        className="h-full px-3"
        type="text"
        placeholder="BUSCAR"
        value={value}
        onChange={(e) => handleSearchFilter(e.target.value)}
        list="search"
      />
      <datalist
        id="search"
        className="absolute inset-x-0 top-full max-h-[100px] overflow-y-auto"
      >
        {champions.map((champion) => (
          <option key={champion.id}>{champion.name.toUpperCase()}</option>
        ))}
      </datalist>
    </div>
  );
};

export default SearchFilter;
