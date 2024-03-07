import { useEffect, useState } from "react";
import { usePokemon } from "./PokemonProvider";

const useFilteredPokemon = (searchWord) => {
  const [filteredPokemons, setFilteredPokemons] = useState();
  const { pokemons } = usePokemon();

  useEffect(() => {
    const filteredPokemons = pokemons?.filter(({ name }) => {
      return name.includes(searchWord?.toLowerCase());
    });
    const newPokemons =
      searchWord !== "" && filteredPokemons?.length > 0
        ? filteredPokemons
        : pokemons;

    setFilteredPokemons(newPokemons);
  }, [searchWord, pokemons]);

  return filteredPokemons;
};

export default useFilteredPokemon;
