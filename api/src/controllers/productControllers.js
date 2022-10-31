const { crearProduct, buscarProduct } = require("../services/productServices");
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
        const { name, price, stock, code, image, description, size, brand } =
            req.body;

        const datoProduct = await crearProduct(
            name,
            price,
            stock,
            code,
            image,
            description,
            size,
            brand
        );
        res.status(200).json(datoProduct);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getProduct, postProduct };
