var http = require('http')
var console = require('console')
var config = require('config')
module.exports.function = function findpoke () {
  
  var response = http.getUrl('https://pokeapi.co/api/v2/characteristic/2', { format: 'json' });
   console.log(response);
  return response;
}
