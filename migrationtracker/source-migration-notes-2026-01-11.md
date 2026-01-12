# Source migration notes (2026-01-11)

## Methodology
- Parsed the latest revision text for the requested pages in `Free+and+Open+Works!-20200811084450.xml` and mapped `Entry` template fields to Jekyll front matter.
- Recorded `created_at` and `updated_at` from the earliest and latest revision timestamps, and captured contributors from revision metadata.
- Converted template data for connections, groupings, genres, languages, types, licenses, and versions into structured front matter lists.
- Normalized `<br />` line breaks into newlines, trimmed extra whitespace, and split comma-delimited lists into discrete entries.
- Checked redirect aliases in `migrationtracker/aliases.md` to ensure connection targets use canonical names.

## Obstacles and omissions
- Several pages omit a short description or main URL in the XML, so those fields are absent in the generated Markdown.
- The French Government entry stores its URLs in the main description rather than a dedicated main URL field.
- No thumbnail metadata was present in the XML for these pages.
