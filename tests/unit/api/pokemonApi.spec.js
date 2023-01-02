import pokemonApi from "@/api/pokemonApi";

describe("Pokemo api", () => {
  test("Axios debe estar configurado con Api de pokemon", () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon"
    );
  });
});
