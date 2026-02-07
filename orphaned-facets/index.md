---
layout: default
title: Orphaned facets
permalink: /orphaned-facets/
nav_exclude: true
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
    <p class="post-meta">
      This page lists languages, licenses, groupings, and funding tools referenced by entries that do not yet have their own facet pages.
    </p>
  </header>

  {%- assign defined_languages = site.languages | map: "title" -%}
  {%- assign all_languages = "" | split: "" -%}

  {%- for entry in site.entries -%}
    {%- assign entry_languages = entry.languages | default: entry.language -%}
    {%- if entry_languages -%}
      {%- if entry_languages.language -%}
        {%- assign entry_languages = "" | split: "" | push: entry_languages -%}
      {%- endif -%}
      {%- for lang in entry_languages -%}
        {%- assign language_name = lang.language | default: lang | strip -%}
        {%- unless language_name == "" -%}
          {%- unless all_languages contains language_name -%}
            {%- assign all_languages = all_languages | push: language_name -%}
          {%- endunless -%}
        {%- endunless -%}
      {%- endfor -%}
    {%- endif -%}
  {%- endfor -%}

  {%- assign orphaned_languages = "" | split: "" -%}
  {%- for language_name in all_languages -%}
    {%- unless defined_languages contains language_name -%}
      {%- assign orphaned_languages = orphaned_languages | push: language_name -%}
    {%- endunless -%}
  {%- endfor -%}
  {%- assign orphaned_languages = orphaned_languages | sort -%}

  <section>
    <h2>Languages</h2>
    <p class="post-meta">
      {%- if orphaned_languages.size > 0 -%}
        Showing {{ orphaned_languages.size }} languages that appear in entries but do not have language pages.
      {%- else -%}
        All languages referenced by entries currently have language pages.
      {%- endif -%}
    </p>

    {%- if orphaned_languages.size > 0 -%}
      <table>
        <thead>
          <tr>
            <th style="text-align:left;">Language</th>
            <th style="text-align:left;">Entries</th>
          </tr>
        </thead>
        <tbody>
          {%- for orphaned_language in orphaned_languages -%}
            {%- assign language_entries = "" | split: "" -%}
            {%- for entry in site.entries -%}
              {%- assign entry_languages = entry.languages | default: entry.language -%}
              {%- if entry_languages -%}
                {%- if entry_languages.language -%}
                  {%- assign entry_languages = "" | split: "" | push: entry_languages -%}
                {%- endif -%}
                {%- for lang in entry_languages -%}
                  {%- assign language_name = lang.language | default: lang | strip -%}
                  {%- if language_name == orphaned_language -%}
                    {%- assign language_entries = language_entries | push: entry -%}
                  {%- endif -%}
                {%- endfor -%}
              {%- endif -%}
            {%- endfor -%}
            <tr>
              <td>{{ orphaned_language }}</td>
              <td>
                {%- for entry in language_entries -%}
                  <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>{% unless forloop.last %}, {% endunless %}
                {%- endfor -%}
              </td>
            </tr>
          {%- endfor -%}
        </tbody>
      </table>
    {%- else -%}
      <p>No orphaned languages found.</p>
    {%- endif -%}
  </section>

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

  <section>
    <h2>Licenses</h2>
    <p class="post-meta">
      {%- if orphaned_licenses.size > 0 -%}
        Showing {{ orphaned_licenses.size }} licenses that appear in entries but do not have license pages.
      {%- else -%}
        All licenses referenced by entries currently have license pages.
      {%- endif -%}
    </p>

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
  </section>

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

  <section>
    <h2>Groupings</h2>
    <p class="post-meta">
      {%- if orphaned_groupings.size > 0 -%}
        Showing {{ orphaned_groupings.size }} groupings that appear in entries but do not have grouping pages.
      {%- else -%}
        All groupings referenced by entries currently have grouping pages.
      {%- endif -%}
    </p>

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
  </section>

  {%- assign defined_funding_tools = site.funding-tools | map: "title" -%}
  {%- assign all_funding_tools = "" | split: "" -%}

  {%- for entry in site.entries -%}
    {%- assign entry_funding = entry.funding | default: entry.funding_tool -%}
    {%- if entry_funding -%}
      {%- if entry_funding.funding_tool -%}
        {%- assign entry_funding = "" | split: "" | push: entry_funding -%}
      {%- endif -%}
      {%- for funding_item in entry_funding -%}
        {%- assign funding_name = funding_item.funding_tool | default: funding_item | strip -%}
        {%- unless funding_name == "" -%}
          {%- unless all_funding_tools contains funding_name -%}
            {%- assign all_funding_tools = all_funding_tools | push: funding_name -%}
          {%- endunless -%}
        {%- endunless -%}
      {%- endfor -%}
    {%- endif -%}
  {%- endfor -%}

  {%- assign orphaned_funding_tools = "" | split: "" -%}
  {%- for funding_name in all_funding_tools -%}
    {%- unless defined_funding_tools contains funding_name -%}
      {%- assign orphaned_funding_tools = orphaned_funding_tools | push: funding_name -%}
    {%- endunless -%}
  {%- endfor -%}
  {%- assign orphaned_funding_tools = orphaned_funding_tools | sort -%}

  <section>
    <h2>Funding tools</h2>
    <p class="post-meta">
      {%- if orphaned_funding_tools.size > 0 -%}
        Showing {{ orphaned_funding_tools.size }} funding tools that appear in entries but do not have funding tool pages.
      {%- else -%}
        All funding tools referenced by entries currently have funding tool pages.
      {%- endif -%}
    </p>

    {%- if orphaned_funding_tools.size > 0 -%}
      <table>
        <thead>
          <tr>
            <th style="text-align:left;">Funding tool</th>
            <th style="text-align:left;">Entries</th>
          </tr>
        </thead>
        <tbody>
          {%- for orphaned_funding_tool in orphaned_funding_tools -%}
            {%- assign funding_entries = "" | split: "" -%}
            {%- for entry in site.entries -%}
              {%- assign entry_funding = entry.funding | default: entry.funding_tool -%}
              {%- if entry_funding -%}
                {%- if entry_funding.funding_tool -%}
                  {%- assign entry_funding = "" | split: "" | push: entry_funding -%}
                {%- endif -%}
                {%- for funding_item in entry_funding -%}
                  {%- assign funding_name = funding_item.funding_tool | default: funding_item | strip -%}
                  {%- if funding_name == orphaned_funding_tool -%}
                    {%- assign funding_entries = funding_entries | push: entry -%}
                  {%- endif -%}
                {%- endfor -%}
              {%- endif -%}
            {%- endfor -%}
            <tr>
              <td>{{ orphaned_funding_tool }}</td>
              <td>
                {%- for entry in funding_entries -%}
                  <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>{% unless forloop.last %}, {% endunless %}
                {%- endfor -%}
              </td>
            </tr>
          {%- endfor -%}
        </tbody>
      </table>
    {%- else -%}
      <p>No orphaned funding tools found.</p>
    {%- endif -%}
  </section>
</article>
