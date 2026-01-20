---
layout: default
title: Groupings
permalink: /groupings/
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  </header>

  {%- assign groupings = site.groupings | sort: "title" -%}
  {%- assign entries = site.entries -%}
  <ul>
    {%- for grouping in groupings -%}
      {%- assign entry_count = 0 -%}
      {%- for entry in entries -%}
        {%- if entry.groupings -%}
          {%- for entry_grouping in entry.groupings -%}
            {%- assign grouping_name = entry_grouping.grouping | default: entry_grouping -%}
            {%- if grouping_name == grouping.title -%}
              {%- assign entry_count = entry_count | plus: 1 -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ grouping.url | relative_url }}">{{ grouping.title }}</a> ({{ entry_count }})</li>
    {%- endfor -%}
  </ul>
</article>