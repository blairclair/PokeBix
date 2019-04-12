var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findRandomPokemon () {
  var num = 1 + Math.floor(Math.random() * 807);
  var pokemon = http.getUrl('https://pokeapi.co/api/v2/pokemon/' + num, { format: 'json' });
  var species = http.getUrl('https://pokeapi.co/api/v2/pokemon-species/' + num, {format: 'json'})
  var flavor = species.flavor_text_entries
  for (var i in flavor){
    if (flavor[i].language.name == "en"){
      pokemon.flavor_text = flavor[i].flavor_text
    }
    i++;
  }
  pokemon.PokemonSpecies = species
  return pokemon;
}