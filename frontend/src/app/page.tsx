// Client component
"use client"

// Components
import Hero from "@/components/hero/hero"
import Navbar from "@/components/navbar/navbar"
import Content from "@/components/content/content"

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <Content />
    </main>
  )
}
