// TextRecords model
// Requirements
const mongoose = require("mongoose")

// Define textRecords schema
const Schema = mongoose.Schema
const textRecordsSchema = new Schema({
    // Content
    content: {
        type: String,
        required: true,
        minlength: 1,
    }
}, { 
    timestamps: true 
})

// Export model
module.exports = mongoose.model("TextRecords", textRecordsSchema, "TextRecords")