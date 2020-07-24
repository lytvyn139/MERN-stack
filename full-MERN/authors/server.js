console.log("👾 S E R V E R 👾");

const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 8000;
const db_name = "authors_db";


app.use(cors())
app.use(express.json())

require('./server/config/mongoose.config')(db_name)
require('./server/routes/author.routes')(app);

app.listen(PORT, () => {
    console.log(`Server fired up at port: http://localhost:${PORT}`)
})