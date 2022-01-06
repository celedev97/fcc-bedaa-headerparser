const express = require('express');
const app = express();

//#region server setup
//enable CORS so that my API is testable by FCC
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

// static files (used only for CSS)
app.use(express.static('public'));
//#endregion

//#region routes
// route for the homepage
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) =>{
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  })
})
//#endregion

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
