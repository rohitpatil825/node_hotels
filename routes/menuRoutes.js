const express = require('express')
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

//Post method to add Menu Item
router.post('/',async(req,res)=>{
    try{
      const data = req.body
      const newMenu = new MenuItem(data)
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error: ' internal Server Error'});
    }
  })
  
  //Get method to get the Menu Items
  router.get('/', async(req, res)=>
  {
    try {
      const data = await MenuItem.find();
  
      console.log('data fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({error: ' internal Server Error'});
    }
  })

  module.exports = router;