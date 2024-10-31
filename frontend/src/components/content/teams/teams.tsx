// Client component
"use client"

// React
import { useState, useEffect, useRef } from "react"

// Components
import Cog from "@/components/cog/cog"

// Mantine
import { Container, Grid, Image } from "@mantine/core"
import { Carousel } from "@mantine/carousel"

// Embla
import Autoplay from "embla-carousel-autoplay"

export default function Teams() {
    // Bison yellow and green
    const bisonYellow = "#FFC82E"
    const bisonGreen = "#005643"

    // RPM for cogs
    const rpm = 0.25
    
    // Images
    const images = {
        "combustion": [
            "images/teams/combustion/engine.png",
            "images/teams/combustion/engine2.png",
        ],
        "electric": [

        ],
        "cleanSnow": [

        ]
    }

    // Create slide components for Combustion
    const combustionSlides = images["combustion"].map((url) => (
        <Carousel.Slide key={url}>
          <Image src={url} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </Carousel.Slide>
    ))

    // Autoplay
    const autoplay = useRef(Autoplay({ delay: 5000 }))

    return (
        <div id="teams" className="relative">
            <Container className="pt-[9vh] pb-[9vh]" size={"xl"}>      
                <Grid justify="space-between" gutter={50}>
                    {/* Formula Combustion */}
                    <Grid.Col span={{ base: 5 }} className="hidden md:block text-center text-white">
                        Formula Combustion
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }} className="text-center cursor-pointer">
                        <Carousel 
                            height={300}
                            plugins={[autoplay.current]}
                            onMouseEnter={autoplay.current.stop}
                            onMouseLeave={autoplay.current.reset}
                            className="border-2 border-gray-500 shadow-lg"
                        >
                            {combustionSlides}
                        </Carousel>
                    </Grid.Col>

                    {/* Formula Eletric */}
                    <Grid.Col span={{ base: 12, md: 6 }} className="text-center cursor-pointer">
                        <Carousel 
                            height={300}
                            plugins={[autoplay.current]}
                            onMouseEnter={autoplay.current.stop}
                            onMouseLeave={autoplay.current.reset}
                            className="border-2 border-gray-500 shadow-lg"
                        >
                            {combustionSlides}
                        </Carousel>
                    </Grid.Col>
                    <Grid.Col span={{ base: 5 }} className="hidden md:block text-center text-white">
                        Formula Eletric
                    </Grid.Col>

                    {/* Clean Snow */}
                    <Grid.Col span={{ base: 5 }} className="hidden md:block text-center text-white">
                        Clean Snow
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }} className="text-center cursor-pointer">
                        <Carousel 
                            height={300}
                            plugins={[autoplay.current]}
                            onMouseEnter={autoplay.current.stop}
                            onMouseLeave={autoplay.current.reset}
                            className="border-2 border-gray-500 shadow-lg"
                        >
                            {combustionSlides}
                        </Carousel>
                    </Grid.Col>
                </Grid >
            </Container>
            
            {/* Cogs*/}
            <div className="absolute top-[-100px] left-[-100px] opacity-35">
                <Cog 
                    color={bisonYellow} 
                    width={200}
                    height={200}
                    rpm={rpm}
                />
            </div>
        </div>
    )
}
