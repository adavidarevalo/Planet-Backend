const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.use( express.json({ extended: true }));

const port = process.env.PORT || 4000;;

app.use("/api", require("./routes/information.js"))
app.use("/api/menu", require("./routes/menu"))

app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});