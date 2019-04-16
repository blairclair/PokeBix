var http = require('http')
var console = require('console')
var config = require('config')
module.exports.function = function findMorePokemonMoves (PokemonMoves_name) {
  console.log(PokemonMoves_name)
  Pokemon_moves = http.getUrl('https://pokeapi.co/api/v2/move/' + PokemonMoves_name, {format: 'json'})
  return Pokemon_moves
}
