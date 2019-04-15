var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findPokemonMoves (Pokemon) {
  for (move in Pokemon.moves)
    Pokemon.move_info.push({'name': Pokemon.moves[move].move.name});
  return Pokemon;
}
