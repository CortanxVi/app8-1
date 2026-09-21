const express = require('express')
const app = express()
const port = 8080

app.get('/', (request, reponse) => {
    reponse.send(`
        <!doctype html>
        <html>
        <head>
            <title>Express.js</title>
        </head>
        <body>
            <h3>Welcome to Express.js</h3>
            <b>Express.js Fase, unopinionated, minimalist <br/>
            web framework for Node.js</b>
        </body>
        </html>
        `)
})
app.listen(port, ()=> console.log('Server listening on port' + port))