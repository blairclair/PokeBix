var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findPokemonMoves (Pokemon) {
  var track = 0;
  for (move in Pokemon.moves) {
    var move = {'name': Pokemon.moves[move].move.name,
               'url': Pokemon.moves[move].move.url};
    Pokemon.move_info.push(move);
  }
  return Pokemon;
}
