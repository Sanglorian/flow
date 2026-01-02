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
  {%- assign works = site.entries | where_exp: "item", "item.entry.category_of_entry contains 'Work'" -%}
  <ul>
    {%- for funding_tool in funding_tools -%}
      {%- assign work_count = 0 -%}
      {%- for work in works -%}
        {%- if work.funding and work.funding.funding_tool -%}
          {%- if work.funding.funding_tool == funding_tool.title -%}
            {%- assign work_count = work_count | plus: 1 -%}
          {%- endif -%}
        {%- endif -%}
      {%- endfor -%}
      <li><a href="{{ funding_tool.url | relative_url }}">{{ funding_tool.title }}</a> ({{ work_count }})</li>
    {%- endfor -%}
  </ul>
</article>