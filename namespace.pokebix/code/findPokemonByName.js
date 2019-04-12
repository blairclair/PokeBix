var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findPokemonByName (Pokemon_name) {
  var pokemon = http.getUrl('https://pokeapi.co/api/v2/pokemon/' + Pokemon_name.toLowerCase(), { format: 'json' });
  return pokemon;
}