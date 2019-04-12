var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findTypeByName (Type_name) {
  var response = http.getUrl('https://pokeapi.co/api/v2/type/' + Type_name, { format: 'json' });
  console.log(response);
  return response;
}