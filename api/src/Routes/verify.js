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
    <br/>
    <p>Correo verificado ✔</p>
    </center>
</body>
</html>
    `)

    } catch (error) {
        console.log(error);
    }

});

module.exports = routerVerify;