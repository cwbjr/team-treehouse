const express = require("express");

const app = express();

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",

];

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cards", (req, res) => {
    res.render("card", { prompt: "Who is buried in Grant's Tomb?", hint: "Think about whose tomb it is." });
});
// app.get("/cards", (req, res) => {
//     res.render("card", { prompt: "Who is buried in Grant's Tomb?", colors });
// });

// app.get("/cards", (req, res) => {
//     res.locals.prompt = "Who is buried in Grant's tomb?";
//     res.render("card");
// });

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Page</h1><nav><ul><li>Home</li><li>Topics</li><li>About</li></ul></nav><p>You are now reading a paragraph.  Risus eget. Ornare eu sollicitudin, congue nunc in dui, a sit per aenean, mattis aliquam, sociis diam. Pharetra mauris semper id sociis porta, qui in nec lorem luctus. Velit maecenas nam nulla egestas, vel ac pretium amet urna, eros mauris, id laoreet vestibulum natoque et in, platea tortor pellentesque donec felis at. Sodales morbi tincidunt ullamcorper ipsum. Ac tincidunt ullamcorper sed, dapibus metus adipiscing, sed lacinia felis iaculis metus pede quis, orci auctor sem massa ipsum amet tincidunt, lobortis et nobis fermentum. </p>");
});

// app.get("/hello", (req, res) => {
//     res.send("<h1>I am an h1 Heading</h1>");
// });

app.listen(3000, () => {
    console.log("app.js on localhost:3000");
});
