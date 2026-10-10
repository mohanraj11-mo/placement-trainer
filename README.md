# Placement Trainer AI — Phase 2

A modular, browser-only placement preparation platform with two tracks
(ECE Core and Software), full aptitude training, an instant-feedback
quiz engine, and an in-app Admin panel for growing the question bank
without touching code.

## Run it

No build step, no server required — just open `index.html` in a browser.
(If your browser blocks local file access for any reason, serve the folder
with any static server, e.g. `npx serve .`.)

## Structure

```
placement-trainer-ai/
├── index.html              Entry point — wires up all scripts
├── css/style.css            All styling (single stylesheet)
├── data/
│   ├── subjects.js          Registry: 28 ECE subjects, 22 Software
│   │                        subjects, 19 Aptitude topics (id/name/icon)
│   ├── questions-ece.js      Seed question banks — 6 ECE subjects x 20 MCQs
│   ├── questions-software.js Seed question banks — 6 Software subjects x 20 MCQs
│   └── questions-aptitude.js Seed question banks — 5 Aptitude topics x 20 MCQs
└── js/
    ├── storage.js           Data access layer + localStorage-backed
    │                        admin CRUD (subjects/topics/questions)
    ├── quiz.js               Quiz engine: question flow, scoring, results
    ├── admin.js               Admin panel UI (add/edit/delete questions,
    │                          add subjects/topics)
    └── app.js                 Hash router + page templates (home, module
                               grids, aptitude grid, thank-you/exit)
```

## Why this shape

- **Questions are data, not code.** Every quiz screen reads from
  `PTAStore.getQuestions(subjectId)` — never from a hardcoded array in a
  component. Add 10,000 more questions and nothing in `js/` changes.
- **Seed data is never mutated.** Admin edits/deletes are layered on top
  in `localStorage` (`pta_custom_v1`) via a clone-on-first-edit strategy.
  You can always tell what's "factory content" (in `/data`) vs. admin
  additions (in the browser's storage).
- **One id space, one quiz engine.** ECE subjects, Software subjects, and
  Aptitude topics are all just "subjects" with an id — the same
  `PTAQuiz.start(id, backRoute)` call renders all of them, so adding a
  new category never requires new quiz UI.

## Current seed content

17 of the 69 total subjects/topics ship with a full, hand-written set of
20 MCQs (6 ECE, 6 Software, 5 Aptitude — the ones most commonly asked in
interviews). The remaining subjects are fully wired up (cards, routing,
quiz engine) but start with an empty bank; opening one shows a
"no questions yet" screen with a direct link into Admin to fill it in.
This keeps the whole platform honest — no fake or filler questions.

## Using Admin

Go to **Admin** in the navbar:
- **Manage Questions** — pick any subject/topic, add a question (with the
  correct-answer radio button), or edit/delete existing ones.
- **Add Subjects / Topics** — add a brand-new ECE subject, Software
  subject, or Aptitude topic; it appears immediately in its module grid
  with a "0/20 Qs" badge until questions are added.

## Extending further (ideas, not built)

- Swap `localStorage` for a real backend (the `PTAStore` interface is
  already the seam — only `storage.js` would need to change).
  Everything else in the app is a pure UI wired against that interface.
- Add per-question difficulty/tags and a "weak topics" report using the
  existing `state.log` data captured per quiz attempt.
- Add auth so only admins see the Admin nav link.
