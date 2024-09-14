const express = require("express")
const {
    getTextRecords,
    getTextRecord,
    createTextRecord,
    deleteTextRecord,
    updateTextRecord
} = require("../controllers/textRecordsController")

// Router instance
const router = express.Router()

// Routes
// GET all textRecords
router.get("/", getTextRecords)

// GET text record by ID
router.get("/:ID", getTextRecord)

// POST a new textRecord
router.post("/", createTextRecord)

// DELETE a textRecord
router.delete("/:ID", deleteTextRecord)

// PATCH a textRecord
router.patch("/:ID", updateTextRecord)

// Export
module.exports = router
