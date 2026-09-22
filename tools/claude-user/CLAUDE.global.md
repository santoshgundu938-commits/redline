# Global standing instructions

## README.md standard (all web/mobile app repos)

When writing or refactoring a `README.md` in any of this user's web or mobile app projects, follow this blueprint rather than improvising structure:

**Tone:** direct, concise, highly visual, optimized for copy-paste execution. Treat it as a high-converting landing page — immediately engaging for users, deployable by a developer in under 5 minutes. Short/punchy sentences, functional emoji as visual anchors (not decorative), clear fenced code blocks.

**Required sections, in order:**
1. **Header & Quick Pitch** — clean `<h1>` title, relevant status badges, one punchy sentence describing the app, placeholder for screenshots/demo GIF.
2. **Features & Tech Stack** — bulleted feature list + a concise table of core languages/frameworks/databases.
3. **Getting Started** — Prerequisites; Installation Steps (copy-paste code blocks); Configuration (env vars referencing `.env.example`); Run Commands.
4. **Project Structure & Testing** — text-based tree of core logic folders, then the exact terminal commands to run the test suite.
5. **Footer & Compliance** — Contributing note + license.

**Platform adaptations:**
- Web apps: prioritize production deployment links (Vercel/Netlify/etc.), note browser/API constraints if relevant.
- Mobile apps: App Store/Google Play badge placeholders, Expo Go/TestFlight setup, iOS simulator/Android emulator instructions (Xcode, Android Studio).

Ask for project-specific details not already known from context (license choice, badges/CI status, screenshots availability, deployment targets) rather than inventing them — this blueprint fixes structure and tone, not content. Full rationale and origin saved in this user's per-project memory (`feedback_readme_blueprint.md`) across existing project directories.
