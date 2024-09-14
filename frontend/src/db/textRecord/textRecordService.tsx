// TextRecord related API methods 

// Function to fetch all templates from the API
export const fetchTextRecords = async () => {
    // Make the asynchronous fetch request to the API
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/textRecords/`)

    // Check if the response is OK
    if (res.ok) {
        // Parse the response JSON
        const json = await res.json()

        // Response is good, so return the parsed JSON
        return json
    } else {
        // Handle non-OK responses
        throw new Error(`Network response was not ok - status: ${res.status}`)
    }
}