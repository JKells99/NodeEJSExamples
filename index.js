const express = require('express');
const app = express();
const port = 3000;
//yeet

app.set('view engine', 'ejs');


let users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Beck', age: 25 },
    { id: 3, name: 'Chris', age: 25 }
];

let games = [
    { id: 1, name: 'Game1', price: 25 },
    { id: 2, name: 'Game2', price: 25 },
    { id: 3, name: 'Game3', price: 25 }
]

let animals = [
    { id: 1, name: 'Cat', age: 250 },
    { id: 2, name: 'Dog', age: 2 },
    { id: 3, name: 'Bear', age: 5 }
]

app.get('/users', (req, res) => {
    res.render('index',{users: users})
});
app.get('/games', (req, res) => {
    res.render('games',{games: games})
});

app.get('/animals', (req, res) => {
    res.render('animals',{animals: animals})
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;

