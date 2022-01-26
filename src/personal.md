---
tags: [posts]
layout: base
title: Portofolio
---

# Portofolio

{% for portofolio in personal.data %}

- [{{ portofolio.project_name }}](/portofolio/{{ portofolio.project_name | slug }})
  {% endfor %}
