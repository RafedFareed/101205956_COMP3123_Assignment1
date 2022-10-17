const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const app = express();

const userRoutes = require("./routes/user")
const employeeRoutes = require("./routes/employee")

const PORT = 4000
const DB_URL = "mongodb+srv://root:root@cluster0.qry26ic.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/api/user", userRoutes)
app.use("/api/employee", employeeRoutes)

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get(("/"), (req, res) => {
    res.send("<h1>101205956 comp3123 assigment-1</h1>")
})

app.listen((PORT), () => {
    console.log(`listening on PORT: ${PORT}`)
})