const express = require('express')
const app = express()
const path = require('path');
const port = 4444

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    //__dirname : It will resolve to your project folder.
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})