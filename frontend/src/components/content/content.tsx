// Client component
"use client"

// Componets
import Teams from "./teams/teams"

export default function Content() {
  // 

  return (
    <div id="content" className="relative overflow-x-hidden bg-[linear-gradient(145deg,_#2B2B2B,_#1A1A1A)]">
        <Teams />
    </div>
  )
}
