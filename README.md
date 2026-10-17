# NewPortafolio2026

The React application lives in `portafolio/`. Netlify uses the root
`netlify.toml` to run `npm ci --include=dev` followed by `npm run build`
from that directory, then publishes `portafolio/dist`. The explicit install
step ensures TypeScript and Vite are available even when deployment starts
without installed dependencies.

