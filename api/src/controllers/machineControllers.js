const {crearMachine,enviarMachine,actualizarMachine,borrarMachine}= require("../services/machineServices")

const postMachine = async (req, res) => {
    try {
        const { 
            name,
            muscle,
            LocacionId
        } = req.body
        const {path}=req.file
        await crearMachine(
            name,
            path,
            muscle,
            LocacionId
        )
        res.status(200).json({msg:"Machine guardada"})
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
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
    const {path}=req.file
    const {id}= req.params
   const { name,muscle,} = req.body

   await  actualizarMachine(name,path,muscle,id)
   res.status(201).json({msg:'machine actaulizada'})
   } catch (error) {
    res.status(500).json({msg:'machine no se actualizo'})
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
