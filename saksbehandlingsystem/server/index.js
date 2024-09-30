const express = require('express')
const app = express()
const cors = require('cors')
const bcrypt = require('bcrypt');
app.use(express.json({limit: '50mb'}));
app.use(express.static("build"));   

app.use(cors())

app.listen(3001, () => console.log('Server listening on port 3001'))


app.get('/api/welcome', async (req, res) => {
    console.log("Hello World!")
    res.send('Hello World!')
    const text = "Hello World!!!"
  })

app.post('/api/login', async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const hashedPassword = await encrypt(password)

  storedpassword = "$2b$10$Br9FX88j0VKsVgn.LCDsjeT4wmYzlZIGcJOZdJnfQZXw48XKAWC7q"

  bcrypt.compare(password, storedpassword, function(err, result) {
    if (result) {
      console.log("correct password")
      res.send("correct password")
    } else {
      console.log("incorrect password")
      res.send("incorrect password")
    }
  })


  })









const encrypt = async (text) => {
    console.log("Encrypting..." + text)
    const salt = await bcrypt.genSalt(10);
    console.log("salt", salt)
    const hash = await bcrypt.hash(text, salt);
    return hash
}
