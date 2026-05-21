# Sheetal Birla – Portfolio

A sleek, dark-themed React + Bootstrap portfolio website built from resume data.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Open http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
```
The `build/` folder is ready to deploy on Netlify, Vercel, or GitHub Pages.

## 📁 Structure

```
src/
├── components/
│   ├── NavBar.jsx       # Sticky navbar with smooth scroll links
│   ├── Hero.jsx         # Full-height hero with stats
│   ├── Skills.jsx       # Skill category cards
│   ├── Experience.jsx   # Timeline with expandable bullets
│   ├── Projects.jsx     # Project showcase cards
│   ├── Education.jsx    # Education + coursework
│   ├── Contact.jsx      # Contact cards + CTA
│   └── Footer.jsx
├── data/
│   └── resume.js        # ← Edit all your info here
├── App.jsx
├── index.css            # Global styles & design tokens
└── index.js
```

## ✏️ Customization

All content lives in `src/data/resume.js`. Edit name, links, experience, projects, skills there — the UI updates automatically.

## 🎨 Design

- **Theme:** Dark cinematic — deep navy + cyan accent
- **Fonts:** Syne (headings) + DM Sans (body)
- **Stack:** React 18 · Bootstrap 5 · Bootstrap Icons
