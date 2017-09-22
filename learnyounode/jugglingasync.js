var http = require('http')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]
var data1 = ''
var data1_done = false
var data2 = ''
var data2_done = false
var data3 = ''
var data3_done = false

http.get(url1, gotHttp1).on('error', console.error)
http.get(url2, gotHttp2).on('error', console.error)
http.get(url3, gotHttp3).on('error', console.error)

function gotHttp1 (response) {
  response.setEncoding('utf8')
  response.on('error', console.error)
  response.on('data', function (data) {
    data1 += data
  })
  response.on('end', function () {
    data1_done = true
    tryToPrint()
  })
}

function gotHttp2 (response) {
  response.setEncoding('utf8')
  response.on('error', console.error)
  response.on('data', function (data) {
    data2 += data
  })
  response.on('end', function () {
    data2_done = true
    tryToPrint()
  })
}

function gotHttp3 (response) {
  response.setEncoding('utf8')
  response.on('error', console.error)
  response.on('data', function (data) {
    data3 += data
  })
  response.on('end', function () {
    data3_done = true
    tryToPrint()
  })
}

function tryToPrint () {
  if (data1_done && data2_done && data3_done) {
    console.log(data1)
    console.log(data2)
    console.log(data3)
  }
}
