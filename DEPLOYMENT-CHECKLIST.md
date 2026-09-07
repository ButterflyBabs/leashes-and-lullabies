# 🚀 Deployment Checklist - Leashes & Lullabies

## Pre-Launch Checklist

### ✅ Safety & Privacy Review
- [ ] Verify NO home address is published
- [ ] Verify NO last name appears (unless approved)
- [ ] Verify NO school information is mentioned
- [ ] Verify NO exact location/map is embedded
- [ ] Confirm parent contact number (720-917-4231) is correct
- [ ] Review all "parent-supervised" language is present
- [ ] Confirm form doesn't ask for sensitive child info

### ✅ Content Review
- [ ] Proofread all text for typos
- [ ] Verify all prices are current ($15, $17, $18)
- [ ] Check age ranges (newborn-12)
- [ ] Confirm certifications listed (CPR, Babysitting)
- [ ] Review "About Mayleen" section with Mayleen
- [ ] Get parent approval on all content

### ✅ Contact Form Setup
- [ ] Choose form backend (FormSpree, Netlify, custom)
- [ ] Set up form to forward to parent-approved email
- [ ] Test form submission
- [ ] Verify confirmation message displays
- [ ] Test honeypot spam protection
- [ ] Test conditional fields (babysitting vs pet care)

### ✅ Visual & Design
- [ ] Add actual images if approved (currently placeholder emojis)
- [ ] Verify colors match brand (flyer-inspired palette)
- [ ] Test responsive design on mobile
- [ ] Test on tablet sizes
- [ ] Verify all buttons work
- [ ] Check navigation smooth scroll

### ✅ Technical Testing
- [ ] Test in Chrome
- [ ] Test in Safari
- [ ] Test in Firefox
- [ ] Test on iPhone/iPad
- [ ] Test on Android
- [ ] Check mobile menu toggle
- [ ] Verify all links work
- [ ] Test phone click-to-call (tel: links)
- [ ] Check page load speed

### ✅ SEO & Metadata
- [ ] Verify page title is correct
- [ ] Check meta description
- [ ] Add favicon (optional)
- [ ] Set up Google Search Console (optional)
- [ ] Submit sitemap (optional)

### ✅ Analytics (Optional)
- [ ] Set up privacy-friendly analytics (Plausible/Fathom)
- [ ] Configure analytics to respect privacy
- [ ] Add analytics script to HTML

### ✅ Legal & Compliance
- [ ] Get parent/guardian approval for site launch
- [ ] Review all content with parent
- [ ] Ensure compliance with local business licensing (if required)
- [ ] Verify no COPPA violations (child privacy law)

## Deployment Steps

### Option A: Netlify (Recommended)
1. Create free account at netlify.com
2. Drag & drop the `leashes-and-lullabies` folder
3. Get custom domain or use free netlify.app subdomain
4. Enable Netlify Forms (add `netlify` to form tag)
5. Set up form notifications to parent email

### Option B: Vercel
1. Create free account at vercel.com
2. Import GitHub repo or drag & drop
3. Configure custom domain
4. Set up form backend separately

### Option C: GitHub Pages
1. Create GitHub account
2. Create new repository
3. Upload files
4. Enable GitHub Pages in settings
5. Set up form backend (FormSpree recommended)

### Option D: Traditional Hosting
1. Choose web host (GoDaddy, Bluehost, etc.)
2. Upload files via FTP
3. Point domain to hosting
4. Set up email forwarding for form

## Post-Launch Checklist

### ✅ Final Testing
- [ ] Test live site on multiple devices
- [ ] Send test form submission
- [ ] Verify parent receives form emails
- [ ] Check all links work on live site
- [ ] Verify phone number click-to-call works
- [ ] Test site on different networks (WiFi, mobile data)

### ✅ Marketing Setup
- [ ] Add URL to business cards/flyers
- [ ] Update social media bios with link
- [ ] Share with local parent groups (if approved)
- [ ] Add to local directories (if approved)

### ✅ Ongoing Maintenance
- [ ] Set calendar reminder to update content quarterly
- [ ] Review pricing annually
- [ ] Update availability/hours as needed
- [ ] Monitor form submissions
- [ ] Backup site files regularly

## Custom Domain Setup (Optional)

### Buy a Domain
Suggested domains (check availability):
- leashesandlullabies.com
- leashesandlullabiesbymayleen.com
- mayleenspetcare.com

### Domain Registrars
- Namecheap (recommended, affordable)
- Google Domains
- Cloudflare (includes free privacy)

### Connect Domain
1. Purchase domain
2. Get DNS settings from hosting provider
3. Update nameservers or add A/CNAME records
4. Wait 24-48 hours for propagation
5. Test site at new domain

## SSL Certificate (HTTPS)

Most modern hosts include free SSL:
- Netlify: Automatic free SSL
- Vercel: Automatic free SSL
- GitHub Pages: Automatic free SSL
- Traditional hosts: Usually included or use Let's Encrypt

**Important:** Always use HTTPS for form submissions!

## Email Setup for Form

### Parent-Approved Email Options
- Create dedicated email: mayleen@leashesandlullabies.com
- Use existing parent email
- Forward to parent's phone via SMS
- Use Google Forms forwarding

### Form Forwarding Services
- **FormSpree** - Free tier includes 50 submissions/month
- **Netlify Forms** - Free tier includes 100 submissions/month
- **EmailJS** - Free tier includes 200 emails/month

## Troubleshooting

### Form Not Working
- Check form action URL
- Verify email configuration
- Test with different email addresses
- Check spam folder

### Site Not Loading
- Clear browser cache
- Check DNS propagation (use whatsmydns.net)
- Verify hosting is active
- Check for JavaScript errors in console

### Mobile Menu Not Working
- Check JavaScript is loading
- Verify no console errors
- Test on actual device (not just browser responsive mode)

## Security Best Practices

- [ ] Use HTTPS (SSL certificate)
- [ ] Keep form submissions private
- [ ] Don't log sensitive data
- [ ] Use honeypot spam protection (included)
- [ ] Monitor form submissions for abuse
- [ ] Set up CAPTCHA if spam becomes an issue

## Backup Plan

1. **Local Backup:** Keep original files on computer
2. **GitHub Backup:** Push to private repository
3. **Cloud Backup:** Store in Google Drive/Dropbox
4. **Hosting Backup:** Use host's backup feature

## Support Contacts

**Website Questions:** Contact Mariposa via Babs  
**Hosting Questions:** Contact hosting provider support  
**Domain Questions:** Contact domain registrar support  

---

## Final Pre-Launch Question

**Has Mayleen's parent reviewed and approved:**
- [ ] All content on the website
- [ ] Contact phone number (720-917-4231)
- [ ] Privacy and safety measures
- [ ] Services and pricing
- [ ] About Mayleen section
- [ ] FAQ responses

**If all boxes are checked, you're ready to launch! 🚀**

---

*Checklist created by Mariposa for Babs 🦋*  
*Last updated: September 2026*