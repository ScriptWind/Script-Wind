# Script Wind Website - Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended for React Apps)
1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Set project name: `scriptwind-web`
   - Set build command: `npm run build`
   - Set output directory: `dist`

### Option 2: Netlify
1. **Drag & Drop Method:**
   - Run `npm run build`
   - Drag the `dist` folder to [netlify.com](https://netlify.com)
   - Set custom domain: `scriptwind.com`

2. **Git Integration:**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Option 3: Firebase Hosting
1. **Install Firebase CLI:**
   ```bash
   npm i -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## 🌐 Domain Setup

### 1. Purchase Domain
- Go to [Namecheap](https://namecheap.com) or [GoDaddy](https://godaddy.com)
- Purchase: `scriptwind.com`
- Cost: ~$10-15/year

### 2. DNS Configuration
After deploying, update your domain's DNS settings:

**For Vercel:**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: CNAME
Name: @
Value: your-site.netlify.app
```

**For Firebase:**
```
Type: CNAME
Name: @
Value: your-project.web.app
```

### 3. SSL Certificate
- Most platforms provide free SSL automatically
- Ensure HTTPS is enabled

## 📊 Post-Deployment SEO Setup

### 1. Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://scriptwind.com`
3. Verify ownership (HTML tag method recommended)
4. Submit your sitemap: `https://scriptwind.com/sitemap.xml`

### 2. Google Analytics
1. Go to [Google Analytics](https://analytics.google.com)
2. Create new property for `scriptwind.com`
3. Get tracking ID (GA4-XXXXXXX)
4. Add to your website (we can implement this later)

### 3. Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

## 🔧 Environment Variables (if needed)

Create a `.env` file in your project root:
```env
VITE_SITE_URL=https://scriptwind.com
VITE_GOOGLE_ANALYTICS_ID=GA4-XXXXXXX
VITE_CONTACT_EMAIL=contact@scriptwind.com
```

## 📱 Social Media Setup

### 1. Create Business Accounts
- **LinkedIn:** Company page for Script Wind
- **Twitter:** @scriptwind business account
- **Facebook:** Script Wind business page
- **Instagram:** scriptwind business account

### 2. Update Social Links
Update the social media URLs in your `index.html`:
```html
<meta property="og:site_name" content="Script Wind" />
<meta name="twitter:site" content="@scriptwind" />
<meta name="twitter:creator" content="@scriptwind" />
```

## 🚀 Performance Optimization

### 1. Image Optimization
- Convert images to WebP format
- Use appropriate sizes for different devices
- Implement lazy loading

### 2. Code Splitting
- Your Vite build already optimizes this
- Consider implementing route-based code splitting

### 3. Caching Strategy
- Set up browser caching headers
- Use CDN for static assets

## 📈 Monitoring & Analytics

### 1. Performance Monitoring
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 2. SEO Monitoring
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Screaming Frog](https://www.screamingfrog.co.uk/) (free version)

### 3. Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com/) (free)
- [Pingdom](https://pingdom.com/)

## 🔍 SEO Checklist After Deployment

- [ ] Submit sitemap to search engines
- [ ] Verify Google Search Console
- [ ] Set up Google Analytics
- [ ] Test social media sharing
- [ ] Check mobile responsiveness
- [ ] Verify page speed
- [ ] Test contact forms
- [ ] Check for broken links
- [ ] Verify SSL certificate
- [ ] Test PWA functionality

## 🎯 Local Business SEO (if applicable)

### 1. Google My Business
1. Go to [Google My Business](https://business.google.com)
2. Create listing for Script Wind
3. Add business information
4. Upload photos and logo
5. Encourage customer reviews

### 2. Local Directories
- Yelp Business
- Yellow Pages
- Industry-specific directories
- Local chamber of commerce

## 📧 Contact Form Setup

### 1. Email Service
- [Formspree](https://formspree.io/) (free tier available)
- [Netlify Forms](https://docs.netlify.com/forms/setup/) (if using Netlify)
- [EmailJS](https://www.emailjs.com/) (client-side)

### 2. Implementation
We can implement any of these services based on your preference.

## 🚨 Common Issues & Solutions

### 1. Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 2. Routing Issues
- Ensure your hosting platform supports SPA routing
- Set up redirects for 404 pages

### 3. Image Loading Issues
- Check file paths in public folder
- Verify image formats are supported

## 📅 Maintenance Schedule

### Weekly
- Check website performance
- Monitor analytics
- Review search console for errors

### Monthly
- Update content if needed
- Check for broken links
- Review SEO performance

### Quarterly
- Full SEO audit
- Performance optimization
- Content strategy review

## 🎉 Success Metrics

### 30 Days
- Website loads in under 3 seconds
- All pages indexed by Google
- Contact forms working properly

### 90 Days
- Organic traffic increasing
- Page speed scores above 90
- Social media engagement growing

### 6 Months
- Top 3 rankings for primary keywords
- 25% increase in organic traffic
- Improved conversion rates

---

## 🚀 Ready to Deploy?

Your Script Wind website is now fully optimized for SEO and ready for deployment! 

**Next Steps:**
1. Choose your hosting platform
2. Deploy using one of the methods above
3. Set up your domain
4. Configure search console and analytics
5. Start your SEO journey!

**Need Help?** 
- Check the SEO-CHECKLIST.md for detailed SEO information
- Most hosting platforms have excellent documentation
- Consider hiring an SEO specialist for ongoing optimization

**Good luck with your launch! 🚀**
