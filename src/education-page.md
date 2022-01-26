---
layout: base
permalink: /edu/{{ edu.institution | slug }}/
pagination:
  data: education.data
  size: 1
  alias: edu
eleventyComputed:
title: '{{ edu.institution }}'
---

## {{ edu.institution }}

- Released in **{{ edu.institution }}**
- Directed by **{{ edu.major }}**
- Produced by **{{ edu.gpa }}**

{{ edu.description }}

[<< See all products](/education)
