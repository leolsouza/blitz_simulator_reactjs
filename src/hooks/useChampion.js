import { useParams } from "react-router-dom";
import getChampionSelected from "../services/getChampionSelected";
import { useQuery } from "react-query";

export const useChampion = () => {
  const { id } = useParams();

  const {
    isLoading,
    data = [],
    error,
  } = useQuery(["getChampionSelected", id], async () =>
    getChampionSelected(id)
  );

  return { data, id, isLoading, error };
};
