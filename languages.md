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
  <ul>
    {%- for language in languages -%}
      <li><a href="{{ language.url | relative_url }}">{{ language.title }}</a></li>
    {%- endfor -%}
  </ul>
</article>