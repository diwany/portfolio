# Mohamed Diwany — Portfolio Website

A modern, animated, and responsive portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Features an interactive WebGL fluid cursor effect.

**Live:** [diwany.me](https://diwany.me)

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | React framework with SSR/SSG |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Scroll & interaction animations |
| **WebGL Fluid Simulation** | Interactive cursor background effect |
| **next-themes** | Dark/light mode |
| **React Icons** | Icon library |
| **react-type-animation** | Typing effect in hero |
| **react-intersection-observer** | Scroll-triggered animations |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── projects/          # Project screenshot images
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts    # Contact form API endpoint
│   │   ├── globals.css         # Global styles & theme
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page
│   │   ├── sitemap.ts          # Auto-generated sitemap
│   │   └── robots.ts           # robots.txt config
│   ├── components/
│   │   ├── About.tsx           # About section
│   │   ├── Contact.tsx         # Contact form & socials
│   │   ├── FluidCursor.tsx     # WebGL fluid cursor component
│   │   ├── Footer.tsx          # Footer
│   │   ├── Header.tsx          # Sticky navigation
│   │   ├── Hero.tsx            # Hero with fluid background
│   │   ├── ParticleBackground.tsx # Canvas particle animation
│   │   ├── Projects.tsx        # Project cards
│   │   ├── SectionWrapper.tsx  # Scroll animation wrapper
│   │   ├── Skills.tsx          # Skills grid
│   │   └── ThemeProvider.tsx   # Dark/light theme
│   └── hooks/
│       └── useFluidCursor.ts   # WebGL fluid simulation hook
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ & npm

### Installation

```bash
# Clone the repository
git clone https://github.com/diwany/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live!

### Environment Variables (Optional)

If you integrate an email service for the contact form:

```
RESEND_API_KEY=your_resend_api_key
```

---

## ✏️ How to Update

### Change personal info
- Edit text content in the component files under `src/components/`

### Add new projects
- Open `src/components/Projects.tsx`
- Add a new object to the `projects` array

### Update skills
- Open `src/components/Skills.tsx`
- Modify the `skillCategories` array

### Add your resume
- Place your resume PDF at `public/resume.pdf`

### Add project images
- Place screenshots in `public/projects/`
- Reference them in the project objects

### Update social links
- Edit URLs in `Hero.tsx`, `Footer.tsx`, and `Contact.tsx`

---

## 🎨 Customization

### Colors
Edit CSS custom properties in `src/app/globals.css`:
- `--color-primary`: Main accent (red)
- `--color-accent`: Secondary accent
- Light/dark mode variables in `:root` and `.dark`

### Fonts
Change Google Fonts in `src/app/layout.tsx`

---

## 📧 Contact Form

The contact form posts to `/api/contact`. Currently it logs submissions to the console.

To send real emails, integrate one of:
- [Resend](https://resend.com) (recommended)
- [SendGrid](https://sendgrid.com)
- [Nodemailer](https://nodemailer.com)

See `src/app/api/contact/route.ts` for integration instructions.

---

## 📄 License

MIT — feel free to use and modify.

---

Built with ❤️ by **Diwany**
