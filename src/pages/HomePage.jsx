import ChampionsList from "./ChampionsList";
import TagFilter from "../components/TagFilter";
import SearchFilter from "../components/SearchFilter";
import DifficultyFilter from "../components/DifficultyFilter";
import { useChampions } from "../hooks/useChampions";

const HomePage = () => {
  const {
    filteredChampions,
    isLoading,
    searchFilter,
    diffFilter,
    setSearchFilter,
    setTagFilter,
    setDiffFilter,
  } = useChampions();

  return (
    <div className="">
      <div className="mt-10 mb-5 text-center">
        <h2 className="text-5xl ">ESCOLHA SEU</h2>
        <h1>CAMPEÃO</h1>
        <p>
          Com mais de 140 Campeões, você encontrará a combinação perfeita para
          seu estilo de jogo. Especialize-se em um estilo ou em todos.
        </p>
      </div>

      <div className="ml-5 h-16 flex items-center border-gray-500 border rounded-md px-2">
        <SearchFilter
          value={searchFilter}
          handleSearchFilter={setSearchFilter}
          champions={filteredChampions}
        />
        <TagFilter handleTagFilter={setTagFilter} />
        <DifficultyFilter value={diffFilter} handleDiffFilter={setDiffFilter} />
      </div>
      <ChampionsList champions={filteredChampions} />
    </div>
  );
};

export default HomePage;
