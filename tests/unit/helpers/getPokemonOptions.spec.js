import getPokemonOptions, {
  getPokemons,
  getPokemonNames,
} from "@/helpers/PokemonOptions";

import { pokemons } from "../mocks/pokemons.mock";

describe("Pokemon Options helpers", () => {
  test("Debe reqresar un arreglo de números", () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
  });

  test("Debe retornar un arreglo de 4 elementos con nombres de pokemons", async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemons).toStrictEqual(pokemons); //To compare objects
  });

  test("Debe retornar un arreglo mezclado", async () => {
    const pokemonsOpt = await getPokemonOptions();

    expect(pokemonsOpt.length).toBe(4);
    expect(pokemonsOpt).toEqual([
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
    ]);
  });
});
