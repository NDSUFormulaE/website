// Client component
"use client"

// Components
import Header from "@/components/header/header"
import Hero from "@/components/hero/hero"

// Mantine
import { Container } from "@mantine/core"
import Head from "next/head"

export default function Home() {
  // 

  return (
    <main>
      <Hero />
      <div className="">
        <Header />
      </div>
    </main>
  )
}
