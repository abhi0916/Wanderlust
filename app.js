const express = require("express");
app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() =>{
    console.log("connected to DB");
}).catch(err  =>{
console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express, express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});


app.get("/listings", async (req, res) => {
    const  allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
    });

    // show route
    app.get("/listings", async (req, res) => {
        res.send ("hello");
        let {id} = req.params;
          const listing = await Listing.findById(id);
        
     });
           
    
 



app.listen(8080, () => {
    console.log("server is listening to port 8080");
});