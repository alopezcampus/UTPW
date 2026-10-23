# URBAN THEORY permanent WORKSHOP

Website of the URBAN THEORY permanent WORKSHOP, an ongoing, distributed workshop in urban theory.

The site is plain HTML, CSS and a little JavaScript. There is no build step, no framework and no tracking, so it can be hosted for free on GitHub Pages and edited in any text editor.

## Structure

```
index.html                 Home
about/index.html           About: manifesto (first), the name, history, aims, community
programme/index.html       Programme: 2026-2027 theme, format, the five cycles
programme/cycle-N/         One page per cycle with its full programme (cycle-1 to cycle-5)
network/index.html         Network: figures, world map of member countries, clickable research clusters
archive/index.html         Archive: Roundtables and all Contributions
contributions/*/           One page per contribution; contributions/index.html redirects to the Archive
convenors/index.html       Convenors
contact/index.html         Contact email and mailing-list sign-up
404.html                   Page not found
assets/css/site.css        All styles (colours and type are variables at the top)
assets/js/config.js        Contact email and mailing-list form address (edit this file)
assets/js/site.js          Mobile menu and mailing-list form
assets/fonts/              Self-hosted Poppins (see LICENSES.md)
assets/img/                Logo mark (SVG), favicon, share image
```
## Preview on your computer

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish on GitHub Pages

1. Create a new repository on GitHub, for example `urban-theory-permanent-workshop`. Leave it empty.
2. From this folder:

   ```
   git init
   git add .
   git commit -m "First version of the site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USER/urban-theory-permanent-workshop.git
   git push -u origin main
   ```

   With the GitHub CLI, the same in two commands: `gh repo create urban-theory-permanent-workshop --public --source=. --push`.
3. In the repository go to **Settings, Pages**. Under **Build and deployment** choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://YOUR-USER.github.io/urban-theory-permanent-workshop/`.

All links are relative, so the site works at that address and at a custom domain without changes.

### Custom domain (optional)

Add a file named `CNAME` at the root containing only the domain, for example `urbantheoryworkshop.com`. Then set the DNS records GitHub lists under Settings, Pages. Check first who controls the old domain and where it currently points.

## Editing

- **Text:** open the page's `index.html` and edit the words between the tags. Search for the phrase you want to change.
- **Contact email and mailing list:** `assets/js/config.js`. Put the address of a form service (Formspree, Buttondown, Mailchimp) in `subscribeAction` to collect sign-ups automatically. While it is empty, the form opens an email to the contact address with the subscriber's address in it.
- **Cycle programmes:** edit `programme/cycle-N/index.html` and the matching box in `programme/index.html`.
- **Map:** the map on `network/index.html` is drawn into the page. Each country with members is a `<circle class="dot">` with its name in `data-name`. Ask for the map to be regenerated when a country is added.
- **Colours and type:** variables at the top of `assets/css/site.css`. The blue is `#0000ff`, the blue of the logo mark. The whole site uses one family, Poppins, the type of the logo and the menu.
- **Adding a new page:** copy a folder such as `about/`, rename it, edit the text, and add a link in the header and footer `<nav>` of every page.

## Credits

Font: Poppins, under the SIL Open Font License 1.1, served from `assets/fonts/`. Map outlines: Natural Earth (public domain), via world-atlas.
