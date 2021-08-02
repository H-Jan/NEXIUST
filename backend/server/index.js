const app = require('./www/bin/app.js');
const port = 9999;

require('dotenv').config();

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
