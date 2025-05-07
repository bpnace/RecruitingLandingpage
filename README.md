# Recruiting Agency Landing Page

A minimalistic, modern, multi-page landing site for a recruiting agency. Built with React, CSS Modules, and React Router. The design is pixel-perfect, closely following a modern consulting template, and uses only static content and placeholder images. The entire site is in German and uses the "Poppins" font.

---

## Features
- **Pixel-perfect, responsive design** based on a modern consulting template
- **Multi-page:** Home, About Us, Job Offers
- **Component-based:** Atomic React components for maintainability
- **CSS Modules:** Scoped and easy-to-customize styles
- **Placeholder images** (https://picsum.photos/)
- **Font:** [Poppins](https://fonts.google.com/specimen/Poppins)
- **100% static:** No animations, no dynamic data
- **Accessible & semantic HTML**

---

## Tech Stack
- [React](https://react.dev/) (with Vite)
- [React Router](https://reactrouter.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Poppins Font](https://fonts.google.com/specimen/Poppins)

---

## Setup & Development

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```sh
# Clone the repository
git clone <repo-url>
cd "Recruiting Agency"

# Install dependencies
npm install
# or
yarn install
```

### Start Development Server
```sh
npm run dev
# or
yarn dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Build for Production
```sh
npm run build
# or
yarn build
```

---

## Project Structure
```
Recruiting Agency/
├── public/
├── src/
│   ├── assets/           # Placeholder images, logos
│   ├── components/       # Reusable UI components
│   ├── pages/            # Pages (Home, About Us, Job Offers)
│   ├── App.jsx           # Routing & layout
│   └── main.jsx          # Entry point
├── package.json
├── README.md
└── ...
```

---

## Customization
- **Colors, text, and images** can be changed in the respective components.
- **Font:** Poppins is included via Google Fonts in `index.html`.
- **Components:** Atomic design principles for easy extension.

---

## Contributing
Pull requests are welcome! Please follow the existing code and design conventions.

---

## License
MIT License

---

## Contact
For questions or support: [info@lorem-ipsum-agentur.de](mailto:info@lorem-ipsum-agentur.de)

## Testimonials

- The site features a testimonial carousel/slideshow styled after [this card design](https://21st.dev/preetsuthar17/testimonial-card/default).
- Testimonials are manually curated (due to API and legal limitations with Google/LinkedIn reviews).
- Each testimonial includes:
  - A profile picture (placeholder image for now)
  - A short testimonial text
  - A star rating (1–5 stars)
  - Name and (optional) company/role
- The carousel is fully responsive and visually matches the referenced card style.
- You can update testimonials in the code or connect to a backend in the future.
