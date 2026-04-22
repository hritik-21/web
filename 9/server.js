const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// GET route for static file (handled by express.static, but we can add an explicit one if needed)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET route for the dynamic form
app.get('/form', (req, res) => {
    res.render('form', { message: null, data: null });
});

// POST route for form submission
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    res.render('form', { 
        message: 'Form Submitted Successfully!', 
        data: { name, email, message } 
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
