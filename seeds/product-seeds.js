const { Product } = require('../models');

const productData = [
  {
    product_name: 'Lips',
    price: 15.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Eyes',
    price: 20.00,
    stock: 25,
    category_id: 2,
  },
  {
    product_name: 'Foundation',
    price: 30.99,
    stock: 12,
    category_id: 3,
  },
  {
    product_name: 'Powders',
    price: 18.99,
    stock: 50,
    category_id: 4,
  },
  {
    product_name: 'Makeup Tools',
    price: 25.99,
    stock: 22,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
