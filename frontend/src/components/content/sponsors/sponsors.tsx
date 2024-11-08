// Client component
"use client"

// React

// Mantine
import { Container, Title, Grid, Card, Image, Text } from "@mantine/core"

export default function Sponsors() {
    // Sponsors
    const sponsors = [
        { src: "/images/sponsors/bobcat.png", alt: "Bobcat logo", width: 100, height: 100 },
        { src: "/images/sponsors/john-deere.png", alt: "John Deere logo", width: 100, height: 100 },
        { src: "/images/sponsors/marvin.png", alt: "Marvin Windows logo", width: 100, height: 100 },
        { src: "/images/sponsors/grandy-nine.png", alt: "Grandy Nine logo", width: 100, height: 100 },
        { src: "/images/sponsors/mcneilus.png", alt: "McNeilus logo", width: 100, height: 100 },
        { src: "/images/sponsors/sisu.png", alt: "Sisu logo", width: 50, height: 50 },
        { src: "/images/sponsors/h&s-automotive.webp", alt: "H&S Automotive logo", width: 100, height: 100 }
    ]

    return (
        <div id="sponsors" className="relative">
            <Title order={1} className="text-white text-center pt-[6vh]">Sponsors</Title>
            <Container className="pt-[6vh] pb-[6vh]" size="xl">      
                <Container className="bg-bison-white mt-[-3vh] border-4 rounded border-bison-white" size="md">
                    <Grid>
                        {sponsors.map((sponsor, index) => (
                            <Grid.Col
                                key={index}
                                span={6}
                                className="flex justify-center items-center"
                            >
                                <Image
                                    src={sponsor.src}
                                    alt={sponsor.alt}
                                    width={sponsor.width}
                                    height={sponsor.height}
                                    className="object-contain"
                                />
                            </Grid.Col>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </div>
    )
}