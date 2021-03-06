const http = require('http');
const bl = require('bl');
const sources = process.argv.slice(2);
let count = 0;
let content = [];

sources.forEach(processUrl);

function processUrl (source, index) {
  http.get(sources[index], function (response) {
    response.pipe(bl((err, data) => processBuffer(err, data, index)));
  });
}

function processBuffer (error, data, index) {
  if (error) {
    return console.error(error);
  }
  content[index] = data.toString();
  if (++count === sources.length) {
    content.forEach((el) => console.log(el));
  }
}
