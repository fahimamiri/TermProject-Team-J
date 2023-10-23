const { render, resolveInclude } = require("ejs");
const express = require("express");
const router = express.Router(); 


router.get("/:name",(request, response)=>{
    const {name} = request.params;

    response.render('root',{ name });
    //response.render('ingame',{name});

});

//ubdate the jse
//     response.send(
//         `<html>
//         <head>
//         <titile>
//         Uno Game
//         </title>
//         <body>
//         <p> Hello ${name}!</p>
//         <//body>
//         </head>
//         </html>`
//     );

// });

//remove the commemnt out the have define root 
//defualt
router.get("/", (_request, response) =>{
response.send("Hello hello Team J form Route !!!")
})

module.exports = router; 