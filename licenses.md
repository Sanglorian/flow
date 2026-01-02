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
  {%- assign entries = site.entries -%}
  {%- assign parent_licenses = licenses | where_exp: "license", "license.parent_license == nil or license.parent_license == empty" -%}
  {%- assign flo_licenses = parent_licenses | where_exp: "license", "license.license_certification and license.license_certification.size > 0" -%}
  {%- assign non_flo_licenses = parent_licenses | where_exp: "license", "license.license_certification == nil or license.license_certification == empty" -%}

  <h2>Free, libre and open licenses</h2>
  <p>
    These licenses are certified as <a href="{{ "/free-libre-and-open-licences/" | relative_url }}">free, libre and open</a>.
  </p>
  <ul>
    {%- for license in flo_licenses -%}
      {%- assign entry_count = 0 -%}
      {%- assign child_licenses = licenses | where_exp: "child", "child.parent_license == license.title" -%}
      {%- assign license_titles = "" | split: "" -%}
      {%- assign license_titles = license_titles | push: license.title -%}
      {%- for child_license in child_licenses -%}
        {%- assign license_titles = license_titles | push: child_license.title -%}
      {%- endfor -%}
      {%- for entry in entries -%}
        {%- assign license_items = entry.licensing | default: entry.licenses -%}
        {%- if license_items == nil and entry.license -%}
          {%- assign license_items = "" | split: "" -%}
          {%- assign license_items = license_items | push: entry.license -%}
        {%- endif -%}
        {%- assign matches_license = false -%}
        {%- if license_items and license_items.size > 0 -%}
          {%- for license_item in license_items -%}
            {%- assign license_title = license_item.license | default: license_item.licence -%}
            {%- if license_titles contains license_title -%}
              {%- assign matches_license = true -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
        {%- if matches_license -%}
          {%- assign entry_count = entry_count | plus: 1 -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ license.url | relative_url }}">{{ license.title }}</a> ({{ entry_count }})</li>
    {%- endfor -%}
  </ul>

  <h2>Non-free, libre and open licenses</h2>
<p>These licenses may not be <a href="{{ "/free-libre-and-open-licences/" | relative_url }}">free, libre and open</a>.</p>
  <ul>
    {%- for license in non_flo_licenses -%}
      {%- assign entry_count = 0 -%}
      {%- assign child_licenses = licenses | where_exp: "child", "child.parent_license == license.title" -%}
      {%- assign license_titles = "" | split: "" -%}
      {%- assign license_titles = license_titles | push: license.title -%}
      {%- for child_license in child_licenses -%}
        {%- assign license_titles = license_titles | push: child_license.title -%}
      {%- endfor -%}
      {%- for entry in entries -%}
        {%- assign license_items = entry.licensing | default: entry.licenses -%}
        {%- if license_items == nil and entry.license -%}
          {%- assign license_items = "" | split: "" -%}
          {%- assign license_items = license_items | push: entry.license -%}
        {%- endif -%}
        {%- assign matches_license = false -%}
        {%- if license_items and license_items.size > 0 -%}
          {%- for license_item in license_items -%}
            {%- assign license_title = license_item.license | default: license_item.licence -%}
            {%- if license_titles contains license_title -%}
              {%- assign matches_license = true -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
        {%- if matches_license -%}
          {%- assign entry_count = entry_count | plus: 1 -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ license.url | relative_url }}">{{ license.title }}</a> ({{ entry_count }})</li>
    {%- endfor -%}
  </ul>
</article>
