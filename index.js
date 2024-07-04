const express = require('express')
const app = express()
const port = 8080

const routes = require('./routes/index');
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})