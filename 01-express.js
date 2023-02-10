const express = require('express');
const app = express();
const port=3000;
//Plantilla
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
//Middleware para controlar que solo acceda a las cosas públicas
app.use(express.static(__dirname+'/public'));
app.get('/', (req, res) => {
    res.render('index'); 
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })