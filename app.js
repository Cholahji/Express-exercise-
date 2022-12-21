const express = require('express');
require('dotenv').config();
const router = require('./routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const First_route = '/api/v1';
 


const PORT = process.env.PORT || 3000;

app.use(First_route , router);



app.get( First_route  , (req, res) => {
    res.status(300).send('hello nigeria')
});

app.post('/thot', (req, res) =>{

    const post = req.body;
    console.log(req.body)
     res.status(300).json({message:
                 `them is it`, post})
     
     })


app.listen(PORT, () => {
    console.log('this app is running on port',(PORT))
});