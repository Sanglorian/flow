---
layout: default
title: All Works
permalink: /works/
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  {%- assign works = site.entries | where_exp: "item", "item.entry.category_of_entry contains 'Work'" -%}
    <p class="post-meta">Browse {{ works.size }} works in the catalog.</p>
  </header>

  <table>
    <thead>
      <tr>
        <th style="text-align:left;">Work</th>
        <th style="text-align:left;">Description</th>
        <th style="text-align:left;">License</th>
        <th style="text-align:left;">Groupings</th>
      </tr>
    </thead>
    <tbody>
      {%- for work in works -%}
        {%- assign work_entry = work.entry | default: work -%}
        {%- assign license_items = work.licensing | default: work.licenses -%}
        {%- if license_items == nil and work.license -%}
          {%- assign license_items = "" | split: "" -%}
          {%- assign license_items = license_items | push: work.license -%}
        {%- endif -%}
        <tr>
          <td><a href="{{ work.url | relative_url }}">{{ work.title }}</a></td>
          <td>{{ work_entry.short_description | default: "—" }}</td>
          <td>
            {%- if license_items and license_items.size > 0 -%}
              {%- for license_item in license_items -%}
                {%- assign license_title = license_item.license | default: license_item.licence -%}
                {%- assign license_doc = site.licenses | where: "title", license_title | first -%}
                {%- if license_doc -%}
                  <a href="{{ license_doc.url | relative_url }}">{{ license_title }}</a>
                {%- else -%}
                  {{ license_title }}
                {%- endif -%}
                {%- unless forloop.last -%}<br />{%- endunless -%}
              {%- endfor -%}
            {%- else -%}
              —
            {%- endif -%}
          </td>
          <td>
            {%- if work.groupings -%}
              {%- for grouping in work.groupings -%}
                {%- assign grouping_name = grouping.grouping | default: grouping -%}
                {%- assign grouping_doc = site.groupings | where: "title", grouping_name | first -%}
                {%- if grouping_doc -%}
                  <a href="{{ grouping_doc.url | relative_url }}">{{ grouping_name }}</a>
                {%- else -%}
                  {{ grouping_name }}
                {%- endif -%}
                {%- unless forloop.last -%}, {%- endunless -%}
              {%- endfor -%}
            {%- else -%}
              —
            {%- endif -%}
          </td>
        </tr>
      {%- endfor -%}
    </tbody>
  </table>
</article>
