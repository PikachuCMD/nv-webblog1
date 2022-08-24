let experss = require('express')
const app = experss()

app.get('/status', function (req, res){
    res.send('ควยยย')
})

let port = 8081

app.listen(port, function (){
    console.log('server running on ' + port)
})