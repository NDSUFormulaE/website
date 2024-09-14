// Client component
"use client"

// React
import { useState, useEffect } from "react"

// Mantine
import { Loader } from "@mantine/core"
import { Text } from "@mantine/core"

// Custom hooks
import { useFetchTextRecords } from "@/hooks/textRecord/useFetchTextRecords"

export default function Home() {
  // useFetchTextRecords hook to get all textRecords and loading/error status
  const { textRecords, loading, error } = useFetchTextRecords()

  return (
    <main>
      {loading ? (
        <Loader>

        </Loader>
      ) : error ? (
        <p>
          Error: {error}
        </p>
      ) : (
        <div>
          {textRecords && textRecords.length > 0 ? (
            textRecords.map(textRecord => (
              <p key={textRecord._id}>
                <Text
                  size="xl"
                  td="underline"
                  tt="uppercase"
                >
                  {textRecord.content}
                </Text>
              </p>
            ))
          ) : (
            <p>
              No text records available.              
            </p>
          )}
        </div>
      )}
    </main>
  )
}
