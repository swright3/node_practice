const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

app.get('/', (req, res) => {
    const blogs = [
        {title: "Blog 1", snippet: "This is the first blog."},
        {title: "Blog 2", snippet: "Another blog here!"},
        {title: "Third bloggy boy", snippet: "I've never written a blog post before."}
    ]
    res.render('index', { title: 'Home' , blogs });
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.get('/about-me', (req, res) => {
    res.redirect('/about');
})

app.use((req, res) => {
    res.status(404).render('404', { title: 'Page not found' })
})