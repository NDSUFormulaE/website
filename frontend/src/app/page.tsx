// Client component
"use client"

// Components
import Header from "@/components/header/header"
import Hero from "@/components/hero/hero"
import Footer from "@/components/footer/footer"

// React
import { useState, useEffect } from "react"

// Mantine
import { Loader } from "@mantine/core"
import { Text } from "@mantine/core"

// Custom hooks
import { useFetchTextRecords } from "@/hooks/textRecord/useFetchTextRecords"

export default function Page() {
  // useFetchTextRecords hook to get all textRecords and loading/error status
  const { textRecords, loading, error } = useFetchTextRecords()

  return (
    <main className="relative">
      <div className="absolute top-0 left-0 right-0 z-20 bg-white bg-opacity-80 backdrop-blur-lg shadow-md">
        <Header />
      </div>
      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  )
}
