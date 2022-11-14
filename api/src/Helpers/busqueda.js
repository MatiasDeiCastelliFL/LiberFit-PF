//TODO busqueda de dato Cliente y empleado payments

// const {paymentSuscription} = require("../db");


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


const contarDatoActivo= async(modelo)=>{
      const CantTotal= await modelo.count({
     
        where: { active: true },

      })
      
      return CantTotal; 
}


const contarDatoInactivo= async(modelo)=>{
    const CantTotal= await modelo.count({
      where: { active: false },
    })
    return CantTotal; 
}
//Funciones generales entre 2 modelo 

//se manda 
//primero el modelo que va a tener la id contenedor del otro modelo 
//por ej modelo1 = employee , modelo2= locacion

//Estas 2 funciones seria para usar para cliente o empleado
const MostrarDatoMultipleActivo = async(modelo1, modelo2)=>{
     const UserLocal= await  modelo1.findAll({
        include: modelo2,
        where:{
            active:true
        }
     })   
     return UserLocal
}
const MostrarDatoMultipleInactivo = async(modelo1, modelo2)=>{
    const UserLocal= await  modelo1.findAll({
       include: modelo2,
       where:{
           active:false
       }
    })
    
    return UserLocal
}

const MostrarDatorutinaConUser = async(modelo1, modelo2, modelo3,id,idRutine)=>{

    const datos= await modelo2.findAll({
        include:{
            model:modelo1
        },
        where: {
            id:id
        }
    });
    const datosEjercio= await modelo1.findAll({
       include:{
        model:modelo3,
        attributes:["name","repetition","series","video","image","muscle"],
        trough:{
            attributes:[]
        }
       },
       where:{
          id:idRutine
       }
    })
    const variable= datos.concat(datosEjercio)
    return variable 
}

const pagosActivo = async()=>{
    const UserLocal= paymentSuscription.findAll()
    
    return UserLocal
}




module.exports = {busquedaDatActive,busquedaDatDesactive,contarDatoActivo,contarDatoInactivo,MostrarDatoMultipleActivo,MostrarDatoMultipleInactivo,pagosActivo,MostrarDatorutinaConUser};




