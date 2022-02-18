const http = require('http')

const host ='http://localhost'
const port = 5000

http.createServer((req, res) => {
    res.end('<h1> foiii</h1>')
}).listen(5000, () => console.log(`rodando...${host}:${port}`))