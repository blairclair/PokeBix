var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findPokemonMoves (Pokemon) {
  var track = 0;
  for (var i in Pokemon.moves){
      if (track >= 8)
        break ;
      var tmpMoves = http.getUrl(Pokemon.moves[i].move.url, {format: 'json'})
      Pokemon.move_info[i] = tmpMoves 
    track++;
  }
  return Pokemon;
}
