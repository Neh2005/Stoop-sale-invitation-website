# 🎉 Brooklyn Stoop Sale Invitation Website 🎉

Welcome to the official website for the Brooklyn Stoop Sale! This project creates an engaging, vibrant invitation experience to attract friends, family, and community members to a local stoop sale in Brooklyn. The website combines a sleek video background, interactive typing animations, and essential event details for a modern and visually immersive experience.

## 🌟 Features

- **Dynamic Typing Effect**: A warm, welcoming message greets visitors with a smooth typing effect that appears on load, enhancing engagement.
- **Full-Screen Video Background**: A captivating video background sets the scene, creating an inviting and professional look.
- **Intuitive Navigation Bar**: Simplified navigation links direct users to key sections with ease.
- **Event Details Section**: A dedicated section outlines the location, time, and purpose of the sale to provide visitors with clear and essential information.
- **Google Maps Integration**: An embedded, interactive map helps attendees locate the sale with precision and convenience.
- **Responsive Design**: Fully responsive layout that looks great on both desktop and mobile devices, ensuring accessibility for all users.

## 🛠️ Tech Stack

- **React**: Used for component-based architecture, making development and customization efficient.
- **CSS3**: Custom styling and animations for a polished look and feel.
- **Google Maps API**: Embedded map to provide an interactive location for the event.
- **HTML5 Video**: A full-screen background video that creates an immersive experience.

## 🚀 Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- **Node.js** (v12 or higher) and **npm** (comes with Node.js) are required.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/stoop-sale-invitation.git
   

2. **Navigate to the project directory:**
   ```bash
   cd stoop-sale-invitation

3. **Install the dependencies:**
   ```bash
   npm install

4. **Run the application:**
   ``bash
   npm start

5. Open your browser and navigate to http://localhost:3000 to view the website.

## ✨ Customization

Here’s how to personalize the website to suit your stoop sale event:

### Changing the Welcome Message

To modify the main message displayed on the homepage, open `Message.js` in the `src/components/` folder and update the `sentence` variable:


const sentence = "Your personalized message here!";


### Editing Event Details
  
   <p>Location: Your new location</p>
   <p>Time: Updated time</p>

### Changing the Background Video
   ```javascript
   <source src="https://your-video-link.mp4" type="video/mp4" />
   ```


## 🌐 Deployment

Deploy the project to a hosting platform of your choice for public access. Here are a few recommended services:

## Deploying to Vercel

1. **Install the Vercel CLI (if not already installed):**
   ```bash
   npm install -g vercel

2. **Run the deployment command:**
   ```bash
   vercel

3. Follow the prompts to set up and deploy the project. Vercel will generate a live URL for you to share.

### Other Options

- **Netlify**: Drop the project folder in Netlify for quick deployment.
- **GitHub Pages**: Use GitHub Actions to automate deployment to GitHub Pages.
