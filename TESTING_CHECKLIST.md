# Home Page Testing Checklist

## 🌐 Server Information
- **Development Server**: http://localhost:5173
- **Status**: Running ✅

## ✅ Testing Checklist

### 1. Visual Verification
- [ ] Page loads without errors
- [ ] All images are displayed correctly
- [ ] Logo appears in the header
- [ ] Favicon shows in browser tab
- [ ] Layout matches the original HTML version exactly

### 2. Navigation Testing
#### Topbar Links
- [ ] Phone number link works
- [ ] Email link works
- [ ] ADMISSION link (external) works
- [ ] NIRF PDF opens
- [ ] CAREER link (external) works
- [ ] IIC link ready (placeholder)
- [ ] PLACEMENT link ready (placeholder)
- [ ] FACILITIES link ready (placeholder)
- [ ] CONTACT link ready (placeholder)
- [ ] Social media links (YouTube, LinkedIn, Instagram) work

#### Main Menu
- [ ] HOME link works
- [ ] ABOUT dropdown menu appears
- [ ] ACADEMICS dropdown menu appears
- [ ] RESEARCH dropdown menu appears
- [ ] IQAC dropdown menu appears
- [ ] NAAC dropdown menu appears
- [ ] SIF REPORT dropdown menu appears
- [ ] COMMITTEES dropdown menu appears
- [ ] STUDENT LIFE link ready

### 3. Hero Section
- [ ] Hero slider auto-rotates
- [ ] Swiper pagination dots visible
- [ ] First slide shows "Shape Your Future..." text
- [ ] Second slide shows "Where Science Meets Compassion" text
- [ ] Slide images load correctly
- [ ] ABOUT US button works
- [ ] VIEW COURSES button works
- [ ] NAAC marquee scrolls continuously
- [ ] Marquee stops on hover

### 4. About Section
- [ ] Two images display correctly
- [ ] Experience counter animates to "7+"
- [ ] Text content is readable and formatted
- [ ] "Read More" button visible

### 5. Statistics Counter
- [ ] Counter animates on scroll
- [ ] "7+ Years" counter works
- [ ] "500+ Students" counter works
- [ ] "35+ Faculties" counter works
- [ ] "4+ Academic Awards" counter works
- [ ] "3+ Group Of Institutions" counter works
- [ ] Icons display correctly

### 6. Facilities Section
- [ ] Section title "Our Facilities" displays
- [ ] 4 facility images load
- [ ] Facility titles show:
  - Center of Excellence
  - Classroom
  - Laboratory
  - Library

### 7. Courses Section
- [ ] Section title "Our Courses Offered" displays
- [ ] 4 course cards show:
  - D.Pharmacy
  - B.Pharmacy
  - Pharm.D
  - M.Pharm
- [ ] Course icons display
- [ ] "Learn more" links work
- [ ] "View all courses" button works

### 8. Video Section
- [ ] Video thumbnail displays
- [ ] Play button appears
- [ ] YouTube link opens in new tab

### 9. Gallery Section
- [ ] "GALLERY" title displays
- [ ] 6 gallery images load
- [ ] Clicking image opens lightbox (Magnific Popup)
- [ ] Navigation arrows work in lightbox
- [ ] Close button works in lightbox

### 10. Group of Institutions
- [ ] Section title displays
- [ ] 3 institution logos show
- [ ] Logos have proper styling/border

### 11. Footer
- [ ] About Us text displays
- [ ] Social media icons work
- [ ] Quick Links column 1 (7 links)
- [ ] Quick Links column 2 (7 links)
- [ ] Contact information displays:
  - Address
  - Phone number
  - Email
  - Website
- [ ] Copyright text shows
- [ ] Designer logo displays

### 12. Animations & Effects
- [ ] WOW.js animations trigger on scroll
- [ ] Elements fade in as you scroll down
- [ ] Smooth scrolling works
- [ ] Hover effects work on buttons
- [ ] Cursor effects work (if enabled)

### 13. Responsive Design
- [ ] Mobile menu toggle works
- [ ] Layout adjusts for tablet
- [ ] Layout adjusts for mobile
- [ ] Logo size adjusts (250px on mobile)

### 14. Fixed Elements
- [ ] "Admission Enquiry" button visible on right side
- [ ] Button rotated 90 degrees
- [ ] Button stays fixed during scroll

### 15. Browser Console
- [ ] No JavaScript errors
- [ ] No 404 errors for assets
- [ ] No CSS loading errors
- [ ] All fonts load correctly

## 🐛 Common Issues to Check

1. **Images not loading**: Check if paths start with `/images/`
2. **CSS not applied**: Verify all CSS files loaded in index.html
3. **Animations not working**: Check browser console for jQuery/plugin errors
4. **Links not working**: Ensure React Router Link components used for internal links
5. **Slider not auto-rotating**: Verify Swiper initialization in useEffect

## 📱 Test in Multiple Browsers
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)

## 📐 Compare with Original
Open both versions side-by-side:
- Original HTML: `pharmacy_html_version/index.html`
- React Version: http://localhost:5173

Check that they are **pixel-perfect** identical!

## ✅ Ready for Review
Once all items are checked, the home page is ready to show to stakeholders!

## 🚀 Next Steps After Approval
1. Convert About pages
2. Convert Academic pages
3. Convert remaining pages one by one
