import express from 'express'

const app = express()

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

// standarized approach to serve api ('/api/jokes')
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A Joke",
            content: "This is a joke",
        },
        {
            id: 2,
            title: "Another Joke",
            content: "This is another joke",

        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})