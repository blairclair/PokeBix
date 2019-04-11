var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findPokemonbyID (Pokemon_id) {
  var response = http.getUrl('https://pokeapi.co/api/v2/pokemon/' + Pokemon_id.toString(), { format: 'json' });
  console.log(response);
  return response;
}


