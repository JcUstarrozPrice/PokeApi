import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Pokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}

interface PokemonResult {
  name: string;
  url: string;
}

interface PokemonByName {
  types: any;
  name: string;
  sprites: { front_default: string };
}

const limit: number = 150;

export const pokemonApi = createApi({
  reducerPath: 'getPokemons',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/'
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<Pokemon, number>({
      query: (offset: number = 0) => `pokemon?limit=${limit}&offset=${offset}`,
    }),
    getPokemonByName: builder.query<PokemonByName, string>({
      query: (name: string | null) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery } = pokemonApi;