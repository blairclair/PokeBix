var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findRandomPokemon () {
  var num = 1 + Math.floor(Math.random() * 807);
  var response = http.getUrl('https://pokeapi.co/api/v2/pokemon/' + num, { format: 'json' });
  console.log(response);
  return response;
}