# apiary-web

Static marketing site for [Apiary](https://github.com/glenjbarber/apiary), deployed to apiary.work.

No build step. Plain HTML, CSS, and vanilla JS. `status.html` reads live
build status from the GitHub Actions API client-side (no server, no
secrets, no auth token - GitHub's public API allows 60 unauthenticated
requests per hour per visitor, which is enough for a page view).

## Local preview

Any static file server works, for example:

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Hosted on Cloudflare Pages, connected to this repository's `main`
branch. No build command; the output directory is the repository root.
