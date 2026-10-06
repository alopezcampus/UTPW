# Urban Theory Permanent Workshop

Website of the Urban Theory Permanent Workshop, an ongoing, distributed workshop in urban theory.

The site is plain HTML, CSS and a little JavaScript. There is no build step, no framework and no tracking, so it can be hosted for free on GitHub Pages and edited in any text editor.

## Structure

```
index.html              Home
about/index.html        About: the name, aims, manifesto placeholder, community
programme/index.html    Programme: 2026-2027 theme, five cycles, format
archive/index.html      Archive: questions from the 2021 edition
convenors/index.html    Convenors
contact/index.html      Contact
404.html                Page not found
assets/css/site.css     All styles (colours and type are variables at the top)
assets/js/config.js     Contact email and sign-up link (edit this file)
assets/js/site.js       Mobile menu and contact links
assets/fonts/           Self-hosted fonts (see LICENSES.md)
assets/img/             Logo mark (SVG), favicon, share image
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
- **Contact email and sign-up link:** `assets/js/config.js`. While both are empty the Contact page says that details are coming. Once filled in, buttons appear on that page.
- **Colours and type:** variables at the top of `assets/css/site.css`. The blue is `#0000ff`, the blue of the logo mark.
- **Adding a new page:** copy a folder such as `about/`, rename it, edit the text, and add a link in the `<nav>` of every page.

Before publishing, read `CONTENT-TODO.md`.

## Credits

Fonts: Poppins, Newsreader and IBM Plex Mono, under the SIL Open Font License 1.1, served from `assets/fonts/`.
