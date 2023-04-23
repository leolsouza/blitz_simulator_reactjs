import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import getChampions from "../services/getChampions";

export const useChampions = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [diffFilter, setDiffFilter] = useState("");

  const { isLoading, data = [] } = useQuery("getChampions", getChampions);

  const difficulties = {
    easy: [1, 2, 3],
    medium: [4, 5, 6, 7],
    hard: [8, 9, 10],
  };

  const filterBySearch = (champion) =>
    !searchFilter ||
    champion.name.toLowerCase().includes(searchFilter.toLowerCase());

  const filterByTag = (champion) =>
    !tagFilter || champion.tags.includes(tagFilter);

  const filterByDiff = (champion) =>
    difficulties[diffFilter]
      ? difficulties[diffFilter].includes(champion.info.difficulty)
      : champion;

  const filteredChampions = useMemo(
    () =>
      Object.values(data)
        .filter(filterBySearch)
        .filter(filterByTag)
        .filter(filterByDiff),
    [data, searchFilter, tagFilter, diffFilter]
  );

  return {
    filteredChampions,
    isLoading,
    searchFilter,
    diffFilter,
    setSearchFilter,
    setTagFilter,
    setDiffFilter,
  };
};
