
const data= require("./gym.json")



const getIdcedes =async (req, res)=>{
try {
    const {id}=req.params
const result =data[0].sedes.filter((e) => e.id === id )

res.status(201).json(result)
} catch (error) {
    res.status(404).json(error)
}
} 

export default getIdcedes;