# 🚀 Script Wind - OVH VPS Deployment Guide

## 📋 **Prerequisites**

- ✅ OVH VPS with cPanel access
- ✅ Domain: `scriptwind.com` (already configured)
- ✅ GitHub repository with your React project
- ✅ SSH access to your VPS

## 🔧 **Step 1: GitHub Repository Setup**

### 1.1 Create Production Branch
```bash
git checkout -b production
git push -u origin production
```

### 1.2 Set Up GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add these secrets:

- **`HOST`**: Your OVH VPS IP address
- **`USERNAME`**: Your cPanel username
- **`PASSWORD`**: Your cPanel password
- **`PORT`**: SSH port (usually 22)

## 🌐 **Step 2: OVH VPS Preparation**

### 2.1 Backup Current WordPress Site
```bash
# SSH into your VPS
ssh username@your-server-ip

# Navigate to public_html
cd public_html

# Create backup
tar -czf wordpress-backup-$(date +%Y%m%d).tar.gz *

# Move backup to safe location
mv wordpress-backup-*.tar.gz ../backups/
```

### 2.2 Clear Public HTML Directory
```bash
# Remove all WordPress files (after backup!)
rm -rf public_html/*

# Keep the directory structure
mkdir -p public_html
```

### 2.3 Verify Apache Configuration
```bash
# Check if mod_rewrite is enabled
apache2ctl -M | grep rewrite

# If not enabled, enable it in cPanel or contact support
```

## 🚀 **Step 3: First Deployment**

### 3.1 Push to Production Branch
```bash
# Make a small change to trigger deployment
echo "# Updated for deployment" >> README.md
git add .
git commit -m "Trigger first deployment"
git push origin production
```

### 3.2 Monitor GitHub Actions
- Go to your GitHub repository
- Click on "Actions" tab
- Watch the deployment workflow

### 3.3 Verify Deployment
- Check your website: `https://scriptwind.com`
- Verify all pages load correctly
- Test navigation and routing

## 📁 **Step 4: File Structure After Deployment**

Your `public_html` directory should look like this:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-*.css
│   ├── index-*.js
│   └── [other assets]
├── First-Cover.png
├── favicon.ico
└── [other public files]
```

## 🔄 **Step 5: Workflow Explanation**

### 5.1 What Happens When You Push to Production:

1. **Testing Phase**:
   - Code is checked out
   - Dependencies are installed
   - Application is built
   - Tests are run (if configured)

2. **Deployment Phase**:
   - Built files are uploaded to VPS
   - .htaccess file is created and uploaded
   - GitHub release is created
   - Production branch is merged to main
   - New tag is created
   - Production branch is recreated

### 5.2 Branch Management:
- **Main Branch**: Contains stable, deployed code
- **Production Branch**: Used for deployment triggers
- **Feature Branches**: For development work

## 🛠️ **Step 6: Troubleshooting**

### 6.1 Common Issues:

#### Build Failures
```bash
# Check build locally
npm run build

# Verify Node.js version
node --version  # Should be 18+
```

#### Deployment Failures
- Verify GitHub secrets are correct
- Check VPS SSH access
- Ensure cPanel credentials are valid

#### Routing Issues
- Verify .htaccess file exists
- Check Apache mod_rewrite is enabled
- Test with curl: `curl -I https://scriptwind.com/portfolio`

### 6.2 Manual Deployment (if needed)
```bash
# Run the deployment script
chmod +x scripts/deploy.sh
./scripts/deploy.sh

# Or deploy manually
npm run build
scp -r dist/* username@your-server-ip:/home/username/public_html/
```

## 📊 **Step 7: Post-Deployment Tasks**

### 7.1 Update DNS (if needed)
- Ensure A record points to your VPS IP
- Verify CNAME records for www subdomain

### 7.2 SSL Certificate
- cPanel usually handles this automatically
- Verify HTTPS is working: `https://scriptwind.com`

### 7.3 Performance Testing
```bash
# Test page speed
curl -w "@curl-format.txt" -o /dev/null -s "https://scriptwind.com"

# Check Core Web Vitals
# Use Google PageSpeed Insights
```

## 🔍 **Step 8: Monitoring & Maintenance**

### 8.1 Regular Checks:
- Monitor GitHub Actions for failures
- Check website performance
- Review error logs in cPanel

### 8.2 Update Process:
```bash
# For future updates:
git checkout production
# Make your changes
git add .
git commit -m "Update description"
git push origin production
# GitHub Actions will handle the rest!
```

## 🎯 **Step 9: SEO & Analytics Setup**

### 9.1 Google Search Console
1. Add your property: `https://scriptwind.com`
2. Submit sitemap: `https://scriptwind.com/sitemap.xml`
3. Verify ownership

### 9.2 Google Analytics
1. Create GA4 property
2. Add tracking code to your website
3. Set up goals and conversions

## 🚨 **Important Notes**

### Security:
- Never commit sensitive information to GitHub
- Use environment variables for secrets
- Regularly update dependencies

### Performance:
- Your .htaccess includes compression and caching
- Images are optimized for web
- Build process minifies all assets

### Backup:
- Always backup before major changes
- Keep multiple backup versions
- Test restore process

## 🎉 **Success Checklist**

- [ ] GitHub Actions workflow created
- [ ] GitHub secrets configured
- [ ] Production branch created
- [ ] First deployment successful
- [ ] Website accessible at scriptwind.com
- [ ] All routes working correctly
- [ ] SSL certificate active
- [ ] Google Search Console configured
- [ ] Google Analytics tracking
- [ ] Performance optimized

## 🆘 **Need Help?**

### OVH Support:
- **Technical Support**: Available 24/7
- **Documentation**: [docs.ovh.com](https://docs.ovh.com)

### GitHub Actions:
- **Documentation**: [docs.github.com/actions](https://docs.github.com/actions)
- **Community**: GitHub Discussions

### Local Development:
- Test everything locally before pushing
- Use `npm run dev` for development
- Use `npm run build` to test production build

---

## 🚀 **Ready to Deploy?**

Your Script Wind website is now fully configured for automated deployment to OVH VPS!

**Next Steps:**
1. Push to production branch
2. Watch GitHub Actions deploy
3. Verify your website is live
4. Set up monitoring and analytics

**Good luck with your deployment! 🎉**
