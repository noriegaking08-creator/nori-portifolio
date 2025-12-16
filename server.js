const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Handle all non-API routes and serve index.html
app.get(/^\/(?!api\/).*$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export app for Vercel
module.exports = app;