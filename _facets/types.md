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
  {%- assign works = site.entries | where_exp: "item", "item.entry.category_of_entry contains 'Work'" -%}
  <ul>
    {%- for type in types -%}
      {%- assign work_count = 0 -%}
      {%- for work in works -%}
        {%- if work.types -%}
          {%- for work_type in work.types -%}
            {%- assign type_name = work_type.type | default: work_type -%}
            {%- if type_name == type.title -%}
              {%- assign work_count = work_count | plus: 1 -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ type.url | relative_url }}">{{ type.title }}</a> ({{ work_count }})</li>
    {%- endfor -%}
  </ul>
</article>
