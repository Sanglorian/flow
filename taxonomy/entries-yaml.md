# Entry YAML front matter structure

Entries live in `_entries/*.md` and are Markdown files with YAML front matter between `---` lines. The YAML defines the metadata used by the site; any text after the closing `---` is the optional body content (some entries include notes or historical context there).

## Top-level fields

**Required in all entries** (present in every entry file today):

- `layout` (string): always `entry`.
- `title` (string): human-readable title of the entry.
- `permalink` (string): URL path for the entry, usually `/<slug>/`.
- `created_at` (date or datetime string): creation date (e.g., `2015-05-29`).
- `updated_at` (date or datetime string): last update date/time (e.g., `2026-01-02T21:10:30+11:00`).
- `contributors` (array of strings): contributor names.
- `entry` (mapping): primary metadata block (details below).

**Optional, when relevant**:

- `connections` (array of mappings): references to related entries.
- `genres` (array of strings).
- `groupings` (array of mappings): classification for the work/source.
- `grouping` (array of mappings): legacy singular key used in one entry; same shape as `groupings`.
- `languages` (array of mappings).
- `types` (array of mappings).
- `licensing` (array of mappings).
- `versions` (array of mappings).
- `funding` (mapping or array of mappings).

## `entry` block

**Required:**

- `category_of_entry` (string or array): primary category. Most entries use a single string (`Work`, `Collection`, `Source`, `Person`, `Organisation`). Some entries combine multiple categories either as a comma-separated string (e.g., `Work, Collection`) or as an array (e.g., `- Collection`).

**Optional:**

- `short_description` (string): brief summary.
- `main_url` (string): primary URL.
- `main_description` (string or block scalar): longer description; often contains links.
- `featured-entry` (boolean or string): flag marking a featured entry; commonly `yes`.
- `subtitle` (string): short secondary title.
- `alias` (string): alternate name.
- `thumbnail` (string): path to thumbnail image (e.g., `/thumbnails/...`).
- `wikidata_code` (string): Wikidata identifier.
- `year_of_publication` (integer or string): year for works.

## `connections` block

`connections` is an array of mappings. Each item has:

- `has_connection_to_entry` (string, required): name of related entry.
- `details_of_connection` (string, optional): relationship details.
- `explanation` (string, optional): citation or clarification.

## `genres`

`genres` is an array of strings (e.g., `"Fantasy"`, `"IP Minimalism"`).

## `groupings` / `grouping`

`groupings` is an array of mappings; `grouping` is a legacy alias with the same shape.

- `grouping` (string, required): category label (e.g., `"Film"`, `"Music"`).
- `is_or_about_grouping` (string, optional): relationship to the grouping, usually `"is"` or `"about"` (case varies).
- `explanation` (string, optional): clarifying note.

## `languages`

`languages` is an array of mappings:

- `language` (string, required): language name.
- `relationship_of_language` (string, optional): typically `"original"`, `"translation"`, or `"official translation"`.
- `explanation` (string, optional).

## `types`

`types` is an array of mappings:

- `type` (string, required): media or content type (e.g., `"Audio"`, `"Book"`).
- `distribution` (string, optional): distribution channel, usually `"electronic"` or `"hardcopy"`.
- `explanation` (string, optional).

## `licensing`

`licensing` is an array of mappings:

- `license` (string, required in practice): license name.
- `licence_coverage` (string, optional): describes scope of the license (e.g., `"entirety"`, `"part"`, or a more detailed sentence).
- `explanation` (string, optional): citation URL or note.

## `versions`

`versions` is an array of mappings:

- `version_title` (string, optional): display name.
- `version_format` (string, optional): file formats (e.g., `"PDF, ODT"`).
- `version_price` (number, optional): numeric price (often `0`).
- `version_url` (string, required in practice): URL or path to the version.
- `explanation` (string, optional): extra context.

## `funding`

`funding` is either a single mapping or an array of mappings. Each mapping may include:

- `funding_tool` (string, optional): platform (e.g., `"Patreon"`, `"Kickstarter"`).
- `funding_type` (string, optional): funding model such as `"sponsored"`, `"pay-what-you-want"`, `"sales"`, `"Amazon"`, or `"ransom"`.
- `explanation` (string, optional): URL or description.

## Notes on normalization

The taxonomy is intended to describe the normalized front matter shape for entries going forward. Use the field names shown above when submitting new entries.
