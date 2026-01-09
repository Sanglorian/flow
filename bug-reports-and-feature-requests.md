---
layout: default
title: "Bug reports and feature requests"
permalink: /bug-reports-and-feature-requests/
created_at: 2014-09-29T06:50:24Z
updated_at: 2015-11-25T07:41:09Z
contributors:
  - Sanglorian
---

[Workbook](/workbook/)
## To Do List
* Expand the Community form/template with the default options, so that projects and organisations no longer need to be listed as Works or Collections, even if their website is CC licensed.
* Add public domain as well as licensing
  * A field: date of creator's death
  * A field: other reason for public domain (ad hoc declaration, USA work that meets other requirements, work of a federal employee of USA govt, etc)
* Go through the list of Works and change any that should be Collections into Collections (yet to do Q and onwards)
  * Collections are hosted collections of works, like [1KM1KT](/1km1kt/) or [Internet Archive](/internet-archive/), or thematic collections of works, like [Nordic CC Film Festival](/nordic-cc-film-festival/), [Music of Jonathan Coulton](/music-of-jonathan-coulton/) or [d20 System](/d20-system/).
  * Of course there are grey areas: is a news aggregator a single Work, or a Collection of blogs that are works; is an album a single Work, or a Collection of songs that are works. However, I think in practice the divide is clear. Other greys: why is [Foodista](/foodista/) a collection but a recipe book is a work. Why is [Ficly](/ficly/) a collection but [Wikipedia](/wikipedia/) a work. Is a journal series a work or a collection?
* Where a licence is the parent of another licence, have all the works under the child licence show up for the parent licence
* Google Analytics
* Funding Models and Funding Types both still exist
  * But nowhere that's public-facing, I think
* Create a form for Types
  * And for Funding Models, e.g. Patreon, Kickstarter
* Find a way to query for missing fields, trying this method: <https://semantic-mediawiki.org/wiki/Thread:Semantic-mediawiki.org:Community_portal/Querying_for_non-empty_values>

## Problems
* Things I've tried hard to fix:
  * Raw file stubs are displayed under Versions, not words
* Collections aren't showing up in the entries
* The Upload button on Form:Works takes the contributor to a new page and once the file is uploaded it does not take the contributor back to the original form.
* In Sources, both related sources and related works show up under related sources.
* In Firefox, the CSS is not applied to fonts.
* Where a page is renamed, it shows up twice in #ask queries

## Feature Requests
* Find ways of prioritising free, libre and open lists - e.g. within each category putting FLO stuff first.
* Ability to upload PDFs and other file types that are currently banned.
* Where works have a relationship, the display does not identify who is the object and who is the subject. For example, the Future of Copyright Anthology and Future of Copyright 2.0 Anthology both have the other's title as a related work, followed by "(sequel)"
* Advanced search
* Walkthrough/tutorial for beginners
* More prompts in the Works form, e.g. for relationships with works
* Update the front page with:
  * What is libre?
  * How you can help (incl a list of pages that need more info)
  * Works by genre etc

## Concerns relating to the import from the FOSsil Bank
* Titles are often wrong as they came from the tag field
* Some sources have been entered as works
* Really, the template for Short Description, Main Description, Alias, etc., shouldn't be Source-or-Work dependent
* Any existing entry will have been skipped in the Entries import (and had data amended in the Works imports)
* Some licensing details were deliberately trimmed in the prep for the import, so stuff like whether coverage is partial or full will be lost
* Existing poor data - e.g. a lot of the recent ones were shoddily filled in by me. 
* Loss of tags means that some relationships acknowledged in the FOSsil Bank are not recorded in here. 
* Some imports are so sparsely detailed they do not trigger the Work template and so do not show up in Category:Work
* Any files uploaded to Wikidot have not been transferred (although they do appear in the backup)
* Some data has gone in the wrong place, e.g. Languages listed as Genres
* All data on platform (Windows, Linux, Mac, HTML5) was deliberately stripped in the cleanup before import

### Loss of data
#### Known
* Tags
  * E.g. The fundfreeculture tag has no equivalent here, so all that data will be lost
* Titles
* Licensing details omitted in cleanup
* Platform omitted in cleanup
* Files

#### Unknown
* Short and Main Descriptions omitted because of import error (this is the case for all Main Descriptions from the Entries import)
* Whole pages not imported or imported wrongly
* Other descriptions, like genres or languages, that were missed for whatever reason
