const {crearMachine,enviarMachine,actualizarMachine,borrarMachine}= require("../services/machineServices")

const postMachine = async (req, res) => {
    try {
        const { 
            name,
            image,
            muscle,
            LocacionId
        } = req.body

        await crearMachine(
            name,
            image,
            muscle,
            LocacionId
        )
        res.status(200).json({msg:"Machine guardada"})
    } catch (error) {
        res.status(404).json({msg:"Machine no guardada"})
    }
}

const getMachine = async (req, res) => {
    try {
        const datoMachine = await  enviarMachine()
        res.status(200).json(datoMachine) 
    } catch (error) {
        res.status(400).json(error)
    }
    
}
const putMachine = async (req, res) => {
   try {
    const {id}= req.params
   const { name,image,muscle,} = req.body
   await  actualizarMachine(name,image,muscle,id)
   res.status(201).json({msg:'machine actaulizada'})
   } catch (error) {
    res.status(404).json({msg:'machine no se actaulizo'})
   }
   
 }
 const deleteMachine = async (req, res) => {
   try {
    const {id}= req.params
    await  borrarMachine(id)
    res.status(201).json({msg:'machine eliminada'})
   } catch (error) {
    res.status(404).json({msg:'machine no se elimino'})
   }
}

module.exports ={ postMachine,getMachine,putMachine,deleteMachine} 
