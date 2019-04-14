var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findPokemonbyID (Pokemon_id) {
  var pokemon = http.getUrl('https://pokeapi.co/api/v2/pokemon/' + Pokemon_id.toString(), { format: 'json' });
  var url = pokemon.species.url
  var species = http.getUrl(url, {format: 'json'})
  pokemon.PokemonSpecies = species
   var flavor = species.flavor_text_entries
  for (var i in flavor){
    if (flavor[i].language.name == "en"){
      pokemon.flavor_text = flavor[i].flavor_text
      // console.log(typeof(Pokemon.flavor_text))
      // console.log(JSON.stringify(Pokemon.flavor_text))
      pokemon.flavor_text.replace(/(\r\n|\n|\r)+/gm, ' ').replace(/ +/g, ' ')
      break;
    }
  }
  pokemon.image_set = [
     {url: "/images/Pokedex.gif"}
   ]
  return pokemon;
}


