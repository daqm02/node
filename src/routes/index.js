const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs', {title: "Web Site"});
});

router.get('/about', (req, res) => {
    res.render('about.ejs', {title: "About"});
});

router.get('/Contact', (req, res) => {
    res.render('contact.ejs', { title: "Contact"});
});

module.exports = router;
