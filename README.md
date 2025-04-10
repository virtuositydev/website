# Virtuosity Solutions Website

A modern website for Virtuosity Solutions showcasing cloud services, AI capabilities, and product solutions using React.js, TypeScript, and Tailwind CSS.

## Quick Start Guide

### Prerequisites

- Node.js (v16.x or later)
- npm (v8.x or later)

### Installation

1. Install dependencies:

npm install

### Development Mode

To run the application in development mode with hot reloading:

npm run dev

This will start the server with hot reloading enabled. The application will be available at http://localhost:5000.

### Production Build

To create a production build:

npm run build

This creates optimized files in the `dist` directory.

### Running in Production

After building, start the production server using PM2:

sudo npm install pm2 -g

pm2 --name VSwebsite start npm -- start

The application will be available at http://www.virtuosity-global.com:5000

## Project Structure

- `/client`: Frontend React application
- `/server`: Backend Express server
- `/shared`: Shared types and schemas used by both frontend and backend
- `/public`: Static assets

## Technologies

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **Build Tools**: Vite


# Running the Application on Port 443 (HTTPS)

This is the most common and secure method. Your Node.js application runs on a regular port (like 5000), and a web server (like Nginx or Apache) handles the SSL termination and proxies requests to your application.

### Step 1: Install Nginx on your server

sudo apt update
sudo apt install nginx

### Step 2: Configure Nginx as a reverse proxy
We've included a sample configuration in `nginx-config-example.conf`. Modify it with your domain and SSL certificate paths, then:

# Copy the configuration
sudo cp nginx-config-example.conf /etc/nginx/sites-available/virtuosity-app

# Create a symbolic link to enable the site
sudo ln -s /etc/nginx/sites-available/virtuosity-app /etc/nginx/sites-enabled/

# Test the configuration 
sudo nginx -t

# Reload Nginx to apply changes
sudo systemctl reload nginx

The application will be available at https://www.virtuosity-global.com/