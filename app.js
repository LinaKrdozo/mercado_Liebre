const express = require('express');
const app = express();
const path = require('path');

//funcion estatica
app.use(express.static(path.resolve(__dirname, './public')));

//levantar nuestro servidor
const port= process.env.PORT || 3000;
app.listen(port,()=>console.log("Servidor corriendo en el puerto" + port));

//app.listen(3000,()=>{
  //  console.log('servidor corriendo')
//})

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

//ruta registro
app.get('/registro', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/registro.html'))
})

//ruta login
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'))
})