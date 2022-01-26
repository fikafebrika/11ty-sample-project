---
layout: base
permalink: /portofolio/{{ portofolio.project_name | slug }}/
pagination:
  data: personal.data
  size: 1
  alias: portofolio
eleventyComputed:
title: '{{ portofolio.project_name }}'
---

## {{ portofolio.project_name }}

- Released in **{{ portofolio.project_name }}**
- Directed by **{{ portofolio.link }}**
- Produced by **{{ portofolio.date_updated }}**

{{ portofolio.description }}

[<< See all products](/personal)
