var http = require('http')
var console = require('console')
var config = require('config')
module.exports.function = function findMorePokemonMoves (PokemonMoves_name) {
  var m = http.getUrl('https://pokeapi.co/api/v2/move/' + PokemonMoves_name, {format: 'json'});
  for (e in m.effect_entries)
    m.effect_entries[e].effect = m.effect_entries[e].effect.replace(/\$effect_chance/, m.effect_chance);
  return m;
}
