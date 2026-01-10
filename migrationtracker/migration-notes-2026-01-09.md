# Migration notes (2026-01-09)

## Methodology
- Parsed the latest revision content for each requested page in `Free+and+Open+Works!-20200811084450.xml` and converted MediaWiki markup to Markdown/HTML where needed.
- Recorded `created_at`, `updated_at`, and contributor lists from revision metadata in each generated page.
- Resolved internal links against known redirects and existing site URLs; unresolved targets were left as plain text to avoid broken links.
- Wrapped MediaWiki query/widget syntax in raw blocks when needed to prevent Liquid processing.

## Obstacles and omissions
- Several pages contain spam or low-quality prose from the source wiki; content was migrated verbatim for completeness.
- Some referenced pages (e.g., organizations or licences not yet migrated) have no matching destination in the current site, so those references remain unlinked.
- No thumbnails were referenced in the source for these pages, so no thumbnail metadata was added.
