---
layout: home
title: Home
---

Welcome to the Free, Libre and Open Works collection. Browse the catalog, or head over to the blog for updates.

{%- assign free_license_certifications = "Open Source Definition compliant license|Open Definition recommended conformant license|Open Definition other conformant license|Definition of Free Cultural Works conformant license|FSF free documentation license|GPL-compatible free software license|GPL-incompatible free software license" | split: "|" -%}

<section class="search-page">
  <h2>Search the catalog</h2>
  <p>Search across all entries, categories, and pages in the Free, Libre and Open Works catalog.</p>

  <label class="search-label" for="search-input">Search terms</label>
  <input id="search-input" class="search-input" type="search" placeholder="Search by title, description, or content" autocomplete="off" />

  <p id="search-status" class="search-status" aria-live="polite"></p>

  <ul id="search-results" class="search-results"></ul>
</section>

<script src="{{ "/assets/search.js" | relative_url }}" defer></script>
<script>
  window.flowSearchConfig = {
    indexUrl: "{{ "/search.json" | relative_url }}",
    baseUrl: "{{ "/" | relative_url }}"
  };
</script>

<section>
  <h2>Random entries</h2>
  <p>Refresh the page for a new set.</p>
  {%- assign random_preview_entries = "" | split: "" -%}
  {%- for entry in site.entries -%}
    {%- assign entry_is_free = false -%}
    {%- for entry_license in entry.licensing -%}
      {%- assign license_name = entry_license.license | default: "" -%}
      {%- assign license_name_downcase = license_name | downcase -%}
      {%- if license_name_downcase contains "public domain" -%}
        {%- assign entry_is_free = true -%}
        {%- break -%}
      {%- endif -%}

      {%- assign matched_license = site.licenses | where: "title", license_name | first -%}
      {%- if matched_license and matched_license.license_certification -%}
        {%- for certification in matched_license.license_certification -%}
          {%- if free_license_certifications contains certification -%}
            {%- assign entry_is_free = true -%}
            {%- break -%}
          {%- endif -%}
        {%- endfor -%}
      {%- endif -%}

      {%- if entry_is_free -%}
        {%- break -%}
      {%- endif -%}
    {%- endfor -%}

    {%- if entry_is_free -%}
      {%- assign random_preview_entries = random_preview_entries | push: entry -%}
    {%- endif -%}
  {%- endfor -%}

  {%- assign sampled_entries = random_preview_entries | sample: 5 -%}
  <div class="featured-grid">
    {%- for entry in sampled_entries -%}
      {%- assign entry_detail = entry.entry | default: entry -%}
      {%- assign license_items = entry.licensing | default: entry.licenses -%}
      {%- if license_items == nil and entry.license -%}
        {%- assign license_items = "" | split: "" -%}
        {%- assign license_items = license_items | push: entry.license -%}
      {%- endif -%}
      <article class="featured-card">
        {%- if entry_detail.thumbnail -%}
          {%- if entry_detail.thumbnail contains "/" -%}
            <img
              class="featured-thumbnail"
              src="{{ entry_detail.thumbnail | relative_url }}"
              alt="{{ entry.title }} thumbnail"
              loading="lazy"
            />
          {%- else -%}
            {{ entry_detail.thumbnail }}
          {%- endif -%}
        {%- endif -%}
        <h4 class="featured-title">
          <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>
        </h4>
        <div class="featured-groupings">
          {%- if entry.groupings -%}
            {%- for grouping in entry.groupings -%}
              {%- assign grouping_name = grouping.grouping | default: grouping -%}
              {%- assign grouping_doc = site.groupings | where: "title", grouping_name | first -%}
              {%- if grouping_doc -%}
                <a href="{{ grouping_doc.url | relative_url }}">
                  <span class="text-button-grouping">{{ grouping_name }}</span>
                </a>
              {%- else -%}
                <span class="text-button-grouping-nolink">{{ grouping_name }}</span>
              {%- endif -%}
            {%- endfor -%}
          {%- else -%}
            —
          {%- endif -%}
        </div>

        <div class="featured-description">
          <p>
            {{ entry_detail.short_description | default: "—" }}
            {%- if license_items and license_items.size > 0 -%}
              <span class="featured-licenses">
                {%- assign seen_license_parents = "" | split: "" -%}
                {%- for license_item in license_items -%}
                  {%- assign license_title = license_item.license | default: license_item.license -%}
                  {%- assign license_doc = site.licenses | where: "title", license_title | first -%}
                  {%- assign license_parent = license_title -%}
                  {%- if license_doc and license_doc.parent_license -%}
                    {%- assign license_parent = license_doc.parent_license -%}
                  {%- endif -%}
                  {%- unless seen_license_parents contains license_parent -%}
                    {%- assign seen_license_parents = seen_license_parents | push: license_parent -%}
                    {%- if license_doc -%}
                      {%- if license_doc.small_badge -%}
                        {%- if license_doc.small_badge contains "/" -%}
                          <a href="{{ license_doc.url | relative_url }}">
                            <img
                              src="{{ license_doc.small_badge | relative_url }}"
                              alt="{{ license_title }} badge"
                              loading="lazy"
                              style="width:88px; height:auto;"
                            />
                          </a>
                        {%- else -%}
                          <a href="{{ license_doc.url | relative_url }}">
                            <span class="text-button-license">{{ license_doc.small_badge }}</span>
                          </a>
                        {%- endif -%}
                      {%- elsif license_doc.abbreviation -%}
                        <a href="{{ license_doc.url | relative_url }}">
                          <span class="text-button-license">{{ license_doc.abbreviation }}</span>
                        </a>
                      {%- else -%}
                        <a href="{{ license_doc.url | relative_url }}">
                          <span class="text-button-license">{{ license_title }}</span>
                        </a>
                      {%- endif -%}
                    {%- else -%}
                      <span class="text-button-license-nolink">{{ license_title }}</span>
                    {%- endif -%}
                  {%- endunless -%}
                {%- endfor -%}
              </span>
            {%- endif -%}
          </p>
        </div>
      </article>
    {%- endfor -%}
  </div>
</section>


<aside class="site-sidebar">
  <section>
      <h3>Navigation</h3>
    <ul>
      <li><a href="{{ "/recent-changes/" | relative_url }}">Recent changes</a></li>
      <li><a href="{{ "/random/" | relative_url }}">Random page</a></li>
      <li><a href="{{ "/entries.xml" | relative_url }}">RSS feed (new entries)</a></li>
    </ul>
  </section>
  
  <section>
    <h3>Groupings</h3>
    <ul>
      <li><a href="{{ '/literature/' | relative_url }}">Literature</a></li>
      <li><a href="{{ '/tabletop-gaming/' | relative_url }}">Tabletop Gaming</a></li>
      <li><a href="{{ '/music/' | relative_url }}">Music</a></li>
      <li><a href="{{ '/data/' | relative_url }}">Data</a></li>
      <li><a href="{{ '/nonfiction/' | relative_url }}">Nonfiction</a></li>
      <li><a href="{{ '/art/' | relative_url }}">Art</a></li>
      <li><a href="{{ '/film/' | relative_url }}">Film</a></li>
      <li><a href="{{ '/video-gaming/' | relative_url }}">Video Gaming</a></li>
      <li><a href="{{ '/technology/' | relative_url }}">Technology</a></li>
      <li><a href="{{ '/software/' | relative_url }}">Software</a></li>
    </ul>
  </section>

  <section>
    <h3>How to contribute</h3>
    <ul>
    <li><a href="https://github.com/Sanglorian/flow/issues">Suggest a new entry by logging an issue.</a></li>
	</ul>	
  </section>

  <section>
    <h3>Sort by</h3>
    <ul>
      <li><a href="{{ "/categories/" | relative_url }}">Works, collections, sources</a></li>
      <li><a href="{{ "/languages/" | relative_url }}">Languages</a></li>
      <li><a href="{{ "/licenses/" | relative_url }}">Licenses</a></li>
      <li><a href="{{ "/genres/" | relative_url }}">Genres</a></li>
      <li><a href="{{ "/types/" | relative_url }}">Types</a></li>
      <li><a href="{{ "/funding-tools/" | relative_url }}">Funding Tools</a></li>
    </ul>
  </section>
</aside>

<section>
  <h2>Orphans</h2>
  <ul>
    <li><a href="{{ "/orphaned-facets/" | relative_url }}">Orphaned facets</a></li>
    <li><a href="{{ "/works-not-on-the-wiki/" | relative_url }}">Works not on the wiki</a></li>
  </ul>
</section>
