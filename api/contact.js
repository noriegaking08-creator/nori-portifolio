// api/contact.js - Vercel API route for contact form
export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = request.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return response.status(400).json({ 
      message: 'Missing required fields' 
    });
  }

  try {
    // In a real application, you would send an email here
    // For now, we'll just log the submission and return success
    console.log('Contact form submitted:', { name, email, subject, message });
    
    // You can integrate with email services like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - EmailJS
    // For this portfolio, we'll simulate success
    
    return response.status(200).json({ 
      message: 'Message received! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return response.status(500).json({ 
      message: 'Internal server error' 
    });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};