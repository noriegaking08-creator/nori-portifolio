# Ndizeye Noriega Portfolio

Welcome to my professional portfolio showcasing my work as an AI/ML Engineer & Web Developer. This portfolio highlights my expertise in building innovative solutions for community challenges, particularly focused on impact in Malawi and Africa.

## About Me

I am **Ndizeye Noriega**, a passionate technologist, web developer, and AI/ML engineer fluent in six languages, deeply committed to solving community challenges through technology. My expertise lies in building modular, offline-first systems and integrating global APIs to deliver scalable, practical solutions that remain effective even in low-connectivity environments.

## Projects Featured

### 🦠 Malawi Outbreak Predictor
A web application that forecasts possible disease outbreaks and provides early alerts to health sectors.
- **Predictive analytics for disease outbreaks**
- **Early warning system for health sectors**
- **Real-time data integration**
- **Scalable architecture**
- **95% Accuracy Rate**
- Technologies: AI/ML, Web App, Healthcare

### 📚 AI Tutoring App
Designed to democratize STEM education and make it accessible to underserved communities.
- **Personalized learning paths**
- **Adaptive difficulty levels**
- **Multi-language support**
- **Offline-first approach**
- **50K+ Students Served**
- Technologies: Education, AI, Mobile

### 🏥 Health-Care AI
Integrates artificial intelligence into healthcare workflows to improve accessibility and efficiency.
- **Automated diagnosis assistance**
- **Patient data analysis**
- **Integration with existing systems**
- **Privacy-focused architecture**
- **30% Time Saved** across participating facilities
- Technologies: Healthcare, AI, Web Service

### 🌱 Tilime App (Upcoming)
An AI-powered farming tool to transform agriculture in Malawi with predictive analytics.
- **Crop yield prediction**
- **Weather analysis integration**
- **Market price forecasting**
- **Farming recommendations**
- Expected to reach **10K+ users** at launch in 2025
- Technologies: Agriculture, AI, IoT

## Skills & Expertise

### AI/ML
- Machine Learning
- Deep Learning
- Natural Language Processing
- Predictive Analytics

### Web Development
- React/Next.js
- Python/Django
- Node.js
- API Integration

### Mobile & Systems
- Offline-First Systems
- Mobile Applications
- System Architecture
- Cross-Platform Solutions

### Languages
- English
- Kinyarwanda
- French
- Swahili
- Chichewa
- Kirundi

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Frameworks**: Express.js, various CSS animations and effects
- **Styling**: Custom CSS with animations, gradients, and responsive design
- **Animations**: AOS (Animate On Scroll), ScrollReveal, custom CSS animations
- **Typography**: Google Fonts (Poppins, Montserrat)
- **Icons**: Font Awesome
- **Backend**: Node.js with Express.js server
- **Deployment**: Vercel

## Features

- Responsive design that works on all devices
- Animated transitions and interactive elements
- Modern UI with gradient backgrounds and shadow effects
- Typewriter effect in the hero section
- Smooth scrolling navigation
- Project cards with hover details
- Form validation
- Dark/light mode toggle
- Scroll progress indicator
- Preloader animation
- Particle background effects

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nori_portfolio.git
```

2. Navigate to the project directory:
```bash
cd nori_portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:3000`

## Deployment

### Deploying to Vercel

This portfolio is ready for deployment on Vercel. You can deploy it using one of these methods:

#### How to Deploy on Vercel

##### Option 1: From GitHub (Recommended)
1. Push your project to GitHub first (as we discussed)
2. Go to vercel.com (https://vercel.com) and sign in with your GitHub account
3. Click "Add New..." → "Project"
4. Import your portfolio repository
5. Configure your project settings:
   - Framework Preset: Select "Other" or allow auto-detection
   - Build Command: npm run build (if needed) or leave empty
   - Output Directory: Leave empty or set to .
   - Install Command: npm install
   - Development Command: npm run dev
6. Click "Deploy"

#### Method 1: Using Vercel CLI
1. Install the Vercel CLI:
```bash
npm i -g vercel
```

2. Run the deployment command:
```bash
vercel
```

#### Method 2: Connect your GitHub repository to Vercel
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and create an account
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect the project and configure the build settings
5. Click "Deploy" to deploy your site

The project is configured with:
- A `vercel.json` file that handles client-side routing and static asset serving
- An API route at `/api/contact` to handle form submissions
- Proper asset handling for images and other static files

#### Deployment Configuration Notes
The following changes were made to ensure proper deployment on Vercel:
- Updated all asset paths in index.html to use absolute paths (e.g., `/css/style.css`, `/js/main.js`)
- Modified `vercel.json` to use the "filesystem" handler first, ensuring static assets are served properly
- Simplified `package.json` to avoid Vercel treating the project as a Node.js app instead of static site
- Removed server.js dependency for production deployment

#### Environment Variables (Optional)
If you want to add email functionality to the contact form:
1. Create your email service (like SendGrid, Nodemailer, or EmailJS)
2. Add your environment variables in Vercel project settings
3. Update `/api/contact.js` to use these variables for sending emails

## Usage

The portfolio is organized into the following sections:
- **Home/Hero**: Introduction with animated typewriter effect
- **About**: Personal information and professional background
- **Experience**: Detailed work history and achievements
- **Skills**: Technical competencies and expertise areas
- **Projects**: Showcase of featured projects with details
- **Education**: Academic background and certifications
- **Contact**: Contact form and social media links

## Contributing

If you'd like to contribute to this portfolio project, please fork the repository and submit a pull request with your changes. All contributions are welcome!

## License

This project is licensed under the ISC License.

## Contact

- **Email**: ndizeyenoriega@gmail.com
- **Phone**: +265995208178
- **Location**: Malawi, Africa

Feel free to reach out if you're interested in collaboration opportunities, have questions about my work, or just want to connect!