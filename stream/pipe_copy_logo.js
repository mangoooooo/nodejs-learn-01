var fs = require('fs')

fs.createReadStream('../buffer/logo.PNG').pipe(fs.createWriteStream('pipe_logo.png'))