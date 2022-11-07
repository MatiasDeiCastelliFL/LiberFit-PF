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
} = require("../Helpers/busqueda");

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
            image,
            LocacionId,
        } = req.body;
        // const { path } = req.file
        const datoProduct = await crearProduct(
            name,
            price,
            stock,
            code,
            description,
            size,
            brand,
            active,
            image,
            LocacionId
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

        const accountActive = await CuentaActiva(id, Employees);
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
    const productoActive = await busquedaDatActive(products);

    res.status(200).json({ productoActive });
};

const FiltrarProductoDesactivado = async (req, res) => {
    const ProductoInactive = await busquedaDatDesactive(products);

    res.status(200).json({ ProductoInactive });
};

const CantInacativo = async (req, res) => {
    const cantidadActivo = await contarDatoInactivo(products);

    res.status(200).json({ cantidadActivo });
};

const CantActivo = async (req, res) => {
    const cantidadActivo = await contarDatoActivo(products);

    res.status(200).json({ cantidadActivo });
};

module.exports = {
    getProduct,
    postProduct,
    deleteProduct,
    activarProduc,
    inactivarProduct,
    CantActivo,
    CantInacativo,
    FiltrarProductoDesactivado,
    FiltrarProductoActivo
};
