var console = require('console')

module.exports.function = function pokemonCry (Pokemon_name) {
  var input = {}
  
  urlString = "https://play.pokemonshowdown.com/audio/cries/" + Pokemon_name + ".mp3"
  console.log(urlString)
  input.audioItem = [{
    id: 1,
    stream: [
      {
        url: urlString,
        format: "mp3"
      }
    ],
    title: "Pokemon cry",
    subtitle: "Ur mom",
    artist: "Ur mom",
    albumName: "Your mom",
    albumArtUrl: ""
  }]
  input.category = 'SINGLE'
  input.displayName = "Pokemon Capsule"
  input.repeatMode = "ALL"
  
  return input
}