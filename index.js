const express = require("express");
const ejs = require("ejs");
const chalk = require("chalk");
const app = express();
const port = 3000;
const config = require("./config.json")
app.use(express.urlencoded({extended:true}));
app.use(express.static("publish"));
app.set("view engine","ejs");
// ---------- • Mongoose • ---------- //
const mongoose = require("mongoose");

mongoose.connect(config.mongoUrl).then(() => {
    return console.log(chalk.blue.italic("MongoDB bağlanıldı."))
}).catch(err => {
    return console.error(err)
})
// ---------- • Mongoose • ---------- //


// ---------- • Router • ---------- //

app.use(require("./Router/main.js"));

// ---------- • Router • ---------- //


// ---------- • Port • ---------- //
app.listen(3000, (err) => {
    if(err) return console.error(err);
    return console.log(chalk.cyan.underline(`${port} | Site oluşturuldu.`));
});
// ---------- • Port • ---------- //
