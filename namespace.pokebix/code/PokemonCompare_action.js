
module.exports.function = function pokemonCompare_action (PokemonCompareFirst, PokemonCompareSecond) {
  if (PokemonCompareFirst.weight > PokemonCompareSecond.weight){
    return PokemonCompareFirst;
  }
  return PokemonCompareSecond;
}
