//TODO busqueda de dato Cliente y empleado payments


/** Funcion para traer todas las cuenta de usuario, cliente , payments o otro modelo que tienen el atribute active */
const busquedaDatActive= async (modelo)=>{

    const DatoFiltrado= await modelo.findAll({
        where:{
            active:true
        }
    })

    return DatoFiltrado; 
}

const busquedaDatDesactive= async (modelo)=>{

    const DatoFiltrado= await modelo.findAll({
        where:{
            active:false
        }
    })

    return DatoFiltrado; 
}

//Funciones generales




module.exports = {busquedaDatActive,busquedaDatDesactive};




