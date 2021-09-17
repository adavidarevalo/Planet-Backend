const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.use( express.json({ extended: true }));

const port = 4000;

app.use("/api", require("./routes/information.js"))

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});