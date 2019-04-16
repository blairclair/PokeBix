var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findPokemonStat (Pokemon) {
  for (var i in Pokemon.stats){
    if (Pokemon.stats[i].stat.name == "hp"){
      Pokemon.display_hp = Pokemon.stats[i].base_stat;
    }
    else if (Pokemon.stats[i].stat.name == "speed"){
      Pokemon.display_speed = Pokemon.stats[i].base_stat;
    }
    else if (Pokemon.stats[i].stat.name == "attack"){
      Pokemon.display_attack = Pokemon.stats[i].base_stat;
    }
    else if (Pokemon.stats[i].stat.name == "defense"){
      Pokemon.display_defense = Pokemon.stats[i].base_stat;
    }
    else if (Pokemon.stats[i].stat.name == "special-attack"){
      Pokemon.display_special_attack = Pokemon.stats[i].base_stat;
    }
    else if (Pokemon.stats[i].stat.name == "special-defense"){
      Pokemon.display_special_defense = Pokemon.stats[i].base_stat;
    }
   }
  Pokemon.stats.display_attack = 90
return Pokemon
}

