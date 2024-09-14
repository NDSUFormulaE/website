// Requirements
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const helmet = require("helmet")

// Route paths
const textRecordRoutes = require("./routes/textRecordsRoute")

// Create Express app
const app = express()

// Enable CORS for all routes
app.use(cors())

// Middleware
app.use(express.json())
app.use(helmet())


// Log each request to the console
app.use((req, res, next) => {
    console.log("Path: " + req.path)
    console.log("Method: " + req.method + "\n")
    next()
})

// Routes
app.use("/api/textRecords", textRecordRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: "Something went wrong!" })
})

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        const PORT = process.env.PORT || 4000
        const server = app.listen(PORT, () => {
            console.log("Connected to DB - Listening on port", PORT)
        })

        // Graceful shutdown
        process.on("SIGTERM", () => {
            console.log("SIGTERM signal received.")
            server.close(() => {
                console.log("HTTP server closed.")
                mongoose.connection.close(false, () => {
                    console.log("MongoDB connection closed.")
                })
            })
        })
    })
    .catch((error) => {
        console.log("Error connecting to DB:", error)
    })
