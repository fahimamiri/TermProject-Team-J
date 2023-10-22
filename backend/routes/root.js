const express = require("express");
const router = express.Router(); 
router.get("/", (_request, response) =>{
response.send("Hello hello Team J form Route !!!")
})

module.exports = router; 