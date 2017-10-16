var through = require('through2')
var stream = through(write)
var split = require('split')

var count = 0
function write (buffer, encoding, next) {
    ++count
    if (count % 2) {
        this.push(buffer.toString().toLowerCase() + '\n')
    } else {
        this.push(buffer.toString().toUpperCase() + '\n')
    }
    next()
}

process.stdin
    .pipe(split())
    .pipe(stream)
    .pipe(process.stdout)
