const express = require('express')
const app = express()
const database = require('./config/database') 
const routes = require('./Routes/routes')

require('dotenv').config()

const PORT = process.env.PORT || 5000

database.connect();
app.use(express.json());

app.use("/", routes);


app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your Server is up and running......"
    })
})

app.listen(PORT, () => {
    console.log(`server is started at PORT ${PORT}`)
} )

