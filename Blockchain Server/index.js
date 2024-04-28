const express = require('express');
const cors = require("cors")
const router = require("./routes/router")


const app = express();
const port = 7000;


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


//Routes

app.use("/", router)


app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port} `);
});