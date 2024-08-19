const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body
const PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
  res.send('Welcome to my hotel ... How i can help you?, we have list of menus ')
})
// app.get('/idli', function (req, res) {
//     var customized_idli = {
//         name:'rava idli',
//         size: '10cm diameter
//         is_sambhar:true,
//         is_chutney:false

//     }
//     res.send(customized_idli)
//   })
//Post route to add a person






//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuRoutes');

//use the routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000,()=>{
    console.log("sever is running at port 3000");
})