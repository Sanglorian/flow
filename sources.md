---
layout: default
title: All Sources
permalink: /sources/
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
    {%- assign sources = site.entries | where_exp: "item", "item.entry.category_of_entry contains 'Source'" | sort: "title" -%}
    <p class="post-meta">Browse {{ sources.size }} sources in the catalog.</p>
  </header>

  <table>
    <thead>
      <tr>
        <th style="text-align:left;">Source</th>
        <th style="text-align:left;">Description</th>
        <th style="text-align:left;">License</th>
        <th style="text-align:left;">Groupings</th>
      </tr>
    </thead>
    <tbody>
      {%- for source in sources -%}
        {%- assign source_entry = source.entry | default: source -%}
        {%- assign license_items = source.licenses -%}
        {%- if license_items == nil and source.license -%}
          {%- assign license_items = "" | split: "" -%}
          {%- assign license_items = license_items | push: source.license -%}
        {%- endif -%}
        <tr>
          <td><a href="{{ source.url | relative_url }}">{{ source.title }}</a></td>
          <td>{{ source_entry.short_description | default: "—" }}</td>
          <td>
            {%- if license_items and license_items.size > 0 -%}
              {%- for license_item in license_items -%}
                {%- assign license_doc = site.licenses | where: "title", license_item.licence | first -%}
                {%- if license_doc -%}
                  <a href="{{ license_doc.url | relative_url }}">{{ license_item.licence }}</a>
                {%- else -%}
                  {{ license_item.licence }}
                {%- endif -%}
                {%- unless forloop.last -%}<br />{%- endunless -%}
              {%- endfor -%}
            {%- else -%}
              —
            {%- endif -%}
          </td>
          <td>
            {%- if source.groupings -%}
              {%- for grouping in source.groupings -%}
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