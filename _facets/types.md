---
layout: default
title: Types
permalink: /types/
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  </header>

  {%- assign types = site.types | sort: "title" -%}
  {%- assign entries = site.entries -%}
  <ul>
    {%- for type in types -%}
      {%- assign entry_count = 0 -%}
      {%- for entry in entries -%}
        {%- if entry.types -%}
          {%- for entry_type in entry.types -%}
            {%- assign type_name = entry_type.type | default: entry_type -%}
            {%- if type_name == type.title -%}
              {%- assign entry_count = entry_count | plus: 1 -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ type.url | relative_url }}">{{ type.title }}</a> ({{ entry_count }})</li>
    {%- endfor -%}
  </ul>
</article>
