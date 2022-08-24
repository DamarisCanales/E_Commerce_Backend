const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Lips',
  },
  {
    category_name: 'Eyes',
  },
  {
    category_name: 'Foundation',
  },
  {
    category_name: 'Powders',
  },
  {
    category_name: 'Makeup Tools',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
