import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htaccessContent = `# Enable URL rewriting
RewriteEngine On

# Set the base directory
RewriteBase /

# Handle Angular/React Router
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Force Correct MIME Types
<IfModule mod_mime.c>
    AddType text/css .css
    AddType application/javascript .js
    AddType application/json .json
    AddType image/svg+xml .svg
    AddType image/png .png
    AddType image/jpg .jpg
    AddType image/jpeg .jpeg
    AddType image/gif .gif
    AddType image/webp .webp
    AddType text/html .html
    AddType text/plain .txt
</IfModule>

# Security Headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# Enable Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
</IfModule>

# Prevent access to sensitive files
<Files ".htaccess">
    Order allow,deny
    Deny from all
</Files>

<Files "package.json">
    Order allow,deny
    Deny from all
</Files>

<Files "package-lock.json">
    Order allow,deny
    Deny from all
</Files>

# Custom error pages
ErrorDocument 404 /index.html
ErrorDocument 500 /index.html`;

// Copy .htaccess to dist folder
const distPath = path.join(__dirname, "dist");
const htaccessPath = path.join(distPath, ".htaccess");

// Ensure dist folder exists
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Write .htaccess file
fs.writeFileSync(htaccessPath, htaccessContent);

console.log("✅ .htaccess file copied to dist/ folder successfully!");
console.log("📁 Location:", htaccessPath);
