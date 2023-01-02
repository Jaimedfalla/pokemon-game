import { shallowMount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage.vue";
import { pokemons } from "../mocks/pokemons.mock";

describe("Pokemon page component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          options: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
          isCorrect: false,
        };
      },
    });
  });

  test("Shoul call mixPokemonArray method when mounting", () => {
    const mixPokemon = jest.spyOn(PokemonPage.methods, "mixPokemonsArray");
    shallowMount(PokemonPage);
    expect(mixPokemon).toHaveBeenCalled();
  });

  test("Should match with snapshot when pokemons have loaded", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should show Pokemon Picture and Pokemon Options components", () => {
    const picture = wrapper.find("pokemon-picture-stub");
    const options = wrapper.find("pokemon-options-stub");

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();
    expect(picture.attributes("pokemonid")).toBe(pokemons[0].id.toString());
    console.log(options.attributes("optionspokemon"));
    expect(options.attributes("optionspokemon")).toBeTruthy();
  });

  test("Should call check answer method", async () => {
    await wrapper.vm.selectPokemon(pokemons[0].id);
    const h2 = wrapper.find("h2");
    expect(h2.exists()).toBeTruthy();
    expect(h2.text()).toContain("Correct");
    expect(wrapper.vm.isCorrect).toBe(true);
  });
});
