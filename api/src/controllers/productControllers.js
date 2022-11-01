const { crearProduct, buscarProduct,eliminarProduct } = require("../services/productServices");
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
        const { name, price, stock, code, description, size, brand ,image,LocacionId} =
            req.body;
            // const { path } = req.file
        const datoProduct = await crearProduct(
            name,
            price,
            stock,
            code,
            description,
            size,
            brand,
            image,
            LocacionId
        );

        await 
        res.status(200).json(datoProduct);
    } catch (error) {
        console.log(error);
    }
};

const deleteProduct= async(req,res)=> {
    try {
        const {id}=req.params
        const data =await eliminarProduct(id)
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getProduct, postProduct,deleteProduct };
