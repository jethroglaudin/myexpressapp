const express = require('express')
const app = express()
const port = process.env.Port || 4000;
app.use(express.static("public"));
// same as app.use("/", express.static("public"));

app.get('/', (req, res) => res.send('Bonjour, Jethro!'))

app.get('/api', (req, res) => {
    //reques can send over queries, paramaters, Json, files..
    //usually you are sending out queries and params
    const userName = req.query.username;
    const userId = req.query.id;
    const message = req.query.message;
    console.log(userName);
    console.log(userId);
    console.log(message);
    const reply = `My name is ${userName}. My userId is ${userId}, and I wanted to say ${message}.`

    res.send(reply);
})

app.get('/showprofile/:username', (req, res) => {
    const user = req.params.username;
    res.send('show Profile is working')
    console.log(user)
})


app.listen(port, () => console.log(`App is live currently listening on port ${port}!`))


