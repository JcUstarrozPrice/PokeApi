import { useGetPokemonsQuery, useLazyGetPokemonByNameQuery } from './services/api';
import Loader from './components/Loader/Loader';
import './App.css'
import { useState, type Key } from 'react';

function App() {

  const [offset, setOffset] = useState<number>(0);
  const [name, setName] = useState<string>('');

  const { data, isLoading, error } = useGetPokemonsQuery(offset);
  const [triggerGetPokemonByName, results] = useLazyGetPokemonByNameQuery();


  const handleNext = () => {
    setOffset(offset + 20);
  }

  const handlePrevious = () => {
    setOffset(offset - 20);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await triggerGetPokemonByName(name);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value.toLocaleLowerCase());
  }

  if (isLoading) return <Loader />
  if (error) return <p>Error al conectar con el servidor</p>;
  console.log(results.data);

  return (
    <div className='container'>
      <h1>Pokedex</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Buscar pokemon" required value={name} onChange={handleChange} />
        <input type="submit" value="Buscar" />
      </form>
      {
        results.data && (
          <div className='card'>
            <p>{results.data.name}</p>
            <img src={results.data.sprites.front_default} alt={results.data.name} />
            {
              results.data.types.map((type: {
                type: {
                  slot: Key | null;
                  name: string;
                };
              }) => (
                <p key={type.type.slot}>{type.type.name}</p>
              ))
            }
          </div>
        )
      }
      {
        results.error && <p className='not-found'>Pokemon no encontrado</p>
      }


      <div className='cards-container'>
        {
          data?.results.map((pokemon) => (
            <div key={pokemon.name} className='card'>
              <p>{pokemon.name}</p>
            </div>
          ))
        }
      </div>
      <div className='pagination-container'>
        <button onClick={handlePrevious}>← Anterior</button>
        <button onClick={handleNext}>Siguiente →</button>
      </div>





    </div>
  )
}

export default App
