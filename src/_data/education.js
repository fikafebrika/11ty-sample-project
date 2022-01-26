'use strict';

const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async function () {
  return Cache('http://localhost:8055/items/education/', { type: 'json' });
};
