var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function pokemonEvolvesTo (Pokemon) {
  var species = http.getUrl(Pokemon.species.url, {format: 'json'});
  var chain = http.getUrl(species.evolution_chain.url, {format: 'json'}).chain
  var outname = '';
  console.log(chain);
  console.log(Pokemon.name)
  //while (chain.evolves_to && chain.evolves_to.length > 0) {
    if (chain.species.name == Pokemon.name)
      outname = chain.evovles_to[0].species.name;
    else
      chain = chain.evolves_to[0];
    console.log(chain);
  //}
  return Pokemon;
}
