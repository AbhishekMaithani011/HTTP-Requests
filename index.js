import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("<h1>Home Page<h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Phone no. : 1234567891<h1>");
});

app.get("/about", (req, res) => {
    res.send("<p>Hello my name is Monkey D luffy and i wanna be king of the piter.<p>");
});

app.listen(port, ()=>{
    console.log(`Server runing on port ${port}.`);
});