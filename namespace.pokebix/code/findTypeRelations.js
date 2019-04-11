const type_effect_enum = {
  DOUBLE_DAMAGE_TO: 'double damage to',
  DOUBLE_DAMAGE_FROM: 'double damage from',
  HALF_DAMAGE_TO: 'half damage to',
  HALF_DAMAGE_FROM: 'half damage from',
  NO_DAMAGE_TO: 'no damage to',
  NO_DAMAGE_FROM: 'no damage from'
}


module.exports.function = function findTypeRelations(Type, Type_effect) {
  var names = new Array(3);
  var count = 0
    switch (Type_effect) {
      case type_effect_enum.DOUBLE_DAMAGE_TO:
        for (var x in Type.damage_relations.double_damage_to) {
          names[count] = Type.damage_relations.double_damage_to[x].name
          count++
        }
      break;
      case type_effect_enum.DOUBLE_DAMAGE_FROM:
        for (var x in Type.damage_relations.double_damage_from) {
          names[count] = Type.damage_relations.double_damage_from[x].name
          count++
        }
      break;
      case type_effect_enum.HALF_DAMAGE_TO:
        for (var x in Type.damage_relations.half_damage_to) {
          names[count] = Type.damage_relations.half_damage_to[x].name
          count++
        }
      break;
      case type_effect_enum.HALF_DAMAGE_FROM:
          for (var x in Type.damage_relations.half_damage_from) {
          names[count] = Type.damage_relations.half_damage_from[x].name
          count++
        }
      break;
      case type_effect_enum.NO_DAMAGE_TO:
        for (var x in Type.damage_relations.no_damage_to) {
          names[count] = Type.damage_relations.no_damage_to[x].name
          count++
        }
      break;
      case type_effect_enum.NO_DAMAGE_FROM:
        for (var x in Type.damage_relations.no_damage_from) {
          names[count] = Type.damage_relations.no_damage_from[x].name
          count++
        }
    }
    return (names)
}