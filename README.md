# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploy to GitHub Pages

### Option A: Save the build in the repo (no GitHub Actions)

1. Build for GitHub Pages (output goes to `docs/`):
   ```bash
   npm run build:pages
   ```
   If your repo name is **not** `JuTech`, run:
   ```bash
   npx cross-env BUILD_OUT_DIR=docs VITE_BASE_PATH=/your-repo-name/ npm run build
   ```

2. Commit and push the `docs/` folder:
   ```bash
   git add docs
   git commit -m "Update GitHub Pages build"
   git push
   ```

3. In the repo: **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose **Branch**: `main`, **Folder**: `/docs`, then **Save**.

The site will be at **`https://your-username.github.io/JuTech/`** (or `/your-repo-name/`).

### Option B: Build on every push (GitHub Actions)

1. In the repo: **Settings → Pages** → set **Source** to **GitHub Actions**.
2. Push to `main` (or run the workflow from the **Actions** tab).

The workflow builds with prerender and deploys automatically.
