console.log("✅ author.model.js");

const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        minlength: [3, "name must be at least 2 characters"]
    }
}, { timestamps: true });


module.exports = mongoose.model("Author", AuthorSchema);