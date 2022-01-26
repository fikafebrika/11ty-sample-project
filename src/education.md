---
tags: [posts]
layout: base
title: Education
---

# Education

{% for edu in education.data %}

- [{{ edu.institution }}](/edu/{{ edu.institution | slug }})
  {% endfor %}
