# Practice Connection Card Deck (Digital Version)

A static, no-build website version of the Practice Connection card deck and
companion journal. Pure HTML/CSS/JS — no dependencies to install.

## Files

- `index.html` — the single HTML shell
- `styles.css` — all styling
- `data.js` — every card and journal page's content, in one place (edit here to change text)
- `script.js` — routing + rendering logic
- `favicon.ico`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` — browser tab icon
- `og-image.png` — the image shown when this link is shared in Slack, email, LinkedIn, iMessage, etc.
- `icon-512.png` — a larger version of the icon, kept in case you want it later (e.g. for a home-screen icon)

## If your URL ever changes

`index.html` has two lines with the full site URL hard-coded (needed for link previews to work):

```html
<meta property="og:image" content="https://ayshateja.github.io/practiceconnection/og-image.png">
<meta property="og:url" content="https://ayshateja.github.io/practiceconnection/">
```

If you rename the repo, move to `ayshateja.github.io`, or connect a custom domain, update both lines to match — otherwise shared links will keep pointing at the old address for their preview image.

## Preview locally

Any static server works, e.g.:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open the printed URL in your browser.

## Publish with GitHub Pages

1. Create a new GitHub repository (public) and push these files to the `main` branch (they can live at the repo root).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick branch `main` and folder `/ (root)`, then **Save**.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

No build step, no `gh-pages` branch, no config files needed.

## How it's organized

- The landing page shows six tiles, one per category (Anchor, See Clearly,
  Move Toward, Share Yourself, Stay Connected, Journal).
- Each category opens a **table of contents** — a grid of mini cards you can click.
- Clicking a mini card opens the **full card**, with Previous / Next navigation
  and a link back to the table of contents.
- The **Journal** category works the same way, but each page has editable
  fields. What you type is saved automatically to your browser's local storage
  (`localStorage`), so it's private to your device and persists between visits.
  There's a "Clear this page" link at the bottom of each journal page if you
  want to start over.

## Editing content

All card and journal text lives in `data.js`. Update the `CARDS` object for
card text, or the various journal constants (`JOURNAL_PAGES`,
`NOTICE_QUESTIONS`, `PRACTICE_QUESTIONS`, etc.) for journal text — the page
layout will update automatically.
