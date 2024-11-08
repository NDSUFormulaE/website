// Client component
"use client"

// Componets
import Teams from "./teams/teams"
import Leadership from "./leadership/leadership"
import Sponsors from "./sponsors/sponsors"

export default function Content() {
  // 

  return (
    <div id="content" className="relative overflow-hidden bg-[linear-gradient(145deg,_#2B2B2B,_#1A1A1A)]">
        <Teams />
        <Leadership />
        <Sponsors />
    </div>
  )
}
