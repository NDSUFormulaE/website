// Client component
"use client"

// React
import { useState, useEffect } from "react"

// Mantine
import { Loader } from "@mantine/core"

export default function Header() {
  // 

  return (
    <main id="header">
      <div className="border-b-2 border-bison-yellow">
          <div className="absolute pl-2 cursor-pointer">
            <img src="images/general/logo.png" alt="Logo" className="h-[10vh]"/>
          </div>
          <div className="bg-bison-green h-[10vh] flex items-center justify-center">
              <span className="text-2xl font-semibold md:text-4xl text-bison-yellow">
                  Bison Motorsports
              </span>
          </div>
      </div>
    </main>
  )
}
