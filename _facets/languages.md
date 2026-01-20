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
  {%- assign entries = site.entries -%}
  <ul>
    {%- for language in languages -%}
      {%- assign entry_count = 0 -%}
      {%- for entry in entries -%}
        {%- if entry.languages -%}
          {%- for entry_language in entry.languages -%}
            {%- assign language_name = entry_language.language | default: entry_language -%}
            {%- if language_name == language.title -%}
              {%- assign entry_count = entry_count | plus: 1 -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ language.url | relative_url }}">{{ language.title }}</a> ({{ entry_count }})</li>
    {%- endfor -%}
  </ul>
</article>