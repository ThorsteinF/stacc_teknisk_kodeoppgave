const express = require("express");
const app = express();    
const fetch = require("node-fetch");

// Makes it possible to send data into the HTML-file
app.set("view engine", "ejs");

// Makes req.body accessable
app.use(express.urlencoded( { extended: true } ));

// Loads HTML
app.get("/", (req, res) => {
    res.render("index", {text : "" })
});

// Response when pressing submit
app.post("/", async (req, res) => {
    // Input field name
    const name = req.body.name;
    if (name == "") {
        res.send("Error - Invalid input");
        return;
    };

    // Calling PEP-API
    const respons = await fetch("https://code-challenge.stacc.dev/api/pep?name=" + name);
    const data = await respons.json();

    // Filtering through JSON-object.
    var people = []
    for (let i = 0; i<= data.hits.length-1; i++) {
        people.push(data["hits"][i]["name"]);
        people.push(data["hits"][i]["score"]);
    }
    console.log(people);
    
    // Sends result(s) to the user
    res.render("index", {text : people });
});

// Listening on port 3000
app.listen(3000)
