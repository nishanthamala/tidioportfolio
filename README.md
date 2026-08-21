# TEDIO — AI Hotel Video Production Website

A modern, premium React website for **TEDIO**, an AI-powered cinematic video
studio for hotels and hospitality brands. Built with React + Vite, glassmorphism
design, smooth scroll animations, and a right-to-left infinite portfolio reel.

---

## 1. How to run it

```bash
# install dependencies
npm install

# start the local dev server (opens at http://localhost:5173)
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

> Requires Node.js 18+. No other libraries are needed — everything (icons,
> animations, slider) is built with React + CSS.

---

## 2. Where to add portfolio videos

Open **`src/components/Portfolio.jsx`**.

At the top you'll find a clearly marked `portfolioVideos` array:

```js
const portfolioVideos = [
  { src: '/videos/hotel-room-1.mp4', poster: '/images/hotel-room-1.jpg', title: 'Luxury Suite' },
  // ...add or edit entries here
]
```

To add your own video:

1. Drop the `.mp4` file into **`public/videos/`**
   (e.g. `public/videos/hotel-room-1.mp4`).
2. *(Optional)* Add a poster image into **`public/images/`**.
3. Change the `src`, `poster`, and `title` in the array above.

That's it — the slider auto-adapts. You can add or remove as many entries as
you like. Videos are **muted, looping, and lazy-loaded** by default.

---

## 3. Where to change prices

Open **`src/components/Pricing.jsx`**.

Edit the `PLANS` array near the top. Change `price`, the `features` list, and
set `popular: true` on whichever plan you want highlighted as "Most Popular".

---

## 4. Where to change contact details

Open **`src/components/Contact.jsx`**.

Edit these constants near the top:

```js
const PHONE = '0870989098'
const EMAIL = 'dfsd@gmail.com'
```

These drive the clickable `tel:` and `mailto:` links.
(Footer contact links live in `src/components/Footer.jsx` — update them there
too if you change the number/email.)

---

## 5. Where to change the Instagram link

Open **`src/components/Contact.jsx`** and edit:

```js
const INSTAGRAM_URL = 'https://www.instagram.com/' // TODO: replace with your profile
```

The footer Instagram link is in **`src/components/Footer.jsx`** — update it to
the same URL.

---

## 6. Where to change the TEDIO logo / branding

- **Logo component:** `src/components/Logo.jsx` (used in Navbar, Preloader, Footer).
- **Favicon:** `public/favicon.svg` (replace with your own SVG).
- **Brand colors:** edit the CSS variables at the top of `src/styles/index.css`
  (look for `--gold`, `--gold-bright`, `--gold-deep` and the background vars).

---

## Project structure

```
tedio/
├── public/
│   ├── videos/        ← put your .mp4 files here
│   ├── images/        ← put posters / thumbnails here
│   └── favicon.svg
└── src/
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Preloader.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── HowItWorks.jsx
    │   ├── Services.jsx
    │   ├── Portfolio.jsx
    │   ├── BeforeAfter.jsx
    │   ├── Pricing.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   ├── Logo.jsx
    │   └── Reveal.jsx
    ├── App.jsx
    ├── main.jsx
    └── styles/index.css
```

---

© 2026 TEDIO. All rights reserved.
