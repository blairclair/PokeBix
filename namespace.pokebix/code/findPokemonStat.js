module.exports.function = function findPokemonStat (Pokemon) {
  var pokeStats = Pokemon.stats;
  
  for (var i in stats){
    if (stats[i].stat.name == "hp")
     Pokemon.PokemonDisplayStats_hp = stats[i].base_stat
  }
return Pokemon
}

