# 🏷️ Script Wind - Semantic Versioning Guide

## 🚀 **How Semantic Versioning Works**

Your GitHub Actions workflow now automatically detects version bumps based on commit message prefixes:

### **Version Bump Types:**

| Commit Prefix | Version Bump | Example | Result |
|---------------|--------------|---------|---------|
| `#major` | Major Version | `v1.2.3` → `v2.0.0` | Breaking changes |
| `#minor` | Minor Version | `v1.2.3` → `v1.3.0` | New features |
| `#patch` | Patch Version | `v1.2.3` → `v1.2.4` | Bug fixes |
| No prefix | Patch Version | `v1.2.3` → `v1.2.4` | Default behavior |

## 📝 **Commit Message Examples**

### **Major Version (Breaking Changes)**
```bash
git commit -m "#major: Complete redesign of user interface

- Breaking: Changed authentication flow
- Breaking: Removed deprecated API endpoints
- Breaking: Updated minimum Node.js version to 18"
```

### **Minor Version (New Features)**
```bash
git commit -m "#minor: Add dark mode and new portfolio section

- Added dark/light theme toggle
- New portfolio filtering system
- Enhanced mobile navigation
- Added contact form validation"
```

### **Patch Version (Bug Fixes)**
```bash
git commit -m "#patch: Fix mobile responsiveness issues

- Fixed navigation menu on small screens
- Corrected image loading on slow connections
- Updated contact form error handling"
```

### **Default (Auto-patch)**
```bash
git commit -m "Update hero section content

- Changed tagline text
- Updated company description
- Fixed typo in services section"
```

## 🔄 **Complete Workflow Example**

### **1. Start Development**
```bash
# Create feature branch
git checkout -b feature/dark-mode
git checkout production

# Make your changes
# ... edit files ...

# Commit with semantic versioning
git add .
git commit -m "#minor: Add dark mode theme support

- Added theme toggle component
- Implemented dark color scheme
- Added theme persistence in localStorage
- Updated all components for theme support"
```

### **2. Deploy to Production**
```bash
# Push to production branch
git push origin production

# GitHub Actions will:
# 1. Test and build your app
# 2. Deploy to OVH VPS
# 3. Create new version tag (e.g., v1.3.0)
# 4. Create GitHub release
# 5. Merge to main branch
```

### **3. Version History**
```
v1.0.0 - Initial release
v1.1.0 - Added portfolio section
v1.2.0 - Enhanced mobile experience
v1.3.0 - Added dark mode theme ← Your new version
```

## 🎯 **When to Use Each Version Type**

### **#major - Breaking Changes**
- ❌ Removed features or APIs
- ❌ Changed data structure
- ❌ Updated minimum requirements
- ❌ Complete redesigns
- ❌ Database schema changes

**Examples:**
```bash
git commit -m "#major: Redesign authentication system

- Breaking: Changed login API endpoints
- Breaking: Updated user data structure
- Breaking: Removed legacy authentication methods"
```

### **#minor - New Features**
- ✅ Added new functionality
- ✅ New pages or sections
- ✅ Enhanced existing features
- ✅ Performance improvements
- ✅ New integrations

**Examples:**
```bash
git commit -m "#minor: Add blog section and newsletter

- Added blog post management
- Implemented newsletter subscription
- Added social sharing buttons
- Enhanced SEO meta tags"
```

### **#patch - Bug Fixes & Updates**
- 🐛 Fixed bugs
- 🐛 Security updates
- 🐛 Performance fixes
- 🐛 Content updates
- 🐛 Minor UI improvements

**Examples:**
```bash
git commit -m "#patch: Fix mobile navigation and update content

- Fixed mobile menu not closing
- Updated company description
- Corrected contact form validation
- Fixed image loading issues"
```

## 🚨 **Important Rules**

### **1. Always Use Production Branch**
```bash
# ❌ Wrong - Don't commit directly to main
git checkout main
git commit -m "#minor: Add new feature"

# ✅ Correct - Use production branch
git checkout production
git commit -m "#minor: Add new feature"
git push origin production
```

### **2. Clear Commit Messages**
```bash
# ❌ Bad - Unclear what changed
git commit -m "#minor: stuff"

# ✅ Good - Clear description
git commit -m "#minor: Add customer testimonials section

- Added testimonials carousel component
- Integrated with review system
- Added star rating display
- Responsive design for all devices"
```

### **3. One Feature Per Commit**
```bash
# ❌ Bad - Multiple unrelated changes
git commit -m "#minor: Add blog, fix bugs, update content"

# ✅ Good - Focused commits
git commit -m "#minor: Add blog section"
git commit -m "#patch: Fix mobile navigation bug"
git commit -m "Update company description"
```

## 📊 **Version History Management**

### **View Version History**
```bash
# See all tags
git tag -l

# See detailed tag info
git show v1.2.3

# Compare versions
git diff v1.1.0..v1.2.0
```

### **Rollback to Previous Version**
```bash
# If you need to rollback
git checkout v1.1.0
git checkout -b rollback-v1.1.0
git push origin rollback-v1.1.0
```

## 🔧 **Advanced Usage**

### **Pre-release Versions**
```bash
# For beta/alpha releases
git commit -m "#minor: Add new dashboard features (beta)

- Added analytics dashboard
- Implemented real-time updates
- Added export functionality
- Beta: Some features may be unstable"
```

### **Hotfixes**
```bash
# For urgent fixes
git commit -m "#patch: Hotfix: Fix critical security issue

- Fixed XSS vulnerability in contact form
- Updated dependencies with security patches
- Added input sanitization
- Urgent: Deploy immediately"
```

## 📋 **Quick Reference**

| Action | Command | Version Bump |
|--------|---------|--------------|
| Breaking changes | `#major` | `v1.2.3` → `v2.0.0` |
| New features | `#minor` | `v1.2.3` → `v1.3.0` |
| Bug fixes | `#patch` | `v1.2.3` → `v1.2.4` |
| Content updates | No prefix | `v1.2.3` → `v1.2.4` |

## 🎉 **Benefits of Semantic Versioning**

1. **Clear Communication** - Users know what to expect
2. **Automated Releases** - No manual version management
3. **Change Tracking** - Easy to see what changed when
4. **Professional Standards** - Industry best practice
5. **Rollback Safety** - Easy to revert to previous versions

## 🚀 **Ready to Use?**

Your workflow is now set up for semantic versioning! Just remember:

1. **Use `#major`, `#minor`, or `#patch`** in commit messages
2. **Always work on production branch** for deployments
3. **Write clear, descriptive commit messages**
4. **Let GitHub Actions handle the rest!**

**Happy versioning! 🏷️**
