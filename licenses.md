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
        {%- assign license_items = work.licensing | default: work.licenses -%}
        {%- if license_items == nil and work.license -%}
          {%- assign license_items = "" | split: "" -%}
          {%- assign license_items = license_items | push: work.license -%}
        {%- endif -%}
        {%- assign matches_license = false -%}
        {%- if license_items and license_items.size > 0 -%}
          {%- for license_item in license_items -%}
            {%- assign license_title = license_item.license | default: license_item.licence -%}
            {%- if license_title == license.title -%}
              {%- assign matches_license = true -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
        {%- if matches_license -%}
          {%- assign work_count = work_count | plus: 1 -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ license.url | relative_url }}">{{ license.title }}</a> ({{ work_count }})</li>
    {%- endfor -%}
  </ul>
</article>
