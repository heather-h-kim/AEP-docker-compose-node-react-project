
const express = require('express');
const app = express()
const port = 4000

app.get('/', (req, res) => {
  console.log("Handling GET request to /");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(
    {
        "message": "Hello World from the server!"
    })
})

app.listen(port, () => {
  console.log(`Node app spinning up on ${port}!`)
  if (process.env.MY_SECRET) {
    console.log(`${process.env.MY_SECRET}`)
  }else {
    console.log("No envirnment data found containing your secrets yet :(")
  }
})
