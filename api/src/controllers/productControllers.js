const {
    crearProduct,
    buscarProduct,
    eliminarProduct,
    inactivarProducto,
    activarProducto,
} = require("../services/productServices");
const {
    busquedaDatActive,
    busquedaDatDesactive,
    contarDatoActivo,
    contarDatoInactivo,
    MostrarDatoMultipleInactivo,
    MostrarDatoMultipleActivo,
} = require("../Helpers/busqueda");
const {Products, Locacions}  = require('../db') 


const getProduct = async (req, res) => {
    try {
        const products = await buscarProduct();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};
const postProduct = async (req, res) => {
    try {
        const {
            name,
            price,
            stock,
            code,
            description,
            size,
            brand,
            active,
            LocacionId,
        } = req.body;
        const { path } = req.file
        const datoProduct = await crearProduct(
            name,
            price,
            stock,
            code,
            description,
            size,
            brand,
            active,
            LocacionId,
            path
        );

        await res.status(200).json(datoProduct);
    } catch (error) {
        console.log(error);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await eliminarProduct(id);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
};

const inactivarProduct = async (req, res) => {
    try {
        const { id } = req.body;
        const desactivarCuenta = await CuentaDesactivar(id, Employees);
        if (desactivarCuenta === true) {
            await inactivarProducto(id);

            res.status(200).json("El producto se desactivo correctamente");
        } else {
            res.status(400).json("La cuenta ya se encuentra desactivado");
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};

/* Verifica que la cuenta se encuentra desactivada, si esta la
 cuenta desactivada le va a permitr activa su cuenta sino le va a decir que su cuenta ya se encuentra activada*/
const activarProduc = async (req, res) => {
    try {
        const { id } = req.body;

        const accountActive = false//await CuentaActiva(id, Employees);
        if (accountActive === false) {
            await activarProducto(id);
            res.status(200).json("El producto se activo correctamente");
        } else {
            res.status(400).json("El producto ya se encuentra activado");
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const FiltrarProductoActivo= async (req, res) => {
    const productoActive = await busquedaDatActive(Products);

    res.status(200).json({ productoActive });
};

const FiltrarProductoDesactivado = async (req, res) => {
    const ProductoInactive = await busquedaDatDesactive(Products);

    res.status(200).json({ ProductoInactive });
};

const CantInacativo = async (req, res) => {
    const cantidadInactivo = await contarDatoInactivo(Products);

    res.status(200).json({ cantidadInactivo });
};

const CantActivo = async (req, res) => {
    const cantidadActivo = await contarDatoActivo(Products);

    res.status(200).json({ cantidadActivo });
};

const FiltrarProductoActivoConSede= async(req,res)=>{
    const productoActive= await MostrarDatoMultipleActivo(Products,Locacions);

    res.status(200).json({productoActive});
}

const FiltrarProductoInactivoConSede= async(req,res)=>{
    
    const productoInactive= await MostrarDatoMultipleInactivo(Products,Locacions);

    res.status(200).json({productoInactive});
}

module.exports = {
    getProduct,
    postProduct,
    deleteProduct,
    activarProduc,
    inactivarProduct,
    CantActivo,
    CantInacativo,
    FiltrarProductoDesactivado,
    FiltrarProductoActivo,
    FiltrarProductoInactivoConSede,
    FiltrarProductoActivoConSede
};
