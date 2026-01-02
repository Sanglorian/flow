---
layout: default
title: Free, libre and open licenses
permalink: /FLO-licenses/
---
<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  </header>

<p><strong>Free, libre and open licences</strong>, <strong>free and open licences</strong> or <strong>FLO licences</strong> are copyright licences that have only free and open terms.</p>
<p>Four different bodies maintain lists of approved FLO licences: the Open Source Initiative, the Free Software Foundation, the Open Knowledge Foundation and the Free Culture Foundation. There are subtle differences in how these bodies determine whether a work is free/libre/open, but essentially agreement on whether a licence is free/libre/open.</p>
<p>Licences on this wiki that are approved by one of the four bodies are:</p>

<h2>For culture and content</h2>

{%- assign culture_licenses = site.licenses | where_exp: "item", "item.license_certification contains 'Open Definition recommended conformant licence' or item.license_certification contains 'Open Definition other conformant licence' or item.license_certification contains 'Definition of Free Cultural Works conformant licence'" | sort: "title" -%}
{%- if culture_licenses and culture_licenses.size > 0 -%}
<ul>
  {%- for license in culture_licenses -%}
  <li><a href="{{ license.url | relative_url }}">{{ license.title }}</a></li>
  {%- endfor -%}
</ul>
{%- else -%}
<p><em>No licences listed.</em></p>
{%- endif -%}

<h2>For software and source code</h2>

{%- assign software_licenses = site.licenses | where_exp: "item", "item.license_certification contains 'Open Source Definition compliant licence' or item.license_certification contains 'GPL-compatible free software licence'" | sort: "title" -%}
{%- if software_licenses and software_licenses.size > 0 -%}
<ul>
  {%- for license in software_licenses -%}
  <li><a href="{{ license.url | relative_url }}">{{ license.title }}</a></li>
  {%- endfor -%}
</ul>
{%- else -%}
<p><em>No licences listed.</em></p>
{%- endif -%}
