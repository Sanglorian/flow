# Migration notes (2026-01-10)

## Methodology
- Parsed the latest revision text for each requested page in `Free+and+Open+Works!-20200811084450.xml` and mapped the `Entry` template fields to Jekyll front matter.
- Recorded `created_at`, `updated_at`, and contributor lists from revision metadata.
- Converted MediaWiki links to Markdown, normalized `<br />` tags to line breaks, and removed wiki markup such as double-apostrophe italics and `[[...]]` links.
- Checked redirect mappings and normalized connection targets (e.g., `Basic D&D` to `Basic Dungeons & Dragons`).

## Obstacles and omissions
- No thumbnail metadata appeared in the source XML for these entries, so no thumbnail fields were added.
- One entry (`Alpha Word Game System`) used multi-paragraph `Main Description` content; preserved it as a block scalar in Markdown.
