import { Link } from "react-router-dom";

const ChampionsList = ({ champions }) => {
  const getChampionsImage = (championName) =>
    `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`;

  return (
    <div className="px-5">
      <ul className="flex justify-start w-full flex-wrap">
        {champions.map((champion) => (
          <li className="px-3 py-3 text-base text-center" key={champion.id}>
            <Link to={champion.id}>
              <img
                className="h-80 w-60"
                src={getChampionsImage(champion.id)}
                alt=""
              />
              <p>{champion.name.toUpperCase()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChampionsList;
