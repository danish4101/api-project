import fetch from 'node-fetch'
import { promises as fsPromises } from 'fs'

fetch('https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY')
  .then(response => response.json())
  .then(data => fsPromises.writeFile("./space.json", JSON.stringify(data)))
  .catch(error => console.error(error))
