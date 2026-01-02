---
layout: default
title: Languages
permalink: /languages/
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  </header>

  {%- assign languages = site.languages | sort: "title" -%}
  {%- assign works = site.entries | where_exp: "item", "item.entry.category_of_entry contains 'Work'" -%}
  <ul>
    {%- for language in languages -%}
      {%- assign work_count = 0 -%}
      {%- for work in works -%}
        {%- if work.languages -%}
          {%- for work_language in work.languages -%}
            {%- if work_language.language == language.title -%}
              {%- assign work_count = work_count | plus: 1 -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ language.url | relative_url }}">{{ language.title }}</a> ({{ work_count }})</li>
    {%- endfor -%}
  </ul>
</article>