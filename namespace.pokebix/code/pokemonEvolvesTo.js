var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function pokemonEvolvesTo (Pokemon) {
  url = 'https://pokeapi.co/api/v2/evolution-chain/' + (Pokemon.id).toString();
  var response = http.getUrl(url, {format: 'json'});
  console.log(response.chain.evolves_to[0])
  return response.chain.evolves_to[0].species.name;
}
