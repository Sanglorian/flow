---
layout: default
title: Licenses
permalink: /licenses/
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  </header>

  {%- assign licenses = site.licenses | sort: "title" -%}
  {%- assign works = site.entries | where_exp: "item", "item.entry.category_of_entry contains 'Work'" -%}
  <ul>
    {%- for license in licenses -%}
      {%- assign work_count = 0 -%}
      {%- for work in works -%}
        {%- if work.license and work.license.licence -%}
          {%- if work.license.licence == license.title -%}
            {%- assign work_count = work_count | plus: 1 -%}
          {%- endif -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ license.url | relative_url }}">{{ license.title }}</a> ({{ work_count }})</li>
    {%- endfor -%}
  </ul>
</article>