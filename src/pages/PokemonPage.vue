<template>
  <h1 v-if="!pokemon">Loading, please wait...</h1>
  <div v-else>
    <h1>Which pokemo is it?</h1>
    <PokemonPicture
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"
    ></PokemonPicture>
    <PokemonOptions
      :optionsPokemon="options"
      @selection="selectPokemon"
    ></PokemonOptions>
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="restartGame">Restart Game</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/PokemonOptions";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      options: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonsArray() {
      this.options = await getPokemonOptions();
      const id = Math.floor(Math.random() * 4);
      this.pokemon = this.options[id];
    },
    selectPokemon(id) {
      this.showPokemon = true;
      this.showAnswer = true;
      this.message = `${this.pokemon.id === id ? "Correct" : "Incorrect"} is ${
        this.pokemon.name
      }`;
    },
    async restartGame() {
      this.pokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      await this.mixPokemonsArray();
    },
  },
  mounted() {
    this.mixPokemonsArray();
  },
};
</script>
