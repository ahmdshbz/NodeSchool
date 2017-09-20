module.exports = function myfirstmodule (dir, ext, callback) {
  var fs = require('fs')
  var path = require('path')
  var dotExt = '.' + ext
  fs.readdir(dir, function (err, files) {
    if (err) { return callback(err) }
    var filtered = files.filter(function (file) {
      return path.extname(file) === dotExt
    })
    callback(err, filtered)
  })
}
