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

  {%- assign flo_licenses = site.licenses | where_exp: "item", "item.license_certification contains 'Open Definition recommended conformant licence' or item.license_certification contains 'Open Definition other conformant licence' or item.license_certification contains 'Definition of Free Cultural Works conformant licence' or item.license_certification contains 'Open Source Definition compliant licence' or item.license_certification contains 'GPL-compatible free software licence'" -%}
  {%- assign flo_license_titles = flo_licenses | map: "title" -%}

  {%- assign flo_found = false -%}
  {%- assign non_flo_found = false -%}
  {%- assign flo_rows = "" -%}
  {%- assign non_flo_rows = "" -%}
  {%- for work in works -%}
    {%- assign work_entry = work.entry | default: work -%}
    {%- assign license_items = work.licensing | default: work.licenses -%}
    {%- if license_items == nil and work.license -%}
      {%- assign license_items = "" | split: "" -%}
      {%- assign license_items = license_items | push: work.license -%}
    {%- endif -%}
    {%- assign is_flo_entry = false -%}
    {%- if work.licensing and work.licensing.size > 0 -%}
      {%- for license in work.licensing -%}
        {%- assign license_title = license.license | default: license.licence -%}
        {%- if license_title == "Public domain" or flo_license_titles contains license_title -%}
          {%- assign is_flo_entry = true -%}
        {%- endif -%}
      {%- endfor -%}
    {%- endif -%}
    {%- capture row -%}
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
    {%- endcapture -%}
    {%- if is_flo_entry -%}
      {%- assign flo_found = true -%}
      {%- assign flo_rows = flo_rows | append: row -%}
    {%- else -%}
      {%- assign non_flo_found = true -%}
      {%- assign non_flo_rows = non_flo_rows | append: row -%}
    {%- endif -%}
  {%- endfor -%}

  <h2>FLO licensed or public domain</h2>
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
      {%- if flo_found -%}
        {{ flo_rows }}
      {%- else -%}
        <tr>
          <td colspan="4"><em>No works listed.</em></td>
        </tr>
      {%- endif -%}
    </tbody>
  </table>

  <h2>Non-FLO licensed</h2>
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
      {%- if non_flo_found -%}
        {{ non_flo_rows }}
      {%- else -%}
        <tr>
          <td colspan="4"><em>No works listed.</em></td>
        </tr>
      {%- endif -%}
    </tbody>
  </table>
</article>
