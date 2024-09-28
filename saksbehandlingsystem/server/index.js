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
  
    try {
      const texten = await encrypt(text)
      console.log(texten)
    } catch (err) {
      console.error(err)
    }
  })

const encrypt = async (text) => {
    console.log("Encrypting..." + text)
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(text, salt);
    return hash
}
