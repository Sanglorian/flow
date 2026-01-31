---
layout: default
title: Orphaned groupings
permalink: /orphaned-groupings/
nav_exclude: true
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>

    {%- assign defined_groupings = site.groupings | map: "title" -%}
    {%- assign all_groupings = "" | split: "" -%}

    {%- for entry in site.entries -%}
      {%- assign entry_groupings = entry.groupings -%}
      {%- if entry_groupings -%}
        {%- for g in entry_groupings -%}
          {%- assign grouping_name = g.grouping | default: g | strip -%}
          {%- unless grouping_name == "" -%}
            {%- unless all_groupings contains grouping_name -%}
              {%- assign all_groupings = all_groupings | push: grouping_name -%}
            {%- endunless -%}
          {%- endunless -%}
        {%- endfor -%}
      {%- endif -%}
    {%- endfor -%}

    {%- assign orphaned_groupings = "" | split: "" -%}
    {%- for grouping_name in all_groupings -%}
      {%- unless defined_groupings contains grouping_name -%}
        {%- assign orphaned_groupings = orphaned_groupings | push: grouping_name -%}
      {%- endunless -%}
    {%- endfor -%}

    {%- assign orphaned_groupings = orphaned_groupings | sort -%}

    <p class="post-meta">
      {%- if orphaned_groupings.size > 0 -%}
        Showing {{ orphaned_groupings.size }} groupings that appear in entries but do not have grouping pages.
      {%- else -%}
        All groupings referenced by entries currently have grouping pages.
      {%- endif -%}
    </p>
  </header>

  {%- if orphaned_groupings.size > 0 -%}
    <table>
      <thead>
        <tr>
          <th style="text-align:left;">Grouping</th>
          <th style="text-align:left;">Entries</th>
        </tr>
      </thead>
      <tbody>
        {%- for orphaned_grouping in orphaned_groupings -%}
          {%- assign grouped_entries = "" | split: "" -%}
          {%- for entry in site.entries -%}
            {%- assign entry_groupings = entry.groupings -%}
            {%- if entry_groupings -%}
              {%- for g in entry_groupings -%}
                {%- assign grouping_name = g.grouping | default: g | strip -%}
                {%- if grouping_name == orphaned_grouping -%}
                  {%- assign grouped_entries = grouped_entries | push: entry -%}
                {%- endif -%}
              {%- endfor -%}
            {%- endif -%}
          {%- endfor -%}

          <tr>
            <td>{{ orphaned_grouping }}</td>
            <td>
              {%- for entry in grouped_entries -%}
                <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>{% unless forloop.last %}, {% endunless %}
              {%- endfor -%}
            </td>
          </tr>
        {%- endfor -%}
      </tbody>
    </table>
  {%- else -%}
    <p>No orphaned groupings found.</p>
  {%- endif -%}
</article>
