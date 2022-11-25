const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send("Hello World");
});
const typetraitementRoutes = require('./src/routes/routes')
app.use('/api', typetraitementRoutes)
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});