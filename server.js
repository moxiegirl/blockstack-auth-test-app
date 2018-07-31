const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use('/', express.static(__dirname + '/public'))
app.listen(5000, (err) => {
  console.log('server is listening on port 5000')
})
