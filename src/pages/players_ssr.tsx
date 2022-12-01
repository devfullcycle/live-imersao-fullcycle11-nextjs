import axios from "axios";
import { Player } from "../utils/models";
import { GetServerSideProps } from "next";

type PlayersListProps = {
  players: Player[];
};

const PlayersListPage = (props: PlayersListProps) => {
  const { players } = props;

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

export default PlayersListPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("executou getServerSideProps");
  
  const { data } = await axios.get("http://localhost:8000/players");
  console.log(data);
  //trecho é executado apenas no servidor
  return {
    props: {
      players: data,
    },
  };
};

//Pagina estatica
//Pagina SSR - runtime
//Pagina SSG - estatico/dinamico