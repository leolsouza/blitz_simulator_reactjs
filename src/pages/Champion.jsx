import { Link } from "react-router-dom";
import { useChampion } from "../hooks/useChampion";

const Champion = () => {
  const { data, id, isLoading, error } = useChampion();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const getChampionsImage = (championName) =>
    `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`;

  return (
    <div className="text-center my-10">
      <Link to="/champions">
        <div className="font-bold text-blue-500">LISTA DE CAMPEÕES</div>
      </Link>
      <div className="m-auto">
        <img src={getChampionsImage(data.id)} className="w-96 inline" />
        <div>{data.title.toUpperCase()}</div>
        <div>{data.name.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default Champion;
