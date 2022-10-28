import crearProduct from '../services/productServices'

const postProduct = async (req, res) => {
    try {
        const { 
          name,
          price,
          stock,
          code,
          image,
          description,
          size,
          brand
        } = req.body

        const datoProduct= await crearProduct(
            name,
            price,
            stock,
            code,
            image,
            description,
            size,
            brand
            )
        res.status(200).json(datoProduct)
    } catch (error) {
        console.log(error)
    }
}

export default postProduct
