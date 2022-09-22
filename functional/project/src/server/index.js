require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')
const { Map } = require('immutable');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../public')))

// API calls //


//API call to gett the Image of The Day from Nasa
app.get('/apod', async (req, res) => {
  try {
    let image = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
      .then(res => res.json())
    res.send({ image })
  } catch (err) {
    console.log('error:', err);
  }
})

// API call to the the Rover info and the pics for it from Nasa
app.get('/rover/:name', async (req, res) => {
  let roverName = req.params.name;
  try {
    let image = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/latest_photos?api_key=${process.env.API_KEY}`)
      .then(res => res.json())
    res.send({ image })

  } catch (err) {
    console.log('error:', err);
  }
})


app.listen(port, () => console.log(`Listening on port ${port}!`))