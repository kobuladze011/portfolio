# The Developer Chronicle - Vintage Magazine Portfolio

A stunning vintage newspaper/magazine-style portfolio designed for web developers, featuring authentic 1884-era aesthetics with modern web technologies.

## Features

- 📰 **Authentic Vintage Design**: Old newspaper aesthetic with aged paper effects
- 📱 **Fully Responsive**: Looks great on all devices
- 🎨 **Beautiful Typography**: Classic serif fonts (Playfair Display, Crimson Text, Cinzel)
- 📋 **Complete Sections**: About, Skills, Work Experience, Contact

## Customization Guide

### 1. Update Personal Information
Edit these sections in `index.html`:
- **About Section**: Replace the biographical text
- **Skills**: Modify the skills in each category
- **Work Experience**: Update job titles, company names, dates, responsibilities, and tech stacks
- **Contact Info**: Replace email, GitHub, LinkedIn, and website URLs

### 2. Customize Colors
In `style.css`, modify the CSS variables:
```css
:root {
    --paper-bg: #f4e9d8;      /* Paper background */
    --dark-ink: #2c1810;      /* Main text color */
    --brown-ink: #4a3428;     /* Secondary text */
    --sepia: #8b7355;         /* Accent color */
    --aged-white: #faf6ee;    /* Light backgrounds */
    --border-color: #3d2817;  /* Borders and decorations */
}
```

### 3. Add More Work Experience
Copy this experience template in `index.html`:
```html
<div class="experience-item">
    <div class="experience-header">
        <h4 class="job-title">Your Job Title</h4>
        <div class="company-name">Company Name</div>
        <div class="employment-period">Start Date - End Date</div>
    </div>
    <div class="experience-content">
        <p>Brief description of your role and achievements...</p>
        <ul class="responsibilities">
            <li>Responsibility or achievement 1</li>
            <li>Responsibility or achievement 2</li>
            <li>Responsibility or achievement 3</li>
        </ul>
        <div class="tech-stack">Tech • Stack • Used</div>
    </div>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips for Best Results

1. **Content**: Keep descriptions concise and impactful
2. **Work Experience**: List 3-4 most relevant positions in reverse chronological order
3. **Responsibilities**: Use bullet points to highlight key achievements with metrics when possible

## Live Preview

Simply open `index.html` in your web browser to see your portfolio!

## Credits

- Design inspired by vintage 1884 newspapers
- Typography: Google Fonts (Playfair Display, Crimson Text, Cinzel)

---

**Built with ❤️ for developers who appreciate vintage aesthetics**

