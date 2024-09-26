// TextRecords contoller
// Requirements
const TextRecord = require("../models/textRecordsModel")
const mongoose = require("mongoose")

// Helper function to validate ObjectId
const isValidObjectId = (ID) => mongoose.Types.ObjectId.isValid(ID)

// Get all text records
const getTextRecords = async (req, res) => {
    try {
        const textRecords = await TextRecord.find({})
        res.status(200).json(textRecords)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch text records." })
    }
}

// Get a text record by its ID
const getTextRecord = async (req, res) => {
    const { ID } = req.params

    if (!isValidObjectId(ID)) {
        return res.status(400).json({ error: "Invalid ID format." })
    }

    try {
        const textRecord = await TextRecord.findById(ID)

        if (!textRecord) {
            return res.status(404).json({ error: `No text record found for ID: ${ID}` })
        }

        res.status(200).json(textRecord)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch text record." })
    }
}

// Create a new text record
const createTextRecord = async (req, res) => {
    const {content } = req.body

    // Validation (can be more sophisticated depending on the use case)
    if (!content) {
        return res.status(400).json({ error: "Content is required." })
    }

    try {
        const newTextRecord = new TextRecord({ content })
        const savedTextRecord = await newTextRecord.save()
        res.status(201).json(savedTextRecord)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Delete a text record
const deleteTextRecord = async (req, res) => {
    const { ID } = req.params

    if (!isValidObjectId(ID)) {
        return res.status(400).json({ error: "Invalid ID format." })
    }

    try {
        const deletedTextRecord = await TextRecord.findByIdAndDelete(ID)

        if (!deletedTextRecord) {
            return res.status(404).json({ error: `No text record found for ID: ${ID}` })
        }

        res.status(200).json(deletedTextRecord)
    } catch (error) {
        res.status(500).json({ error: "Failed to delete text record." })
    }
}

// Update a text record
const updateTextRecord = async (req, res) => {
    const { ID } = req.params

    if (!isValidObjectId(ID)) {
        return res.status(400).json({ error: "Invalid ID format." })
    }

    try {
        const updatedTextRecord = await TextRecord.findByIdAndUpdate(ID, req.body, { new: true })

        if (!updatedTextRecord) {
            return res.status(404).json({ error: `No text record found for ID: ${ID}` })
        }

        res.status(200).json(updatedTextRecord)
    } catch (error) {
        res.status(500).json({ error: "Failed to update text record." })
    }
}

// Export functions
module.exports = {
    getTextRecords,
    getTextRecord,
    createTextRecord,
    deleteTextRecord,
    updateTextRecord
}

let testMessage = "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little clever comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.";
console.log(testMessage)