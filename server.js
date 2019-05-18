const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.Port || 4000;
app.use(express.static("public"));
// same as app.use("/", express.static("public"));
app.use(bodyParser.json());

// app.get('/', (req, res) => res.send('Bonjour, Jethro!'))
const data = [];

app.post('/api', (req, res) => {
    //request can send over queries, paramaters, Json, files..
    //usually you are sending out queries and params
    const userName = req.body.username;
    const userId = req.body.id;
    const message = req.body.message;
    const temp = {
        username: userName,
        id: userId,
        message: message
    }
    data.push(temp)
    console.log(data)
    console.log(userName);
    console.log(userId);
    console.log(message);
    const reply = `My name is ${userName}. My userId is ${userId}, and I wanted to say ${message}.`

    res.send(reply);
})

app.get('/getallusers', (req, res) =>{
    res.send(data);
})

app.get('/showprofile/:username', (req, res) => {
    const user = req.params.username;
    res.send('show Profile is working')
    console.log(user)
})


app.listen(port, () => console.log(`App is live currently listening on port ${port}!`))


