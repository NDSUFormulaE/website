// React
import { useState, useEffect } from "react"

// API service and interface
import { fetchTextRecords } from "@/db/textRecord/textRecordService"
import { TextRecord } from "@/db/textRecord/textRecordTypes"

// Hook for fetching all text records
export const useFetchTextRecords = () => {
    // States for text records, loading/error status
    const [textRecords, setTextRecords] = useState<TextRecord[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    // Asynchronously attempt to fetch text records
    useEffect(() => {
        const getTextRecords = async () => {
            try {
                const fetchedTextRecords = await fetchTextRecords()
                setTextRecords(fetchedTextRecords)
                setLoading(false)
            } catch (err) {
                console.error("Failed to fetch text records:", err)
                if (err instanceof Error) {
                    setError(err.message)
                } else {
                    setError("An unknown error occurred")
                }
                setLoading(false)
            }
        }

        getTextRecords()
    }, [])

    return { textRecords, loading, error }
}
