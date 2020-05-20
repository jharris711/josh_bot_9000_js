const express     = require('express')
const app         = express()
const indexRoutes = require("./routes/index");
const auto_reply  = require('./dms/auto_reply_dm');
//const port        = process.env.PORT || 80;
const port      = 3000;
require('dotenv').config();

app.set("view engine", "ejs");
//app.use(express.static(__dirname + "/public"));


//Auto-reply to DMs:
auto_reply.auto_reply_to_dms()


//Index route for status
app.use("/", indexRoutes);


app.listen(port, () => {
    console.log(`Josh_Bot_9000 listening on port: ${port}`);
});