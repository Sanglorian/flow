---
layout: default
title: Funding Tools
permalink: /funding-tools/
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  </header>

  {%- assign funding_tools = site["funding-tools"] | sort: "title" -%}
  {%- assign entries = site.entries -%}
  <ul>
    {%- for funding_tool in funding_tools -%}
      {%- assign entry_count = 0 -%}
      {%- for entry in entries -%}
        {%- if entry.funding and entry.funding.funding_tool -%}
          {%- if entry.funding.funding_tool == funding_tool.title -%}
            {%- assign entry_count = entry_count | plus: 1 -%}
          {%- endif -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ funding_tool.url | relative_url }}">{{ funding_tool.title }}</a> ({{ entry_count }})</li>
    {%- endfor -%}
  </ul>
</article>