---
layout: default
title: Categories
permalink: /categories/
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  </header>

  {%- assign categories = site.entry_categories | sort: "title" -%}
  <ul>
    {%- for category in categories -%}
      {%- assign entry_count = 0 -%}
      {%- for entry in site.entries -%}
        {%- if entry.entry.category_of_entry and entry.entry.category_of_entry contains category.title -%}
          {%- assign entry_count = entry_count | plus: 1 -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ category.url | relative_url }}">{{ category.title }}</a> ({{ entry_count }})</li>
    {%- endfor -%}
  </ul>
</article>
