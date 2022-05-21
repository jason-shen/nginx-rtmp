const express = require("express");
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.post("/auth", function (req, res) {
    const streamkey = req.body.key;

    if (streamkey === "password") {
        res.status(200).send();
        return
    }
    res.status(403).send();
});

app.listen(8000, function () {
    console.log("listing on port 8000");
})