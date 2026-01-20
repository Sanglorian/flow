---
layout: default
title: Genres
permalink: /genres/
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  </header>

  {%- assign genres = site.genres | sort: "title" -%}
  {%- assign entries = site.entries -%}
  <ul>
    {%- for genre in genres -%}
      {%- assign entry_count = 0 -%}
      {%- for entry in entries -%}
        {%- if entry.genres -%}
          {%- for entry_genre in entry.genres -%}
            {%- assign genre_name = entry_genre.genre | default: entry_genre -%}
            {%- if genre_name == genre.title -%}
              {%- assign entry_count = entry_count | plus: 1 -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ genre.url | relative_url }}">{{ genre.title }}</a> ({{ entry_count }})</li>
    {%- endfor -%}
  </ul>
</article>