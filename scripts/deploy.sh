#!/bin/bash

# Script Wind Deployment Script
# This script can be used for manual deployment or as a reference

set -e

echo "🚀 Starting Script Wind deployment..."

# Build the application
echo "📦 Building application..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist folder not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Display build info
echo "📊 Build Information:"
echo "   - Build size: $(du -sh dist | cut -f1)"
echo "   - Files count: $(find dist -type f | wc -l)"

# Optional: Upload to server manually
if [ "$1" = "--upload" ]; then
    echo "📤 Uploading to server..."
    
    # You can customize these values
    HOST="your-server-ip"
    USERNAME="your-cpanel-username"
    REMOTE_PATH="/home/$USERNAME/public_html/"
    
    # Upload files
    scp -r dist/* $USERNAME@$HOST:$REMOTE_PATH
    
    echo "✅ Upload completed!"
fi

echo "🎉 Deployment script completed!"
echo "🌐 Your website is ready at: https://scriptwind.com"
