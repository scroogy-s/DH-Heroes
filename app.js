const express = require('express');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('/babbage', (req, res)=>{
    res.sendFile(path.join(__dirname,'views','babbage.html'))
})

const port = 3030;
app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})