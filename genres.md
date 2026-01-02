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
  {%- assign works = site.entries | where_exp: "item", "item.entry.category_of_entry contains 'Work'" -%}
  <ul>
    {%- for genre in genres -%}
      {%- assign work_count = 0 -%}
      {%- for work in works -%}
        {%- if work.genres -%}
          {%- for work_genre in work.genres -%}
            {%- assign genre_name = work_genre.genre | default: work_genre -%}
            {%- if genre_name == genre.title -%}
              {%- assign work_count = work_count | plus: 1 -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ genre.url | relative_url }}">{{ genre.title }}</a> ({{ work_count }})</li>
    {%- endfor -%}
  </ul>
</article>

---
layout: default
title: Genres
permalink: /genres/
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  </header>

  {%- assign genre_names = "" | split: "" -%}
  {%- assign works = site.entries | where_exp: "item", "item.entry.category_of_entry == 'Work'" -%}
  {%- for work in works -%}
    {%- if work.genres -%}
      {%- for genre in work.genres -%}
        {%- assign genre_name = genre.genre | default: genre -%}
        {%- assign genre_names = genre_names | push: genre_name -%}
      {%- endfor -%}
    {%- endif -%}
  {%- endfor -%}
  {%- assign genre_names = genre_names | uniq | sort -%}

  <ul>
    {%- for genre_name in genre_names -%}
      {%- assign work_count = 0 -%}
      {%- for work in works -%}
        {%- if work.genres -%}
          {%- for work_genre in work.genres -%}
            {%- assign work_genre_name = work_genre.genre | default: work_genre -%}
            {%- if work_genre_name == genre_name -%}
              {%- assign work_count = work_count | plus: 1 -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
      {%- endfor -%}
      {%- assign genre_slug = genre_name | slugify -%}
      <li><a href="{{ '/genre/' | append: genre_slug | append: '/' | relative_url }}">{{ genre_name }}</a> ({{ work_count }})</li>
    {%- endfor -%}
  </ul>
</article>