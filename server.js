const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const home =  function(req, res) {
    // res.json({ message: 'welcome to our upload module apis' });
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
};
console.log(__dirname);

//GET route to login page
app.get('/login', (req, res) => {
  res.json({ message: 'welcome to our upload module apis' });
  });

//  app.post('/', (req, res) => {
//   console.log(req.body);
//   res.send(`I recevied your POST request. This is what you sent me: ${req.body.post}`)
// })

// test route
// app.get('/', home);

//for the server to listen to incoming requests
app.listen(port, () => console.log(`Listening on port ${port}`));


