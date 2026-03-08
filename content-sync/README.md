# Lucero Source of Truth Sync

Generated at 2026-03-08T16:49:54.503Z.

- `lucero-source-of-truth.full.json` contains the full network catalog.
- `lucero-source-of-truth.bundle.json` contains the site-focused subset for `buenosairesexpats`.
- `lucero-source-of-truth.manifest.json` contains bundle counts and digests.
- `lucero-source-of-truth.fact-overrides.json` contains curated fact-only overrides for site-specific runtime merges.
- `generated/source-of-truth-fact-overrides.ts` is the typed runtime projection used by the sites.
- `lucero-source-of-truth.audit.json` contains official-source drift findings.
- `lucero-source-of-truth.backfill.json` contains the record-level corrections queue for this site.
- `lucero-source-of-truth.inventory.json` lists structured source files covered or still pending ingestion.
- `lucero-source-of-truth.truthsync.json` tracks which structured modules are wired, projected, or still unsynced under TruthSync.
- `lucero-source-of-truth.ai-queue.json` queues contextual rewrite work for AI agents where deterministic fact patches are not enough.
- `lucero-source-of-truth.pages.json` inventories route files, rendered page coverage, and page-level claim anchors for TruthSync full-pass reviews.
