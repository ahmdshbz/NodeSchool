var http = require('http')
var url = process.argv[2]

function callback (response) {
  response.setEncoding('utf8')
  response.on('error', function (err) {
    return console.error(err)
  })
  response.on('data', function (data) {
    console.log(data)
  })
  response.on('end', function (end) {
    /* Nothing */
  })
}

http.get(url, callback)
