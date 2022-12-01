import axios from 'axios';

export const NewPlayerPage = () => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-expect-error
    const name = e.currentTarget.name.value;
    await axios.post('http://localhost:3000/api/new_player', { name });
    alert('Cadastrou jogador')
  }

  return (
    <div>
      <h1>Cadastrar novos players</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome do player" />
        <button>Cadastrar</button>
      </form>
    </div>
  );
};


export default NewPlayerPage;