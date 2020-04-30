const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))
app.get('/',(req, res) => res.send('Hello World!'))
app.post('/',(req, res) => res.send('got post request'))
app.get('/users',function(req, res) {res.send('get /users request')})

app.listen(port, () => console.log('Example app listening on port',port))
