# Business website template

One ready-made website that you rebrand for each company you pitch.

## For each new company (about 10 minutes)
1. Duplicate this folder (or use the GitHub "Use this template" button) and name it after the company.
2. Open `js/config.js` and replace the name, headline, services, contact details and hours.
3. Optional: add a logo and photos in an `images/` folder and point to them in `config.js`.
4. Change the colours (below).
5. Open `index.html` with Live Server and check it on a phone-sized window.
6. Put it online (Cloudflare Pages, Netlify or Vercel) and send the link.

## Colours
Three colours are used across `css/style.css`. In VS Code press Ctrl+Shift+H (find and replace across the file):
- `#1d4e89` main colour (buttons, links, accents)
- `#0f2a47` dark colour (hero, footer, headings)
- `#eef3f9` light tint (alternating sections)

The hero overlay in `js/main.js` uses `rgba(15,42,71,...)`, which is the dark colour in RGB. Change it to match.

## When the client says yes
- Delete the `<meta name="robots" ...>` line in `index.html`.
- Set `preview.show` to `false` in `config.js`.
- Write the page title and meta description straight into `index.html`.
- Add a privacy policy page and a contact form if they need one.
