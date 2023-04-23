import axios from "axios";

const getChampionSelected = async (championId) => {
  const url = `http://ddragon.leagueoflegends.com/cdn/12.14.1/data/pt_BR/champion/${championId}.json`;
  const response = await axios.get(url);
  const data = response.data.data;
  const [champion] = Object.values(data);
  return champion;
};

export default getChampionSelected;
