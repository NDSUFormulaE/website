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