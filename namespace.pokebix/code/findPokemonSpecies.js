var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findPokemonSpecies (Pokemon) {
  url = Pokemon.species[0].name
  var species = http.getUrl(url, {format: 'json'})
  Pokemon.PokemonSpecies = species
  return Pokemon
}
