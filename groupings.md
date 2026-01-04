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
  {%- assign works = site.entries | where_exp: "item", "item.entry.category_of_entry contains 'Work'" -%}
  <ul>
    {%- for grouping in groupings -%}
      {%- assign work_count = 0 -%}
      {%- for work in works -%}
        {%- if work.groupings -%}
          {%- for work_grouping in work.groupings -%}
            {%- assign grouping_name = work_grouping.grouping | default: work_grouping -%}
            {%- if grouping_name == grouping.title -%}
              {%- assign work_count = work_count | plus: 1 -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ grouping.url | relative_url }}">{{ grouping.title }}</a> ({{ work_count }})</li>
    {%- endfor -%}
  </ul>
</article>