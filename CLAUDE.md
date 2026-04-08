# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

This is a **developer web resume/portfolio** built with vanilla HTML, CSS (Tailwind), and JavaScript. It's a static site designed to showcase professional experience, skills, and projects.

The project follows the development roadmap defined in `ROADMAP.md` across 7 phases, from initial setup through deployment.

---

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
  - Claude의 모든 응답과 설명은 한국어로 제공
  - 사용자와의 커뮤니케이션은 한국어로 진행
  
- **코드 주석**: 한국어로 작성
  - HTML, CSS, JavaScript의 복잡한 로직에 대한 설명은 한국어 주석으로 작성
  - 예: `// 모바일 메뉴 토글 함수`
  
- **커밋 메시지**: 한국어로 작성
  - Git 커밋 메시지는 한국어로 작성
  - 예: `feat: 네비게이션 바 반응형 디자인 적용`
  
- **문서화**: 한국어로 작성
  - README.md, 마크다운 문서 등은 한국어로 작성
  
- **변수명 / 함수명**: 영어로 작성
  - 코드 표준을 준수하기 위해 모든 변수, 함수, 클래스명은 영어 사용
  - 예: `function toggleMobileMenu()`, `const heroSection`
  - HTML/CSS class/id 네이밍도 영어 유지
  - 예: `<nav class="navbar">`, `<section id="about-section">`

---

## Getting Started

### File Structure
```
├── index.html              # Main HTML template
├── css/
│   └── styles.css         # Custom CSS (minimal, mostly Tailwind)
├── js/
│   └── script.js          # Vanilla JavaScript for interactivity
├── assets/
│   ├── images/            # Profile photos, project screenshots
│   └── pdf/               # Resume PDF download
└── README.md              # Project documentation
```

### Local Development
- **No build step required** — open `index.html` directly in a browser or use a simple HTTP server:
  ```bash
  # Python 3
  python3 -m http.server 8000
  
  # Python 2
  python -m SimpleHTTPServer 8000
  
  # Node.js (if http-server installed)
  npx http-server
  ```
- **Tailwind CSS**: Used via CDN initially; can be migrated to npm build later if needed
- **Browser testing**: Test on Chrome, Firefox, Safari, and mobile (via DevTools)

---

## Architecture & Design Approach

### Section Organization
The resume is organized into logical sections (defined in HTML as `<section>` elements):

1. **Navigation Bar** — Fixed or sticky header with links to sections
2. **Hero Section** — First impression with profile image, headline, CTA
3. **About** — Brief professional summary
4. **Experience** — Chronological work history (company, role, dates, achievements)
5. **Skills** — Categorized technical abilities with proficiency indicators
6. **Projects** — Portfolio of work with descriptions, tech stack, and links
7. **Contact** — Ways to reach out (email, social, form)

### Styling Strategy
- **Tailwind CSS** for utility-first styling (no custom CSS classes unless necessary)
- **Responsive design**: Mobile-first approach
  - Base styles for mobile (default)
  - `md:` breakpoint for tablets/laptops
  - `lg:` breakpoint for large screens
- **Color scheme**: Establish a consistent palette in Tailwind config or via CSS variables
- **Typography**: Use Google Fonts or system fonts; maintain hierarchy with Tailwind's text utilities

### JavaScript Responsibilities
- **Navigation**: Smooth scroll to sections, active link highlighting
- **Mobile menu**: Toggle hamburger menu on small screens
- **Animations**: Fade-in effects on scroll (consider AOS library if complex)
- **Interactivity**: Modal/card expand on click, form handling
- **Theme toggle**: Dark mode switch (if implemented in Phase 5)

---

## Common Development Tasks

### Adding a New Section
1. Create a `<section>` element in `index.html` with a unique `id`
2. Add semantic markup (use heading, lists, cards as appropriate)
3. Style with Tailwind classes (apply responsive prefixes: `md:`, `lg:`)
4. Add navigation link pointing to section `id`
5. Update any JS event listeners if interactivity is needed

### Updating Content
- Edit text directly in HTML (names, dates, descriptions, links)
- Replace image paths in `assets/images/`
- Keep sample/dummy data for now (as noted in ROADMAP Phase 3)

### Testing Responsiveness
- Open browser DevTools (F12)
- Toggle device toolbar to test mobile, tablet, desktop
- Test on actual devices when possible before deployment

### Preparing for Deployment
- Minify CSS/JS if added custom files (use online minifiers or build tools)
- Optimize images (use tools like TinyPNG)
- Verify all external links work
- Test form submission (if implemented)
- Check SEO meta tags in `<head>`

---

## Key Decisions

### Why Vanilla JS?
- No framework overhead for a simple, static site
- Easier to understand and maintain for future visitors
- Faster load times and better SEO

### Why Tailwind CSS?
- Fast styling without writing custom CSS
- Built-in responsive utilities (`md:`, `lg:`)
- Consistent design tokens across the site
- Easy to maintain and scale

### Static vs. Database
- This site requires no backend or database
- All content is in HTML; no need for CMS or API
- Can be hosted freely on GitHub Pages, Vercel, or Netlify

---

## Deployment

When ready (Phase 7 in ROADMAP):
- **GitHub Pages**: Push to GitHub, enable Pages in repo settings
- **Vercel**: Connect repo, deploy with one click
- **Netlify**: Connect repo, auto-deploy on push
- **Custom domain**: Configure DNS if using domain registrar

All platforms support free hosting for static sites. No server configuration needed.

---

## When to Extend
- **Consider a build step** (Webpack/Vite) only if adding CSS preprocessors (SCSS) or JS bundling later
- **Consider a CMS** only if content changes frequently and non-technical updates are needed
- **Consider a backend** only if adding forms with email notifications, contact database, or dynamic content

For now, keep it simple: HTML + Tailwind + Vanilla JS.

---

## Important Notes
- **Accessibility**: Use semantic HTML (`<nav>`, `<header>`, `<main>`, `<footer>`), alt text for images, sufficient color contrast
- **Performance**: Lazy-load images if many; keep JS minimal; use CSS for animations when possible
- **Browser support**: Test on at least 2-3 major browsers before deployment
