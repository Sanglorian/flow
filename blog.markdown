---
layout: default
title: Blog
permalink: /blog/
---

# Blog

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }})
  <span class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</span>
{% endfor %}
