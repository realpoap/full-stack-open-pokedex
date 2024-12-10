const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('version 3: pending') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  throw Error('not in good health')
  //eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
