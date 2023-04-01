import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [champions, setChampions] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getChampions = async () => {
      try {
        setLoading(true);

        var url =
          "http://ddragon.leagueoflegends.com/cdn/12.14.1/data/pt_BR/champion.json";
        const response = await axios.get(url);
        setLoading(false);
        setChampions(response.data.data);
      } catch {
        setLoading(false);
        setError(true);
      }
    };
    getChampions();
  }, []);

  const getChampionsImage = (championName) =>
    `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`;

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

      <div className="px-5">
        <ul className="flex justify-start w-full flex-wrap">
          {Object.values(champions).map((champion) => (
            <li className="px-3 py-3 text-base text-center" key={champion.id}>
              <img
                className="h-80 w-60"
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                alt=""
              />
              <p>{champion.name.toUpperCase()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
