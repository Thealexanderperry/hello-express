const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

app.get('/home', (request, response) => {
    response.send('<h1>Hello, <b>Home</b>!</h1>')
})

app.get('/login', (request, response) => {
    response.send('<h1>Ello, login...</h1>')
})

app.get('/about', (request, response) => {
    response.send('Hello, about...')
})
app.get('/settings', (request, response) => {
    response.send('Hello, settings...')
})

app.get('/params/:key', (request, response) => {
    let key = request.params.key
    response.send(`you are on the ${key} page`)
})

let db = [
    { name: "pikachu", hp: 100 }
]

app.get("/param/:pokemon", (req, res) => {
    console.log(req)
    let pokemon = req.params.pokemon
    let foundPokemon = db.filter(i => i.name == pokemon)
    foundPokemon.length > 0
    ? res.status(200).json(foundPokemon)
    : res.status(404).json({message: `${pokemon} not found`})
})