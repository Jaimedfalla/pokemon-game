import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { pokemons } from "../mocks/pokemons.mock";

describe("Pokemon Options component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        optionsPokemon: pokemons,
      },
    });
  });

  test("Should match with snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should be shown the 4 options", () => {
    const [p1, p2, p3, p4] = wrapper.findAll("li");

    expect(p1.text()).toBe(pokemons[0].name);
    expect(p2.text()).toBe(pokemons[1].name);
    expect(p3.text()).toBe(pokemons[2].name);
    expect(p4.text()).toBe(pokemons[3].name);
  });

  test("Should emit select event with its respective parameters", () => {
    const [p1, p2, p3, p4] = wrapper.findAll("li");
    p1.trigger("click");
    p2.trigger("click");
    p3.trigger("click");
    p4.trigger("click");

    expect(wrapper.emitted("selection").length).toBe(4);
    expect(wrapper.emitted("selection")[0]).toStrictEqual([pokemons[0].id]);
    expect(wrapper.emitted("selection")[1]).toStrictEqual([pokemons[1].id]);
    expect(wrapper.emitted("selection")[2]).toStrictEqual([pokemons[2].id]);
    expect(wrapper.emitted("selection")[3]).toStrictEqual([pokemons[3].id]);
  });
});
