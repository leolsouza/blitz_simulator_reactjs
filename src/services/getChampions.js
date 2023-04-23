import axios from "axios";

const getChampions = async () => {
  const url =
    "http://ddragon.leagueoflegends.com/cdn/12.14.1/data/pt_BR/champion.json";
  const response = await axios.get(url);
  const data = response.data.data;
  return Object.values(data);
};

export default getChampions;
