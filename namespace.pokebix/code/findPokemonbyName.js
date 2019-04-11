var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findPokemonbyName (Pokemon_name) {
  var response = http.getUrl('https://pokeapi.co/api/v2/pokemon/' + Pokemon_name, { format: 'json' });
  console.log(response);
  return response;
}
