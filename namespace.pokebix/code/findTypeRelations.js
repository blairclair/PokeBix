const type_effect_enum = {
  DOUBLE_DAMAGE_TO: 'double_damage_to',
  DOUBLE_DAMAGE_FROM: 'double_damage_from',
  HALF_DAMAGE_TO: 'half_damage_to',
  HALF_DAMAGE_FROM: 'half_damage_from',
  NO_DAMAGE_TO: 'no_damage_to',
  NO_DAMAGE_FROM: 'no_damage_from'
}


module.exports.function = function findTypeRelations(Type, Type_effect) {
  var names = [];
  // console.log(Type_effect)
  // console.log(Type.damage_relations)
  // console.log(Type.damage_relations[0])
  // console.log(Type.damage_relations[0][Type_effect.toString().replace(/ /g, '_')])
  for (var which in Type.damage_relations[0][Type_effect.toString().replace(/ /g, '_')]) // <-- totally works
    names.push(which.name) // <-- doesn't append anything
  return names
}