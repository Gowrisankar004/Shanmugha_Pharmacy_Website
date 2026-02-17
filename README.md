# Pharmacy React Version

## Project Overview
This is a React conversion of the Sri Shanmugha College Of Pharmacy website, maintaining the **exact UI/UX** from the original HTML version.

## What Has Been Completed

### ✅ Home Page Conversion
The home page has been successfully converted to React with:

- **Exact HTML Structure**: All sections preserved exactly as in the original
- **All CSS Files**: Copied to `/public/css/` directory
- **All JavaScript Files**: Copied to `/public/js/` directory  
- **All Assets**: Images, PDFs, fonts, and other resources copied to `/public/` directory
- **React Router**: Navigation links converted to React Router `<Link>` components
- **Animations Initialized**: useEffect hooks properly initialize:
  - WOW.js for scroll animations
  - Swiper.js for hero sliders
  - Counter animations
  - Magnific Popup for gallery lightbox
  - All other JavaScript plugins

### 📁 Project Structure
```
pharmacy_react_version/
├── public/
│   ├── css/              # All original CSS files
│   ├── js/               # All original JavaScript files
│   ├── images/           # All images and graphics
│   ├── pdf/              # All PDF documents
│   ├── webfonts/         # Font files
│   ├── frontpage/        # Additional resources
│   └── sif/              # SIF reports
├── src/
│   ├── pages/
│   │   └── Home.jsx      # Home page component
│   ├── App.jsx           # Main app with routing
│   └── main.jsx          # Entry point
└── index.html            # HTML with all CSS/JS includes
```

### 🎨 UI/UX Features Preserved

1. **Topbar**: Contact info, quick links, social media
2. **Header**: Logo and full navigation menu with dropdowns
3. **Hero Slider**: Two-slide carousel with animations
4. **Marquee**: NAAC announcement banner
5. **About Section**: Two-column layout with images and counters
6. **Statistics Counter**: Animated counters for key metrics
7. **Facilities Grid**: Four facility showcases
8. **Courses Section**: Four course cards with details
9. **Video Section**: Embedded YouTube video showcase
10. **Gallery**: Six-image photo gallery with lightbox
11. **Group Institutions**: Three institution logos
12. **Footer**: Four-column footer with links and contact info

### 🔧 Technical Implementation

- **React Router DOM**: For client-side routing
- **useEffect Hooks**: Properly initialize all jQuery plugins after component mount
- **Inline Styles**: Custom CSS maintained as React inline styles where needed
- **External Scripts**: All original JavaScript files loaded via index.html
- **Asset Paths**: All paths updated to work with Vite's `/public` directory

## Running the Project

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Server
The app is currently running at: **http://localhost:5173**

## Next Steps

The home page conversion is complete and ready for review. Once approved, we will proceed to convert the remaining pages one by one:

1. ✅ Home/Index Page (COMPLETE)
2. ⏳ About Pages
3. ⏳ Academic Pages
4. ⏳ Committee Pages
5. ⏳ Gallery Pages
6. ⏳ Contact Page
7. ⏳ Additional Pages

## Notes

- All HTML has been converted to JSX with proper React syntax
- All `href` links to internal pages use React Router `<Link>` components
- External links and PDF links remain as standard `<a>` tags
- No UI/UX changes - this is a 1:1 conversion maintaining the exact look and feel
- All animations, transitions, and interactive elements work exactly as in the original

## Technologies Used

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **React Router DOM**: Client-side routing
- **Original Libraries**:
  - Bootstrap 5
  - jQuery 3.7.1
  - Swiper.js
  - WOW.js
  - GSAP
  - Magnific Popup
  - And all other original plugins
