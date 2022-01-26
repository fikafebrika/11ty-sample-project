---
layout: base
permalink: /people/{{ people.name | slug }}/
pagination:
  data: peoples
  size: 1
  alias: people
eleventyComputed:
title: '{{ people.name }}'
---

## {{ people.name }}

- Released in **{{ people.name }}**
- Directed by **{{ people.gender }}**
- Produced by **{{ people.age }}**

{{ people.eyecolor }}

[<< See all peoples](/people)
