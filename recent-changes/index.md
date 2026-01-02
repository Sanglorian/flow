---
layout: default
title: Recent changes
permalink: /recent-changes/
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>

    {%- assign cutoff_s = "2026-01-01" | date: "%s" -%}

    {%- assign recent_entries = "" | split: "" -%}
    {%- for item in site.entries -%}
      {%- if item.updated_at -%}
        {%- assign item_s = item.updated_at | date: "%s" -%}
        {%- if item_s and item_s >= cutoff_s -%}
          {%- assign recent_entries = recent_entries | push: item -%}
        {%- endif -%}
      {%- endif -%}
    {%- endfor -%}

    {%- assign recent_entries = recent_entries | sort: "updated_at" | reverse -%}

    <p class="post-meta">
      Showing {{ recent_entries.size }} entries updated in 2026 or later.
    </p>
  </header>

  {%- if recent_entries.size > 0 -%}
  <table>
    <thead>
      <tr>
        <th style="text-align:left;">Entry</th>
        <th style="text-align:left;">Updated</th>
        <th style="text-align:left;">Description</th>
      </tr>
    </thead>
    <tbody>
      {%- for entry in recent_entries -%}
        {%- assign entry_details = entry.entry | default: entry -%}
        <tr>
          <td><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a></td>
          <td>{{ entry.updated_at | date: "%Y-%m-%d" }}</td>
          <td>{{ entry_details.short_description | default: "—" }}</td>
        </tr>
      {%- endfor -%}
    </tbody>
  </table>
  {%- else -%}
  <p>No entries have been updated in 2026 or later yet.</p>
  {%- endif -%}
</article>
