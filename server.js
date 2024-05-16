const express = require('express');
const app = express();
const PORT = 5323;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile('HomePage.html', { root: __dirname + '/layout' });
});

app.get('/ContactUs.html', (req, res) => {
    res.sendFile('ContactUs.html', { root: __dirname + '/layout' });
});

app.get('/Disclaimer.html', (req, res) => {
    res.sendFile('Disclaimer.html', { root: __dirname + '/layout' });
});

app.get('/DogCare.html', (req, res) => {
    res.sendFile('DogCare.html', { root: __dirname + '/layout' });
});

app.get('/CatCare.html', (req, res) => {
    res.sendFile('CatCare.html', { root: __dirname + '/layout' });
});

app.get('/Find.html', (req, res) => {
    res.sendFile('Find.html', { root: __dirname + '/layout' });
});

app.get('/GiveAway.html', (req, res) => {
    res.sendFile('GiveAway.html', { root: __dirname + '/layout' });
});

app.get('/Browse.html', (req, res) => {
    res.sendFile('Browse.html', { root: __dirname + '/layout' });
});

app.post('/search-pets', (req, res) => {
    // Logic to handle pet search
    console.log(req.body); // Log or process the form data
    res.redirect('/results'); // Assume you redirect to a results page
});

app.post('/submit-pet', (req, res) => {
    // Logic to handle pet submission
    console.log(req.body); // Log or process the pet data
    res.send('Pet submitted successfully'); // Confirmation response
});

app.post('/login', (req, res) => {
    // Authentication logic here
    res.redirect('/profile'); // Redirect to user profile on success
});

app.post('/register', (req, res) => {
    // Registration logic here
    res.redirect('/login'); // Redirect to login page after successful registration
});

app.use((req, res, next) => {
    res.status(404).send("Sorry, we couldn't find that page!");
});

app.use((req, res, next) => {
    res.status(404).send("Sorry, we couldn't find that page!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});







app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
