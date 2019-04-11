var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findPokemonByName (Pokemon_name) {
  var pokemon = http.getUrl('https://pokeapi.co/api/v2/pokemon/' + Pokemon_name, { format: 'json' });
  var species = http.getUrl('https://pokeapi.co/api/v2/pokemon-species/' + Pokemon_name, {format: 'json'})
  var flavor = species.flavor_text_entries
  
  for (var i in flavor){
    if (flavor[i].language.name == "en" && flavor[i].version.name == "red"){
      pokemon.flavor_text = flavor[i].flavor_text
    }
    i++;
  }
  pokemon.extra = species
  console.log(species.version);
  // console.log(pokemon);
  return pokemon;
}