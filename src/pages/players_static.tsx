import { useEffect, useState } from "react";
import axios from "axios";
import { Player } from "../utils/models";


const PlayersListStaticPage = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/players").then((res) => {
      setPlayers(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Jogadores disponíveis</h1>
      <ul>
        {players.map((player, key) => (
          <li key={key}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersListStaticPage;
