module.exports.function = function findTypeRelations(Type, Type_effect) {
  var names = [];
  var effect_key = Type_effect.toString().replace(/ /g, '_'); // replace with boxby model -> js arr/enum
  for (var e=0; e<Type.damage_relations[0][effect_key].length; e++)
    names[e] = Type.damage_relations[0][effect_key][e].name;
  return names;
}