# Ashvajeet Athawale - Portfolio

A professional portfolio website built with Next.js, JavaScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- 🎨 Modern, professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 (App Router)
- 🎭 Tailwind CSS for styling
- 🔗 Smooth scrolling navigation
- 💫 Animated UI elements
- 📧 Contact integration

## Project Structure

```
new-portfolio/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/
│   └── Navbar.js          # Navigation component
├── public/                # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Customization

You can customize the portfolio by editing:
- `app/page.js` - Main content and sections
- `components/Navbar.js` - Navigation links
- `app/globals.css` - Global styles and theme colors
- `tailwind.config.js` - Tailwind configuration

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically build and deploy

## License

MIT
