const { crearPayment, buscarPaymentMembership, buscarPaymentTotal, ModificarPayment } = require("../services/paymentServices")
const postPayment = async (req, res) => {
  try {
    const {
      membership,
      amount
    } = req.body

    const datoPayment = await crearPayment(
      membership,
      amount
    )
    res.status(200).json(datoPayment)
  } catch (error) {
    console.log(error)
  }
}

const getPayment = async (req, res) => {
  const { name } = req.query
  if (membership) {
    const DatoPayment = await buscarPaymentMembership(name);
    if (DatoPayment) {
      res.status(200).json({ DatoPayment });
    } else {
      res.status(400).json({ error: "Pago no encontrado" });
    }
  } else {
    const datoPaymentTotal = await buscarPaymentTotal();
    res.status(200).json({ datoPaymentTotal });
  }
}

const modificarPayment= async(req,res)=>{
  try {
      const datoValidacion=validate(req.body);
      if(datoValidacion.length>0){
     
          res.status(400).json(datoValidacion);
      }else{
          const paymentModificar = await ModificarPayment(req.body);
          if(paymentModificar){
              res.status(200).json({message:"Dato modificado"});
          }else{
              res.status(400).json({message:"El pago a modificar no existe"});
          }
      }
  } catch (error) {
      res.status(500).json({message:error.message});
  }
}

module.exports = { postPayment, getPayment, modificarPayment }
