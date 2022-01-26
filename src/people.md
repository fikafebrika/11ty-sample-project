---
tags: [posts]
layout: base
title: Studio Ghibli People
---

# Studio Ghibli people

{% for people in peoples %}

- [{{ people.name }}](/people/{{ people.name | slug }})
  {% endfor %}
