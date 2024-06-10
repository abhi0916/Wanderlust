const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const listingSchema = new Schema({
    title :
     {type :String,
     required : true
    },
    description : String,
    image : 
     { type: String,
        image : "https://unsplash.com/photos/the-sun-is-setting-over-a-desert-landscape-WpOMM4uE-F8",
            
    set : (v) => v === "" ? "https://unsplash.com/photos/the-sun-is-setting-over-a-desert-landscape-WpOMM4uE-F8" : v,
     },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;