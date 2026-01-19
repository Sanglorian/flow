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

## W-Z batch normalization notes
- Normalized groupings via `aliases.md`:
  - WTactics: Tabletop Game (Card Game) → Card Game.
  - What Is a Roleplaying Game: Tabletop Game (RPG) → Tabletop Roleplaying.
  - Where Are Your Keys: Tabletop Game → Tabletop Gaming.
  - White House Honey Ale: Recipe → Recipes.
  - Wide Stance: Tabletop Game (RPG) → Tabletop Roleplaying.
  - Wikidata: Information (Data) → Data.
  - Wikiseat: Hardware → Technology.
  - Wiley Open Access: Information (OER) → Education.
  - Wings Keeton and The Airship of Doom: Tabletop Game (RPG) → Tabletop Roleplaying.
  - Witless Minion: Tabletop Game (RPG) → Tabletop Roleplaying.
  - Wordplay Basics: Tabletop Game (RPG) → Tabletop Roleplaying.
  - Wordplay Core Rules: Tabletop Game (RPG) → Tabletop Roleplaying.
  - World Of Nevermore: Tabletop Game (RPG) → Tabletop Roleplaying.
  - Worlds in Peril: Tabletop Roleplaying Game → Tabletop Roleplaying.
  - Wrack & Wruin: Tabletop Game (RPG) → Tabletop Roleplaying.
  - Wushu Open: Tabletop Game (RPG) → Tabletop Roleplaying.
  - Xceptional: Tabletop Game (RPG) → Tabletop Roleplaying.
  - Xodd: Tabletop Game (Boardgame) → Boardgame.
  - Yags: Tabletop Game (RPG) → Tabletop Roleplaying.
  - You All Meet In A Tavern: Tabletop Game (RPG) → Tabletop Roleplaying.
  - ZEFRS: Tabletop Roleplaying Game → Tabletop Roleplaying.
  - Zamani: Tabletop Game (RPG) → Tabletop Roleplaying.
  - Zap! The Science Fiction RPG: Tabletop Game → Tabletop Gaming.
  - Zero Project: Literature (Audiobooks) → Audiobook.
  - Zombie Squad: Tabletop Game (RPG) → Tabletop Roleplaying.
  - Zounds! The Fantasy RPG: Tabletop Game → Tabletop Gaming.
  - …in Spaaace!: Tabletop Game (RPG) → Tabletop Roleplaying.
- Normalized cross-references via `aliases.md`:
  - Wrack & Wruin connection: Basic D&D → Basic Dungeons & Dragons.

## W-Z batch omissions confirmed in XML
- Short descriptions are empty or missing for: What Is a Roleplaying Game; Why Open Education Matters; Wikidata; Winning The Web; World Bank Open Knowledge Repository; Wushu Black Belt Edition; You All Meet In A Tavern; Zenhabits.
- Main URL is missing for: WIRED.
- Main descriptions are empty or missing for: WIRED; WPClipart; WTactics; What's the Deal with Copyright and 3D Printing; What Is a Roleplaying Game; Where Are The Joneses; Where Are Your Keys; White House; White House Honey Ale; Why Hippos Have No Hair; Why Open Education Matters; Why the Heck Should I Care about the TPP?; Wide Stance; Wikidata; Wikinews; Wikipedia; Wikipedia Chanukah; Wikipedia List of Game Engines; Wikipedia Sound List; Wikiseat; Wiley Open Access; Wings Keeton and The Airship of Doom; Winning The Web; Witless Minion; Wordplay Core Rules; World Bank Open Knowledge Repository; Writer's Dice Guide; Wu Ming Foundation; Wushu Black Belt Edition; Wushu Open; Xceptional; Xodd; Yags; Yanone Kaffeesatz; Yorokobu; YouTube; ZEFRS; Zamani; Zenhabits; Zero Project; Zero Sum Game; Zombie Squad; …in Spaaace!.
