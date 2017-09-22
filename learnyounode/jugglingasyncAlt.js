var http = require('http')
var url = [process.argv[2], process.argv[3], process.argv[4]]
var dataBuf = ['', '', '']
var dataDone = [false, false, false]

getHttp()

function getHttp () {
  for (var i = 0; i < 3; ++i) {
    http.get(url[i], (response, i) => gotHttp).on('error', console.error)
  }
}

function gotHttp (response, i) {
  response.setEncoding('utf8')
  response.on('error', console.error)
  response.on('data', function (data) {
    console.log(data)
    dataBuf[i] += data
  })
  response.on('end', function () {
    dataDone[i] = true
    tryToPrint()
  })
}

function tryToPrint () {
  if (dataDone[0] && dataDone[1] && dataDone[2]) {
    for (var i = 0; i < 3; ++i) {
      console.log(dataBuf[i])
    }
  }
}
