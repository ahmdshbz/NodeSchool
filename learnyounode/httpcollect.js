var http = require('http')
var url = process.argv[2]
var dataObtained = ''

http.get(url, gotHttp).on('error', console.error)

function gotHttp (response) {
  response.setEncoding('utf8')
  response.on('error', console.error)
  response.on('data', gotHttpData)
  response.on('end', logData)
}

function gotHttpData (data) {
  dataObtained += data
}

function logData () {
  console.log(dataObtained.length)
  console.log(dataObtained)
}
