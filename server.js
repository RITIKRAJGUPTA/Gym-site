// server.js
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3300;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submissions (this is just a basic example)
app.post('/submit-form', (req, res) => {
    // Process the form data here
    // For simplicity, just log the data for now
    console.log(req.body);
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
