const {Clients}= require('../db')
const {Router} =require('express')
const { transporter } = require('../config/nodemailer')

const routerContraseña = Router()

routerContraseña.post('/recuperacion', async(req, res)=>{
try {
    const {correo}=req.body
    const data = await Clients.findOne({
        where:{
            email:correo
        }
    })
    if (data) {
        await transporter.sendMail({
            from: '"Recuperación de contraseña" <liberfit.xyz@gmail.com>', 
            to: correo, 
            subject: "Recuperacion de contraseña Liberfit ✔", 
            html:  `<div><h3>Cuenta</h3>
            <p>Username: <strong>${data.email} </strong> </p>
            <p>password:<strong>${data.password} </strong></p> <div/>` 
          }); 
          res.status(201).json({msg:'Contraseña recuperada'})
    } else {
        res.status(500).json({msg:'Correo no registrado o incorrecto'})
    }
   
} catch (error) {
    console.log(error);
}
})

module.exports=routerContraseña;