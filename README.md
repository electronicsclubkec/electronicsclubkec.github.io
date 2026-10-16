# KEC Electronics Club website

Plain HTML, CSS and JavaScript. No build tools. Works on GitHub Pages.

## Files
- `index.html`: home. `about/ events/ projects/ workshops/ resources/ blog/ contact/`: one `index.html` each (clean URLs like `/about/`).
- `css/style.css`: all styling (colors are variables at the top). `js/script.js`: menu and resource filter.
- `assets/images/`: put photos here (WebP, compressed). `templates/`: how to add projects and articles.

## Preview locally
In this folder run `python3 -m http.server 8000`, open http://localhost:8000. All links are relative, so they work locally and on a project site.

## Deploy on GitHub Pages
1. Create a GitHub repository and upload every file in this folder (keep `.nojekyll`).
2. Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
3. Wait a minute. Your address is `https://USERNAME.github.io/REPOSITORY/` (or `https://USERNAME.github.io/` if the repo is named `USERNAME.github.io`).
4. Run `python3 set_url.py https://USERNAME.github.io/REPOSITORY`. This replaces the placeholder address in canonical tags, structured data, sitemap and robots.txt. Commit and push. Delete `set_url.py` if you like.

## Placeholders to replace (yellow notes in the pages)
Social links (footer, contact) | join/application link (contact) | hero photo | real projects, events, workshops, team, mission and founding year | blog articles.

## After publishing (SEO)
1. Open the public HTTPS URL. View source and check title, description and canonical.
2. Open `/robots.txt` and `/sitemap.xml`.
3. Google Search Console: add property, verify (HTML tag or DNS), submit `sitemap.xml`, inspect the home URL, request indexing.
4. Bing Webmaster Tools: add site (can import from Google), submit sitemap.
5. Test structured data at validator.schema.org and run Lighthouse / PageSpeed Insights.
6. Watch Search Console for queries and indexing issues. Indexing and ranking take time and are not guaranteed.
7. Ask the college to link to the site if permitted, link from real club social profiles, and publish genuine project reports.
Add the new page to `sitemap.xml` whenever you create one.

## Credits
- Initial website design and development: Krish Bishwakarma
- Organization: KEC Electronics Club, Kantipur Engineering College
- Maintenance and future contributions: KEC Electronics Club members
