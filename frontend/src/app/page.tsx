// Client component
"use client"

// Components
import Hero from "@/components/hero/hero"
import Navbar from "@/components/navbar/navbar"
import Content from "@/components/content/content"
import Footer from "@/components/footer/footer"

// Mantine
import { Container } from "@mantine/core"

export default function Home() {
  // 

  return (
    <main>
      <Hero />
      <Navbar />
      <Content />
      <Footer />
    </main>
  )
}
