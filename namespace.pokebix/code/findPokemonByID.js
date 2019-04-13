var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findPokemonbyID (Pokemon_id) {
  var pokemon = http.getUrl('https://pokeapi.co/api/v2/pokemon/' + Pokemon_id.toString(), { format: 'json' });
  var species = http.getUrl('https://pokeapi.co/api/v2/pokemon-species/' + Pokemon_id, {format: 'json'})
  pokemon.image_set = [
     {url: "/images/Pokedex.gif"}
   ]
  return pokemon;
}


