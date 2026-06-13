# 📖 My Recipe Book

A personal recipe book hosted on GitHub Pages — searchable by ingredient, with sections, favourites, and personal notes.

## Features

- **Ingredient search** — type any ingredient to instantly filter recipes
- **Sections** — recipes are grouped by category (Lunch & Dinner, and more as you add them)
- **Favourite star** — star any recipe; filter to show only favourites
- **Notes & Comments** — write personal notes on each recipe, auto-saved to your browser

---

## How to host on GitHub Pages

1. **Create a new GitHub repository** at [github.com/new](https://github.com/new)
   - Name it something like `recipe-book`
   - Set it to **Public** (required for free GitHub Pages)

2. **Upload the files** — add these two files to the repo:
   - `index.html`
   - `recipes.js`

3. **Enable GitHub Pages**
   - Go to your repo → **Settings** → **Pages** (left sidebar)
   - Under *Source*, select **Deploy from a branch**
   - Choose `main` branch, `/ (root)` folder → click **Save**

4. Your site will be live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

---

## Adding new recipes

Open `recipes.js` and add a new object to the `RECIPES` array:

```js
{
  id: "my-new-recipe",          // unique slug, no spaces
  title: "My New Recipe",
  section: "Lunch & Dinner",    // or any new section name
  description: "Short blurb.",
  ingredients: ["ingredient 1", "ingredient 2"],
  steps: [
    "Step one.",
    "Step two."
  ],
  time: "25 min",
  servings: 2,
  image: ""                     // optional: paste an image URL here
}
```

To add a **new section**, just use a new string for `section` — it will appear automatically.

---

## Notes on data storage

Favourites and personal notes are saved in your browser's `localStorage`. They persist across page refreshes but are tied to the browser you use. They are **not** stored on GitHub or synced across devices.
