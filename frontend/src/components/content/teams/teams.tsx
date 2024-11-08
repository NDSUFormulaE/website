// Client component
"use client"

// React
import { useState, useEffect, useRef } from "react"

// Components
import Cog from "@/components/cog/cog"

// Mantine
import { Container, Grid, Image, Title } from "@mantine/core"
import { Carousel } from "@mantine/carousel"

// Embla
import Autoplay from "embla-carousel-autoplay"

export default function Teams() {
    // Bison yellow and green
    const bisonYellow = "#FFC82E"
    const bisonGreen = "#005643"

    // Images
    const images = {
        "combustion": [
            "images/teams/combustion/engine.png",
            "images/teams/combustion/engine2.png",
        ],
        "electric": [
            "images/teams/electric/code.jpg",
        ],
        "snow": [
            "images/teams/snow/snowmobile.jpg",
        ]
    }

    // Function to shuffle an array
    const shuffleArray = (array: string[]): string[] => {
        return array.sort(() => Math.random() - 0.5)
    }

    // Function to create slide components with explicit type
    const createSlides = (urls: string[], category: string): JSX.Element[] => {
        return urls.map((url, index) => (
            <Carousel.Slide key={`${category}-${index}`}>
                <Image src={url} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </Carousel.Slide>
        ))
    }

    // Create slides for each carousel with shuffled image order on each render
    const combustionSlides = createSlides(shuffleArray(images["combustion"]), "combustion")
    const electricSlides = createSlides(shuffleArray(images["electric"]), "electric")
    const snowSlides = createSlides(shuffleArray(images["snow"]), "snow")

    // Autoplay
    const autoplay = useRef(Autoplay({ delay: 5000 }))

    return (
        <div id="teams" className="relative">
            <Title order={1} className="text-white text-center pt-[6vh]">Teams</Title>
            <Container className="pt-[6vh]" size={"xl"}>      
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

                    {/* Formula Electric */}
                    <Grid.Col span={{ base: 12, md: 6 }} className="text-center cursor-pointer">
                        <Carousel 
                            height={300}
                            plugins={[autoplay.current]}
                            onMouseEnter={autoplay.current.stop}
                            onMouseLeave={autoplay.current.reset}
                            className="border-2 border-gray-500 shadow-lg"
                        >
                            {electricSlides}
                        </Carousel>
                    </Grid.Col>
                    <Grid.Col span={{ base: 5 }} className="hidden md:block text-center text-white">
                        Formula Electric
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
                            {snowSlides}
                        </Carousel>
                    </Grid.Col>
                </Grid>
            </Container>
            
            {/* Cogs*/}
            <div className="absolute top-[-100px] left-[-100px] opacity-10">
                <Cog 
                    color={bisonGreen} 
                    width={200}
                    height={200}
                    rpm={5}
                />
            </div>
            <div className="absolute top-[-100px] right-[-50px] opacity-10">
                <Cog 
                    color={bisonYellow} 
                    width={200}
                    height={200}
                    rpm={2}
                />
            </div>
        </div>
    )
}
