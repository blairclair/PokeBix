var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findPokemonSpecies (Pokemon) {
  url = Pokemon.species.url
  var species = http.getUrl(url, {format: 'json'})
  Pokemon.PokemonSpecies = species
  var flavor = species.flavor_text_entries
  for (var i in flavor){
    if (flavor[i].language.name == "en"){
      Pokemon.flavor_text = flavor[i].flavor_text
      // console.log(typeof(Pokemon.flavor_text))
      // console.log(JSON.stringify(Pokemon.flavor_text))
      Pokemon.flavor_text.replace(/(\r\n|\n|\r)+/gm, ' ').replace(/ +/g, ' ') 
      break;
    }
    i++;
  }
   Pokemon.image_set = [
     {url: "/images/Pokedex.gif"}
   ]
  return Pokemon
}
