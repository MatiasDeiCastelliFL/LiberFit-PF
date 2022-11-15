const { Router } = require('express');
const { Clients } = require('../db')

const routerVerify = Router();

routerVerify.get("/verify", async (req, res) => {
    try {
         const { correo, active } = req.query
         const user = await Clients.findOne({ where: { email: correo } })
            user.active = active;
            user.save()
            res.status(201).send(`
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Verificación</title>
        </head>
        <body style="background-color: cadetblue;">
        <center>
            <h1 style="color: azure;">Bienvenido a Liberfit </h1>
            <br/>
            <img src="https://res.cloudinary.com/dim2wnoej/image/upload/v1668474391/WhatsApp_Image_2022-10-20_at_5.42.28_PM_pfncqb.jpg" alt="img aqui" width="600px" height="400px" style="border-radius: 10px 100px / 120px;" >
        
            <br/>
            <h3 style="color: azure;">Correo verificado ✔</h3>
            </center>
        </body>
        </html>
            `)
        

     

    } catch (error) {
        console.log(error);
    }

});

module.exports = routerVerify;