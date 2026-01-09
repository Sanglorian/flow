# Source migration notes (2026-01-09)

## Methodology
- Parsed the latest revision text for each requested page in `Free+and+Open+Works!-20200811084450.xml` and mapped the `Entry` template fields to Jekyll front matter.
- Recorded `created_at` and `updated_at` using the earliest and latest revision timestamps, and captured contributors from revision metadata.
- Normalized inline markup by removing `<nowiki>` tags and converting `<br />` line breaks to newline characters.
- Verified that the listed pages are not redirects in the XML and used canonical titles for connection targets.

## Obstacles and omissions
- Several entries lack a `Main URL` or `Short Description` in the XML, so those fields are omitted in the generated Markdown.
- `Copysouth Research Group` includes a broken-link note in its main description; preserved as-is for follow-up review.
- No thumbnails were referenced in the XML for these entries, so no thumbnail metadata was added.
