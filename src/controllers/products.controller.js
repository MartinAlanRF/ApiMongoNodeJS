const Product = require ("../models/product.model.js");


const getProducts = async (req, res) =>{
    const products = await Product.find()

    return res.json({
        msg: "Se obtuvieron los productos",
        data:  products
    });
};


const postProducts = async (req, res) =>{
    const {name, description, price} = req.body

    const product = {
        name: name,
        description: description,
        price: price,
    };

    const newProduct = await Product.create(product);

    return res.json({
        msg: `Se creo un nuevo product ${newProduct}`,
        data: newProduct
    });
};


const upDateProducts = async (req, res) =>{
    const { idProducto } = req.params
    const {name, description, price} = req.body

    const product = {
        name: name,
        description: description,
        price: price,
    };

    const productUpdated = await Product.findByIdAndUpdate(idProducto, product, {new: true} )

    return res.json({
        msg: "Producto Actualizado",
        data:  productUpdated
    });
}


const deleteProducts = async (req, res) =>{
    const { idProducto } = req.params

    const productDeleted = await Product.findByIdAndRemove(idProducto);

    return res.json({
        msg: "Producto eliminado",
        data:  productDeleted
    });
}

module.exports = { getProducts, postProducts, upDateProducts, deleteProducts};


