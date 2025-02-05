#!/bin/bash

echo "Forcing React 18.2.0 installation..."

# Remove existing dependencies
rm -rf node_modules package-lock.json

# Install dependencies, forcing React 18.2.0
npm install react@18.2.0 react-dom@18.2.0 --legacy-peer-deps

# Continue with normal build
npm install
npm run build
