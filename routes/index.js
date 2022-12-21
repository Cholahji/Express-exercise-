const { parse } = require('dotenv');
const { application } = require('express')
const express = require('express')

const router = express.Router()

const shoppingList = [
        { model: "samsung",id: 1, price: 1000 , created: new Date()},
        { model: "apple", id: 2 ,price: 7000, created: new Date()},
        { model: "motorolla", id: 12 ,price: 2500, created: new Date()},
        { model: "sagem", id: 4, price: 6000,  created: new Date()},
        { model: "nokia", id: 5, price: 2000,  created: new Date()}
    ];




router.get('/products', (req, res) => {
    res.status(200).json({products:  shoppingList})
})

router.post('/postproduct', (req, res) =>{
   let newId = shoppingList.length + 1;

   const newProduct = { 
               model: req.body.model,
               id : newId,
               price : req.body.price,
               createdOn: new Date()
 };
    shoppingList.push(newProduct);
    res.status(201).json("new product has been updated", newProduct);
});

router.get('/:id', (req, res) => { 
    const product = shoppingList.find(device  => device.id === parseInt(req.params.id));  
    if (product){
        res.status(200).json(product);
     }
     else {
        res.status(404).json({ message: 'product not found'});}

})

router.patch('/:id', (req, res) => {
    let product = shoppingList.find(device => device.id === parseInt(req.params.id));
    if (product) {
      let updated = {
          model: req.body.model,
          id: product.id,
          price: req.body.price,
          createdOn: new Date()}
  }
    else {
      res.status(404).json({ message: 'product not found'});
    }
  });

  router.delete('/:id', (req, res) => {
    const product = shoppingList.find(device => device.id === parseInt(req.params.id));
    if(product) {
        if (product === -1) 
            return res.status(404).json({})

        shoppingList.splice(product, 1)
        res.status(200).json({message: 'the product has been removed'})
    }
  })

module.exports =  router;
