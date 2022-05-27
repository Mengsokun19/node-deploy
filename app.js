const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Node JS Deployment Test</h1>')
})

app.listen(5000, () => console.log('Server listen on port 5000'))
