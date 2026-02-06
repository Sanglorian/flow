---
layout: default
title: Orphaned licenses
permalink: /orphaned-licenses/
nav_exclude: true
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>

    {%- assign defined_licenses = site.licenses | map: "title" -%}
    {%- assign all_licenses = "" | split: "" -%}

    {%- for entry in site.entries -%}
      {%- assign entry_licenses = entry.licensing | default: entry.license -%}
      {%- if entry_licenses -%}
        {%- if entry_licenses.license -%}
          {%- assign entry_licenses = "" | split: "" | push: entry_licenses -%}
        {%- endif -%}
        {%- for license_item in entry_licenses -%}
          {%- assign license_name = license_item.license | default: license_item | strip -%}
          {%- assign license_list = license_name | split: "," -%}
          {%- for license_entry in license_list -%}
            {%- assign license_entry = license_entry | strip -%}
            {%- unless license_entry == "" -%}
              {%- unless all_licenses contains license_entry -%}
                {%- assign all_licenses = all_licenses | push: license_entry -%}
              {%- endunless -%}
            {%- endunless -%}
          {%- endfor -%}
        {%- endfor -%}
      {%- endif -%}
    {%- endfor -%}

    {%- assign orphaned_licenses = "" | split: "" -%}
    {%- for license_name in all_licenses -%}
      {%- unless defined_licenses contains license_name -%}
        {%- assign orphaned_licenses = orphaned_licenses | push: license_name -%}
      {%- endunless -%}
    {%- endfor -%}

    {%- assign orphaned_licenses = orphaned_licenses | sort -%}

    <p class="post-meta">
      {%- if orphaned_licenses.size > 0 -%}
        Showing {{ orphaned_licenses.size }} licenses that appear in entries but do not have license pages.
      {%- else -%}
        All licenses referenced by entries currently have license pages.
      {%- endif -%}
    </p>
  </header>

  {%- if orphaned_licenses.size > 0 -%}
    <table>
      <thead>
        <tr>
          <th style="text-align:left;">License</th>
          <th style="text-align:left;">Entries</th>
        </tr>
      </thead>
      <tbody>
        {%- for orphaned_license in orphaned_licenses -%}
          {%- assign license_entries = "" | split: "" -%}
          {%- for entry in site.entries -%}
            {%- assign entry_licenses = entry.licensing | default: entry.license -%}
            {%- if entry_licenses -%}
              {%- if entry_licenses.license -%}
                {%- assign entry_licenses = "" | split: "" | push: entry_licenses -%}
              {%- endif -%}
              {%- for license_item in entry_licenses -%}
                {%- assign license_name = license_item.license | default: license_item | strip -%}
                {%- assign license_list = license_name | split: "," -%}
                {%- for license_entry in license_list -%}
                  {%- assign license_entry = license_entry | strip -%}
                  {%- if license_entry == orphaned_license -%}
                    {%- assign license_entries = license_entries | push: entry -%}
                  {%- endif -%}
                {%- endfor -%}
              {%- endfor -%}
            {%- endif -%}
          {%- endfor -%}
          <tr>
            <td>{{ orphaned_license }}</td>
            <td>
              {%- for entry in license_entries -%}
                <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>{% unless forloop.last %}, {% endunless %}
              {%- endfor -%}
            </td>
          </tr>
        {%- endfor -%}
      </tbody>
    </table>
  {%- else -%}
    <p>No orphaned licenses found.</p>
  {%- endif -%}
</article>
