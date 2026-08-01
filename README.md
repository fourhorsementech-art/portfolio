# FourHorseMen Technologies — Website

## Folder structure
```
fourhorsemen-site/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── logo.png
└── README.md
```

## How to run it in VS Code

1. Open the `fourhorsemen-site` folder in VS Code (`File → Open Folder…`).
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions tab, if you don't have it already.
3. Right-click `index.html` in the file explorer and choose **"Open with Live Server."**
4. Your browser will open automatically and reload live as you edit and save.

No build step, no npm install — it's plain HTML, CSS and JS.

If you'd rather not install anything, you can also just double-click `index.html` to open it directly in a browser, though a couple of things (like smooth scroll-linking) work best served from Live Server.

## What to customise before going live

- **Phone number** — still a placeholder in the footer (`index.html`); update it with a real number.
- **Contact form (footer, "Book a collection")** — currently only shows a "thanks" message in the browser; it doesn't send an email anywhere. To make it functional, connect it to a service like Formspree, EmailJS, or a small backend endpoint.
- **Project brief form ("Build a site" section)** — this one already works without a backend: on submit it opens the visitor's email app with a message addressed to `fourhorsementech@gmail.com`, pre-filled with their name, email, project type and scope. If they don't have a desktop email client configured, nothing will visibly open — worth pairing with Formspree/EmailJS too if that's a concern.
- **Partner details** — add titles/roles under each name in the Partners section if you'd like more than "Founding Partner."
- **Logo** — `images/logo.png` is your real logo, cropped from the file you provided. Swap the file for a higher-resolution version any time — same filename, and it'll update everywhere automatically.

## Services shown on the site
- Internet Café
- IT Support & Network Support
- Application Development (including business websites)
- E-Waste Collection & Refurbishment
