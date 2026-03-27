# QuizNow

A browser-based interactive quiz application built with vanilla HTML, CSS, and JavaScript. No frameworks, no libraries — just raw web technology.

---

## Overview

QuizNow is a full-featured quiz platform where users can test their knowledge across multiple categories, track their scores, compete on a global leaderboard, and earn achievements. It was built as an online assessment submission demonstrating DOM manipulation, state management, and clean UI design without relying on any external frameworks.

---

## Features

- **12 questions per session** drawn from a pool of 24 across 5 categories, shuffled randomly each time
- **4 answer options** per question with immediate visual feedback (correct/incorrect highlighting)
- **30-second countdown timer** per question that auto-advances and marks the answer as wrong if time expires
- **Speed bonus** — answering in under 15 seconds awards extra points
- **Category filtering** — filter by All Topics, Science, Gaming, Tech, or Cybersecurity; the quiz only draws from the selected category
- **Live score and streak tracker** visible during the quiz
- **Results screen** — shows final score, accuracy percentage, donut chart, and a full per-question breakdown with your answer vs the correct answer and an explanation for each
- **Leaderboard** — ranked table with a podium for the top 3 players, personal stats sidebar, and load more pagination; stored in localStorage
- **User authentication** — sign up, log in, and log out with session persistence via localStorage
- **Profile page** — level, XP progress bar, accuracy, best streak, global rank, achievement badges, and full quiz history
- **6 unlockable achievements** — First Step, Flawless, On Fire, Top 10, Speed Demon, Dedicated
- **Restart without page refresh** — all state resets cleanly via JavaScript
- **Responsive design** — works on desktop and mobile with a bottom nav bar on smaller screens

---

## Categories

| Category | Cards on Home |
|---|---|
| Science | Quantum Mechanics & Future Tech |
| Tech | Code Master |
| Cybersecurity | Cybersecurity |
| Gaming | Gaming |
| Movies | Cinematic Universes |

---

## Project Structure

```
quiznow/
├── index.html      — all views and markup in a single SPA file
├── style.css       — complete stylesheet using CSS custom properties
├── script.js       — all application logic and state management
└── README.md
```

The app is a single-page application — all screens (Home, Auth, Quiz, Results, Leaderboard, Profile) are rendered as sections inside one `index.html` file and toggled via JavaScript. This approach keeps state management clean and avoids the complexity of passing data between pages.

---

## How to Run

No build tools or server required. Simply open `index.html` in any modern browser.

```
open index.html
```

Or drag and drop `index.html` into your browser window.

---

## Tech Stack

- **HTML5** — semantic markup, single file SPA structure
- **CSS3** — custom properties, grid, flexbox, glassmorphism, animations, responsive design
- **Vanilla JavaScript** — DOM manipulation, state management, localStorage, timer logic
- **Google Fonts CDN** — Manrope (headlines) and Inter (body) typefaces
- **Material Symbols Outlined** — icon system via Google Fonts CDN

No npm, no bundler, no framework, no external JS libraries.

---

## State Management

All application state lives in a single `state` object at the top of `script.js`. This includes the current view, authenticated user, active quiz session (questions, score, timer, answer record, streak), selected category, and leaderboard pagination. Every screen reads from and writes to this single source of truth, making the data flow easy to trace.

User data and leaderboard entries are persisted to `localStorage` so progress survives page refreshes.

---

## AI Usage

This project used AI tooling to accelerate development in two areas:

**UI Design — Google Stitch**
The initial UI designs and screen layouts were generated using Google Stitch. Design prompts were written to specify the visual language — dark mode glassmorphism, the blue-to-purple gradient system, card layouts, the quiz screen structure, and the results/leaderboard screens. The Stitch output served as a reference design that was then implemented in code.

**Code Completion — Antigravity**
Antigravity was used for code completion throughout the development process. It helped accelerate the writing of repetitive patterns, boilerplate HTML structure, and CSS rules, allowing more time to focus on the application logic, state management, edge cases, and overall code quality.

All final code was reviewed, debugged, and refined manually to ensure correctness, consistency, and alignment with the project requirements.

---

## Judging Criteria Notes

- **State management** — single `state` object, no globals scattered across the file, clean reset on quiz restart
- **Edge cases handled** — timer expiry auto-advances correctly, empty category pools show a toast instead of crashing, answer lock prevents double-clicks, session persists across refreshes
- **Non-technical usability** — clear feedback on every interaction, toast notifications for achievements, loading spinners on auth, exit confirmation modal before quitting mid-quiz