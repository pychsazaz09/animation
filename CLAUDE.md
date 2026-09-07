## Agent skills

### Issue tracker

Issues and specs are tracked as local Markdown under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Domain docs

This repository uses a single-context domain documentation layout. See `docs/agents/domain.md`.

### Triage labels

The repository uses the default canonical triage labels. See `docs/agents/triage-labels.md`.

## Git workflow

- `main` is the protected integration branch. Do not commit directly to it after repository bootstrap.
- Start each scoped change from an up-to-date `main` branch using a descriptive branch name such as `feat/catalog-search`, `fix/player-progress`, or `chore/tooling`.
- Keep commits small and focused. Run the relevant formatter, type checks, lint checks, and tests before committing.
- Before integration, rebase the branch onto the latest `origin/main`. If the branch was already pushed, update it with `git push --force-with-lease`, never `--force`.
- Push the branch, open a pull request, require passing checks and review, then squash-merge it into `main` unless a multi-commit history is meaningful.
- Fetch `origin/main` after a pull request merges and delete the merged local branch.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
