# The Developer Chronicle - Portfolio

A vintage newspaper-themed portfolio website built with React and Vite.

## Features

- 📰 Vintage newspaper design aesthetic
- ⚡ Fast and modern with React + Vite
- 🎨 Fully responsive design
- 🔀 Client-side routing with React Router
- 📄 Separate Projects page
- 🎭 Smooth animations and transitions

## Project Structure

```
├── public/              # Static assets (images)
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ProjectCard.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── data/           # Data files
│   │   └── projectsData.js
│   ├── styles/         # CSS files
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Routes

- `/` - Home page with portfolio information
- `/projects` - Dedicated projects page

## Technologies Used

- React 18
- React Router DOM v6
- Vite
- CSS3 (with custom properties)
- Google Fonts (Cinzel, Crimson Text, Playfair Display, Rye)

## Customization

### Adding Projects

Edit `src/data/projectsData.js` to add, remove, or modify projects.

### Changing Personal Information

- **Hero Section**: Edit `src/components/Hero.jsx`
- **About**: Edit `src/components/About.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Experience**: Edit `src/components/Experience.jsx`
- **Contact**: Edit `src/components/Contact.jsx`

### Styling

All styles are in `src/styles/` directory:
- `index.css` - Base styles and reset
- `App.css` - Component-specific styles

## License

This project is open source and available under the MIT License.

