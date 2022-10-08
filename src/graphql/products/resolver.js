const { products_mock_data } = require('../../helper/read_mock_data');
const { paginate } = require('../../helper/pagination');

// get file data to javascript object
let products = products_mock_data();

// Root resolver
const productsResolver = {
    // query callback
    products: () => {
        return products;
    },

    product({ id }) {
        return products.find((prod) => prod.id == id);
    },

    productByPaginate({ per_page, page_number }) {
        const productsWithPagination = paginate(products, per_page, page_number);
        return productsWithPagination;
    },

    // mutation callback
    createProduct: ({ title, description, price, stock, brand, category }) => {
        let newProduct = {};
        newProduct.id = products.length + 1;
        newProduct.title = title;
        newProduct.description = description;
        newProduct.price = price;
        newProduct.stock = stock;
        newProduct.brand = brand;
        newProduct.category = category;
        newProduct.thumbnail = `https://mockx-api.herokuapp.com/rest-api/v1/images?text=${title}&height=300&width=400`
        products.push(newProduct);
        return newProduct;
    },

    updateProduct: ({ id, title, description, price, stock, brand, category }) => {
        products.map(function (prod) {
            if (prod.id == id) {
                prod.title = title || prod.title;
                prod.description = description || prod.description;
                prod.price = price || prod.price;
                prod.stock = stock || prod.stock;
                prod.brand = brand || prod.brand;
                prod.category = category || prod.category;
            }
        });
        return products.find((prod) => prod.id == id);
    },

    deleteProduct: ({ id }) => {
        let deletedProduct = products.find((product) => product.id == id);
        products = products.filter(function (prod) {
            return prod.id != id;
        });
        return deletedProduct;
    },
};

module.exports = { productsResolver };
