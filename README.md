# Club Website Starter (Static, GitHub Pages-ready)

This is a minimal, accessible, mobile-first website you can deploy in minutes.

## Quick Start
1. Click **Download** on the ZIP I provided or clone this folder.
2. Create a new GitHub repo (e.g., `club-website`). Upload all files to the root.
3. In GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** (root `/`), then **Save**.
4. In ~1 minute, your site is live at: `https://<your-username>.github.io/<repo-name>/`

## Editing Content
- Update text in `index.html`, `about.html`, `events.html`, `join.html`.
- Replace links in the **socials** list and the `action` URL in `join.html` with your Formspree / Google Form.
- Change colors in `assets/css/styles.css` (`--brand`, `--brand-2`).

## Local Preview (optional)
- If you have VS Code, install the “Live Server” extension. Right-click `index.html` → “Open with Live Server”.

## Custom Domain (optional)
- In **Settings → Pages**, add your domain (e.g., `mexsa.syr.edu` or `mexsa.club`).
- Add a `CNAME` file in the repo with just your domain name.
- Point DNS `CNAME` to `<your-username>.github.io` (your registrar’s settings).

## Add More Pages
- Duplicate any `.html` file and link it in the header `<nav>`.
- Keep images in `assets/img/`.

## Accessibility Tips
- Always write descriptive link text (avoid “click here”).
- Add `alt` text for images that describes the content.
