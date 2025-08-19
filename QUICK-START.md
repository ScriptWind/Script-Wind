# 🚀 Script Wind - Quick Start Guide

## ⚡ **Essential Commands**

### **Development**
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Lint code
npm run lint
npm run lint:fix
```

### **Deployment**
```bash
# Test deployment locally
npm run deploy:test

# Manual deployment (if needed)
npm run deploy:manual

# Clean build artifacts
npm run clean
```

## 🔄 **GitHub Actions Workflow**

### **Automatic Deployment**
1. **Push to production branch** → Triggers deployment
2. **GitHub Actions** → Tests, builds, and deploys
3. **Auto-merge** → Production → Main
4. **Release created** → With tag and notes

### **Manual Trigger**
- Go to Actions tab in GitHub
- Click "Deploy to OVH VPS"
- Click "Run workflow"

## 🌐 **Deployment Process**

### **What Happens:**
1. ✅ **Test Phase**: Build and test application
2. 🚀 **Deploy Phase**: Upload to OVH VPS
3. 📝 **Release**: Create GitHub release
4. 🔄 **Merge**: Production → Main branch
5. 🏷️ **Tag**: Create version tag
6. 🧹 **Cleanup**: Recreate production branch

## 📋 **Pre-Deployment Checklist**

- [ ] GitHub secrets configured (HOST, USERNAME, PASSWORD, PORT)
- [ ] Production branch exists
- [ ] OVH VPS backup completed
- [ ] WordPress files removed from public_html
- [ ] Apache mod_rewrite enabled

## 🚨 **Troubleshooting**

### **Build Issues**
```bash
# Clear cache and reinstall
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Deployment Issues**
- Check GitHub secrets
- Verify VPS SSH access
- Check cPanel credentials
- Review GitHub Actions logs

## 📱 **Post-Deployment**

### **Verify Deployment**
- Check: `https://scriptwind.com`
- Test all routes: `/`, `/portfolio`
- Verify images load correctly
- Check mobile responsiveness

### **SEO Setup**
- Google Search Console
- Google Analytics
- Submit sitemap: `/sitemap.xml`

## 🎯 **Quick Commands Reference**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy:test` | Test deployment locally |
| `npm run type-check` | Check TypeScript types |
| `npm run lint` | Check code quality |
| `npm run clean` | Clean build artifacts |

## 🚀 **Ready to Deploy?**

```bash
# 1. Create production branch
git checkout -b production

# 2. Push to trigger deployment
git push -u origin production

# 3. Watch GitHub Actions
# Go to: Actions tab in your repository

# 4. Verify deployment
# Check: https://scriptwind.com
```

---

**Need help?** Check the full `OVH-DEPLOYMENT-GUIDE.md` for detailed instructions! 🎉
