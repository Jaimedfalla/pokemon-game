/* eslint-disable prettier/prettier */
import pokemonApi from "@/api/pokemonApi";

export const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));

  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons()
    .sort(() => Math.random() - 0.5)
    .splice(0, 4);

  const pokemons = await getPokemonNames(mixedPokemons);
  
  return pokemons;
};

export const getPokemonNames = async ([a, b, c, d] = []) => {
  const promises = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const [pokemon1,pokemon2,pokemon3,pokemon4] = await Promise.all(promises);

  return [
    {name:pokemon1.data.name,id:pokemon1.data.id},
    {name:pokemon2.data.name,id:pokemon2.data.id},
    {name:pokemon3.data.name,id:pokemon3.data.id},
    {name:pokemon4.data.name,id:pokemon4.data.id},
  ]
};

export default getPokemonOptions;
