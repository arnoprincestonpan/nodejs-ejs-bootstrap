const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("pages/index", { 
        title: "Home"
    })
})

app.get("/about", (req, res) => {
    const familyGuy = [
        { name: "Peter Griffin", familyMember: "Father" },
        { name: "Louis Griffin", familyMember: "Wife" },
        { name: "Meg Griffin", familyMember: "Daughter" },
        { name: "Chris Griffin", familyMember: "Brother" },
        { name: "Stewie Griffin", familyMember: "Baby" },
        { name: "Brian Griffin", familyMember: "Pet" }
    ]
    const description = "A comedy adult orientated cartoon that involves the hilarious life of Griffin and friends."
    res.render("pages/about", { 
        title: "About",
        description: description,
        familyGuy: familyGuy
    })
})

app.listen(8080)

