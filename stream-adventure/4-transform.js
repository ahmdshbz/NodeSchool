var through = require('through2')
var stream = through(write)

function write (buffer, encoding, next) {
    this.push( buffer.toString().toUpperCase() )
    next()
}

//NOTE: end() is optional. The default implementation calls this.push(null)
//function end () {
//    done()
//}

process.stdin.pipe(stream).pipe(process.stdout)
