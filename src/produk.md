---
tags: [posts]
layout: base
title: Daftar Produk
---

# Daftar Produk

{% for product in produk.data %}

- [{{ product.nama_produk }}](/product/{{ product.nama_produk | slug }})
  {% endfor %}
