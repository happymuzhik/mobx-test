const express = require('express')
const app = express()

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use('/', express.static('./dist/web/'))
app.use('/assets', express.static('./dist/web/assets'))
