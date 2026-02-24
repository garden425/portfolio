# KIM Portfolio Project

This project is a modern portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**, powered by **Vite**.

## Project Structure

- `src/`: Contains all source code.
  - `components/`: Reusable UI components.
  - `App.tsx`: Main application component.
  - `index.tsx`: Entry point.
  - `index.css`: Global styles and Tailwind imports.
- `index.html`: Main HTML file.
- `tailwind.config.js` & `postcss.config.js`: Tailwind CSS configuration.
- `vite.config.ts`: Vite configuration.
- `.github/workflows/deploy.yml`: GitHub Actions workflow for automatic deployment to GitHub Pages.

## Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Deployment to GitHub Pages

The project is pre-configured for GitHub Pages. 
1. Push your code to the `main` branch of your GitHub repository.
2. The GitHub Action in `.github/workflows/deploy.yml` will automatically build and deploy the site.
3. Ensure your repository settings have GitHub Pages source set to "GitHub Actions".

## Syncing with your Repository

If you haven't connected this to your repository yet:

```bash
git init
git remote add origin https://github.com/garden425/garden425.github.io.git
git add .
git commit -m "Initial commit: Portfolio project setup"
git push -u origin main
```
