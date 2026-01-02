---
layout: default
title: All Collections
permalink: /collections/
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
    {%- assign collections = site.entries | where_exp: "item", "item.entry.category_of_entry contains 'Collection'" | sort: "title" -%}
    <p class="post-meta">Browse {{ collections.size }} collections in the catalog.</p>
  </header>

  <table>
    <thead>
      <tr>
        <th style="text-align:left;">Collection</th>
        <th style="text-align:left;">Description</th>
        <th style="text-align:left;">License</th>
        <th style="text-align:left;">Groupings</th>
      </tr>
    </thead>
    <tbody>
      {%- for collection in collections -%}
        {%- assign collection_entry = collection.entry | default: collection -%}
        {%- assign license_items = collection.licenses -%}
        {%- if license_items == nil and collection.license -%}
          {%- assign license_items = "" | split: "" -%}
          {%- assign license_items = license_items | push: collection.license -%}
        {%- endif -%}
        <tr>
          <td><a href="{{ collection.url | relative_url }}">{{ collection.title }}</a></td>
          <td>{{ collection_entry.short_description | default: "—" }}</td>
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
            {%- if collection.groupings -%}
              {%- for grouping in collection.groupings -%}
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