var http = require('http')
var console = require('console')
var config = require('config')
module.exports.function = function findPokemonLevelForMove (Pokemon, Pokemon_move) {
  var moves = Pokemon.moves;
  var version_group_details;
  console.log(Pokemon_move);

  for (var i in moves){
   console.log(moves[i]);  
    if (moves[i].move.name == Pokemon_move.toString()){
     version_group_details = moves[i].version_group_details;
      break;
    }
  }

  for (var j in version_group_details){
    j++;
  }
   return version_group_details[j - 1].level_learned_at;
}
