# Leashes & Lullabies by Mayleen

A warm, trustworthy, family-friendly website for Mayleen's local dog care and babysitting services.

## 🎯 Project Overview

**Business:** Leashes & Lullabies  
**Owner:** Mayleen  
**Services:** Dog Walking, Pet Check-Ins, Babysitting  
**Tagline:** Care you can trust, love they deserve.

## 🚀 Quick Start

1. Open `index.html` in a web browser
2. That's it! This is a static site with no build process required.

## 📁 File Structure

```
leashes-and-lullabies/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling
├── script.js           # Interactive features
└── README.md           # This file
```

## 🎨 Design Features

### Color Palette (Flyer-Inspired)
- **Warm Cream:** `#F6F0E4` - Primary backgrounds
- **Soft Paper:** `#FFF9EF` - Secondary backgrounds
- **Deep Olive:** `#3F4932` - Headings, dark text
- **Terracotta:** `#C8754E` - Primary brand color
- **Warm Peach:** `#D99067` - Accents
- **Muted Sage:** `#8E9B78` - Secondary accents

### Typography
- **Headings:** Nunito Sans (friendly rounded sans-serif)
- **Body:** Inter (clean, readable)
- **Accent:** Sacramento (script, used sparingly for "by Mayleen")

### Layout
- Fully responsive, mobile-first design
- One-page scrolling site with smooth navigation
- Rounded cards with soft shadows
- Generous white space
- Touch-friendly buttons

## 🔒 Privacy & Safety Features

**Important:** Mayleen is a minor, so the site includes extra privacy protections:

- ✅ No home address published
- ✅ No school information
- ✅ No last name (unless approved)
- ✅ No exact location or map
- ✅ No public calendar showing schedules
- ✅ Parent-supervised contact number: **720-917-4231**
- ✅ Clear parent-supervision language throughout
- ✅ Request-based scheduling (no instant booking)
- ✅ Minimal data collection on contact form
- ✅ Honeypot spam protection on form

## 📱 Sections

1. **Hero** - Main introduction with CTAs
2. **Services Overview** - Three service cards (Dog Walking, Pet Care, Babysitting)
3. **Dog Walking Detail** - Full service breakdown
4. **Pet Check-In Detail** - Detailed pet sitting info
5. **Babysitting Detail** - Complete babysitting information
6. **Trust Section** - Qualifications and certifications
7. **About Mayleen** - Personal introduction
8. **Pricing** - Simple rate table
9. **FAQ** - 9 common questions answered
10. **Contact** - Phone number and inquiry form
11. **Footer** - Contact info and safety notice

## 🛠️ Interactive Features

### Navigation
- Sticky navigation with smooth scroll
- Mobile hamburger menu
- Scroll-aware shadow effect

### Contact Form
- Conditional fields (show/hide based on service type)
- Phone number formatting
- Date picker with minimum date validation
- Honeypot spam protection
- Success message after submission

### Animations
- Floating paw prints and hearts in hero
- Fade-in scroll animations on cards
- Hover effects on buttons and cards

## 📋 Form Integration Options

The contact form is currently set up with a simulated submission. To connect it to a real backend, choose one of these options:

### Option 1: FormSpree (Easiest)
1. Sign up at https://formspree.io
2. Create a new form
3. Replace the form action in `script.js`:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
})
```

### Option 2: Netlify Forms
1. Deploy to Netlify
2. Add `netlify` attribute to form:
```html
<form netlify name="contact" ...>
```

### Option 3: Email Service
- Use EmailJS, SendGrid, or similar
- Follow their documentation for setup

### Option 4: Custom Backend
- Set up a serverless function (Vercel, Netlify Functions)
- Configure email forwarding to parent-approved address

## 🌐 Deployment Options

### Static Hosting (Recommended)
- **Netlify:** Drag & drop the folder
- **Vercel:** Connect GitHub repo or drag & drop
- **GitHub Pages:** Push to repo, enable Pages
- **Cloudflare Pages:** Fast global CDN

### Traditional Hosting
- Upload files via FTP to any web host
- Works with shared hosting, VPS, etc.

## ✅ SEO Optimized

- Semantic HTML5 structure
- Meta description included
- Proper heading hierarchy (H1 → H6)
- Alt text placeholders (add actual alt text for images)
- Mobile-friendly (passes Google Mobile-Friendly Test)
- Fast loading (no heavy dependencies)
- Schema.org ready (can add LocalBusiness schema)

## 🎯 Accessibility Features

- Strong text/background contrast
- Large readable type
- Descriptive button labels
- Keyboard-friendly navigation
- Visible focus states
- Form labels (not placeholder-only)
- Touch-friendly tap targets (min 44x44px)
- Respects `prefers-reduced-motion`
- ARIA labels where appropriate

## 📊 Analytics Setup (Optional)

For privacy-friendly analytics, consider:
- **Plausible Analytics** - Privacy-first, GDPR compliant
- **Fathom Analytics** - Simple, privacy-focused
- **Simple Analytics** - Lightweight, privacy-friendly

Avoid invasive tracking since the site is for a minor's business.

## 🔧 Customization Guide

### Update Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #C8754E;
    --deep-olive: #3F4932;
    /* etc... */
}
```

### Update Content
All content is in `index.html` - search for section headings and update text directly.

### Add Images
1. Create an `images/` folder
2. Add images (recommended: WebP format for performance)
3. Update image `src` attributes in HTML
4. Always include descriptive `alt` text

### Change Fonts
Update Google Fonts link in `<head>` and CSS variables:
```css
--font-heading: 'YourFont', sans-serif;
```

## 📝 Future Enhancements (Phase 2)

- [ ] Add approved service photos
- [ ] Testimonials section (with written approval)
- [ ] Photo gallery
- [ ] Client portal login
- [ ] Booking calendar integration
- [ ] SMS confirmation integration
- [ ] Blog for pet care tips

## 🐞 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

## 📞 Contact Number

**720-917-4231** (Mayleen's mom - parent-supervised scheduling)

## 🦋 Brand Taglines

- **Primary:** Care you can trust, love they deserve.
- **Footer:** Big Hearts. Happy Tails. Little Smiles.

## 📄 License

This website is proprietary to Leashes & Lullabies by Mayleen.

---

**Built with care by Mariposa for Babs 🦋**  
*September 2026*