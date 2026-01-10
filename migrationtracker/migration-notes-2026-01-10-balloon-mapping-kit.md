# Migration notes (2026-01-10)

## Methodology
- Parsed the latest revision text for each requested page in `Free+and+Open+Works!-20200811084450.xml` and mapped the `Entry` template fields to Jekyll front matter.
- Recorded `created_at`, `updated_at`, and contributor lists from revision metadata.
- Converted MediaWiki markup to Markdown, normalizing links, list markers, and `<br />` line breaks.
- Checked redirect mappings in `migrationtracker/aliases.md` and normalized connection targets (e.g., `Basic D&D` to `Basic Dungeons & Dragons`).

## Obstacles and omissions
- Several entries did not provide a `Short Description` or `Main URL` in the source XML, so those fields are omitted.
- Thumbnail references for Basic Fantasy RPG and Blend Swap were removed because the files were not present in `thumbnails/`.
- Blambot only supplied licensing notes without a named license; preserved the explanation as a custom license entry.
