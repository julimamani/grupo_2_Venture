const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.listen(3001, ()=>{
    console.log('Corriendo servidor en puerto 3001');
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/sign-in', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/sign-in.html'))
})