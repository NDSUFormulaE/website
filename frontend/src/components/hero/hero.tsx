// Client component
"use client"

// React
import { useState, useEffect } from "react"

// Mantine
import { BackgroundImage } from "@mantine/core"

export default function Hero() {
    //

    return (
        <main>
            <div className="relative h-screen w-full overflow-hidden">
                <BackgroundImage
                    src="/images/general/parade.jpg"  // Correct image path
                    className="h-full w-full object-cover"
                >
                    {/* Overlay for fading effect */}
                    <div className="absolute inset-0 bg-black opacity-50" />

                    {/* Centered Content */}
                    <div className="flex items-center justify-center h-full relative z-10 px-4">
                        <h1 className="text-white text-3xl font-extrabold text-center drop-shadow-lg md:text-8xl">
                            Welcome to Bison Motorsports
                        </h1>
                    </div>
                </BackgroundImage>
            </div>
        </main>
    )
}
