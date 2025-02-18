const path = require("path");
const express = require("express");
const app = express();

app.disable("x-powered-by");

app.use(express.static(__dirname + "/dist/gift-noe/browser"));

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/gift-noe/browser/index.html"));
});

app.listen(process.env.PORT || 4200);