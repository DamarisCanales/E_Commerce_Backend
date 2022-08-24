const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'lipstick',
  },
  {
    tag_name: 'eyeshadow',
  },
  {
    tag_name: 'blush',
  },
  {
    tag_name: 'mascara',
  },
  {
    tag_name: 'eye liner',
  },
  {
    tag_name: 'makeup sponge',
  },
  {
    tag_name: 'powder brush',
  },
  {
    tag_name: 'cream foundation',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
