# ChatGPT (Safari) Launcher — PWA (No Auto-Redirect Until Installed)

This version avoids immediate redirect in Safari so you can **Add to Home Screen**. Once installed (standalone mode), it auto-opens ChatGPT.

## Install flow
- Open in Safari → Share → Add to Home Screen.
- Launch from the icon → it redirects instantly to https://chat.openai.com.
- Manual fallback button is provided on the landing page.
- Add `?go=1` to the URL if you want to force redirect even when not installed.

## GitHub Pages notes
- Keep files in repo root or `/docs` and set Pages accordingly.
- A `.nojekyll` file is optional but safe to add.
