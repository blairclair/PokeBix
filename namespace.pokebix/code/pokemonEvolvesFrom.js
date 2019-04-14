module.exports.function = function pokemonEvolvesFrom (Pokemon) {
  if (!Pokemon)
    return (null)
  if (!typeof Pokemon.PokemonSpecies)
    return (null)
  return Pokemon.PokemonSpecies.evolves_from_species.name
}
