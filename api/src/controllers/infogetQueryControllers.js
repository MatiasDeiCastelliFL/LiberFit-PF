const data= require("./gym.json")

const getQuery =async (req, res)=>{
    try {
        const {name} = req.query
        const result =data[0].exercises.filter((e) => e.name === name )
        res.status(201).json(result)
    } catch (error) {
        res.status(404).json(error)
    }
} 

export default getQuery;