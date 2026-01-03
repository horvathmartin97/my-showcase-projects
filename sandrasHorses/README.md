# 🐴 Equestrian Academy - Horse Riding Instructor Website

A modern, single-page web application built for horse riding instructors to showcase their services, display photo galleries, and manage appointment bookings through an integrated contact form.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [EmailJS Setup](#emailjs-setup)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

## ✨ Features

- **Responsive Design**: Mobile-first approach with hamburger menu for mobile devices
- **Hero Section**: Eye-catching header with gradient backgrounds and modern styling
- **About Section**: Image gallery with lightbox functionality for viewing full-size photos
- **Services Section**: Card-based layout showcasing different riding programs and pricing
- **Contact Form**: Integrated with EmailJS for serverless email notifications
- **Modern UI/UX**: Built with Tailwind CSS featuring smooth animations and hover effects
- **No Backend Required**: Completely static site that can be hosted anywhere

## 🛠 Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Email Service**: EmailJS
- **Build Tool**: Vite (or your build tool)
- **Package Manager**: npm

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:

```bash
git clone https://github.com/yourusername/equestrian-academy.git
cd equestrian-academy
Install dependencies:

bash
npm install
Install EmailJS:

bash
npm install @emailjs/browser
Start the development server:

bash
npm run dev
Open your browser and navigate to http://localhost:5173

⚙️ Configuration
EmailJS Setup
Create an account at EmailJS

Add an email service:

Navigate to Email Services in the dashboard

Click Add New Service

Choose your email provider (Gmail, Outlook, etc.)

Click Connect Account and authorize

Create an email template:

Go to Email Templates

Click Create New Template

Use these variables in your template:

{{user_name}} - Sender's name

{{user_email}} - Sender's email

{{user_phone}} - Sender's phone number

{{service_type}} - Selected service

{{message}} - Message content

Get your credentials:

Service ID: Found in Email Services section

Template ID: Found in Email Templates section

Public Key: Found in Account → API Keys

Update the Contact component:

tsx
await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  form.current,
  'YOUR_PUBLIC_KEY'
);
Environment Variables (Optional)
Create a .env file in the root directory:

text
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
Then update your code:

tsx
await emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
📁 Project Structure
text
equestrian-academy/
├── src/
│   ├── assets/
│   │   ├── horse.png          # Logo image
│   │   ├── img1.jpg           # Gallery images
│   │   ├── img2.jpg
│   │   ├── img3.jpg
│   │   └── img4.jpg
│   ├── components/
│   │   ├── Header.tsx         # Navigation header with mobile menu
│   │   ├── AboutMe.tsx        # About section with gallery
│   │   ├── Services.tsx       # Services showcase
│   │   └── Contact.tsx        # Contact form with EmailJS
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles and Tailwind imports
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
🚀 Usage
Running Locally
bash
npm run dev
Building for Production
bash
npm run build
The production-ready files will be in the dist/ folder.

Preview Production Build
bash
npm run preview
📧 EmailJS Setup
Step-by-Step Guide
Sign up at emailjs.com

Add Email Service:

Dashboard → Email Services → Add New Service

Select your email provider

Authorize and connect your account

Create Template:

Dashboard → Email Templates → Create New Template

Add variables: {{user_name}}, {{user_email}}, etc.

Set recipient email address

Save and copy Template ID

Get Public Key:

Dashboard → Account → API Keys

Copy your Public Key

Update Contact.tsx with your IDs

Form Field Mapping
Ensure form field name attributes match template variables:

Form Field	Template Variable
user_name	{{user_name}}
user_email	{{user_email}}
user_phone	{{user_phone}}
service_type	{{service_type}}
message	{{message}}
🎨 Customization
Colors
The app uses an amber/orange color scheme. To change:

Update Tailwind classes in components (e.g., amber-600 → blue-600)

Or modify tailwind.config.js for global color changes

Content
Logo: Replace src/assets/horse.png with your logo

Images: Replace images in src/assets/

Text: Edit content directly in component files

Services: Modify the services array in Services.tsx

Contact Info: Update phone, email, address in Contact.tsx

Animations
Add custom animations in tailwind.config.js:

javascript
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out'
      }
    }
  }
}
🌐 Deployment
Netlify
Push your code to GitHub

Connect repository to Netlify

Build command: npm run build

Publish directory: dist

Deploy!

Vercel
bash
npm install -g vercel
vercel
GitHub Pages
bash
npm run build
# Deploy the dist/ folder to gh-pages branch
📝 License
This project is licensed under the MIT License - feel free to use it for your own projects.

🤝 Contributing
Contributions, issues, and feature requests are welcome!

👤 Author
Martin Horváth - @yourhandle

🙏 Acknowledgments
Icons from emoji set

EmailJS for serverless email functionality

Tailwind CSS for styling framework
```
