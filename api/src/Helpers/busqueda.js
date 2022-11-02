//TODO busqueda de dato Cliente y empleado payments


/** Funcion para traer todas las cuenta de usuario, cliente , payments activo */
const busquedaDat= async (modelo)=>{

    const DatoFiltrado= await modelo.findAll({
        where:{
            active:true
        }
    })

    return DatoFiltrado; 
}

module.exports = {busquedaDat};




