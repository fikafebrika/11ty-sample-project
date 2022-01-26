---
layout: base
permalink: /product/{{ product.nama_produk | slug }}/
pagination:
  data: produk.data
  size: 1
  alias: product
eleventyComputed:
title: '{{ product.nama_produk }}'
---

## {{ product.nama_produk }}

- Released in **{{ product.nama_produk }}**
- Directed by **{{ product.harga_produk }}**
- Produced by **{{ product.stok_produk }}**

{{ product.deskripsi_produk }}

[<< See all products](/produk)
