import axios from "axios";
import { Player } from "../utils/models";
import { GetStaticProps } from "next";

type PlayersListProps = {
  players: Player[];
};

const PlayersListIncrementalStaticGenerationPage = (props: PlayersListProps) => {
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

export default PlayersListIncrementalStaticGenerationPage;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("executou getStaticProps");
  const { data } = await axios.get("http://localhost:8000/players");
  console.log(data);
  //trecho é executado apenas no servidor
  return {
    props: {
      players: data,
    },
    revalidate: 40
  };
};
