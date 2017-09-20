var dir = process.argv[2]
var ext = process.argv[3]

var mymodule = require('./makeitmodular1.js')
mymodule(dir, ext, function (err, files) {
  if (err) { return console.error(err) }
  files.forEach(function (file) {
    console.log(file)
  })
})
