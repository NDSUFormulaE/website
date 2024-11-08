// Client component
"use client"

// React

// Mantine
import { Container, Title, Grid, Card, Image, Text } from "@mantine/core"

export default function Leadership() {
    // Leadership positions
    const leads = {
        "president": {
            name: "name here",
            displayName: "President",
            img: "images/leadership/president.jpg"
        },
        "vicePresident": {
            name: "name here",
            displayName: "Vice President",
            img: "images/leadership/president.jpg"
        },
        "treasurer": {
            name: "name here",
            displayName: "Treasurer",
            img: "images/leadership/president.jpg"
        },
        "secretary": {
            name: "name here",
            displayName: "Secretary",
            img: "images/leadership/president.jpg"
        }
    }

    // Make cards for each leadership position
    const leadershipCards = Object.entries(leads).map(([position, { name, displayName, img }]) => (
        <Grid.Col key={position} span={{ base: 6, md: 3 }}>
            <Card
                shadow="sm"
                padding="xl"
                radius="md" 
                withBorder
                classNames={{ root: "bg-[#1A1A1A] border-t-2" }}
            >
                <Card.Section>
                    <Image src={img} h={200}/>
                </Card.Section>
                <Card.Section className="text-white text-center bg-[#1A1A1A] pt-3 pb-3">
                    <Title order={2}>{displayName}</Title>
                    <Title order={3}>{name}</Title>
                </Card.Section>
            </Card>
        </Grid.Col>
    ))

    return (
        <div id="leadership" className="relative">
            <Title order={1} className="text-white text-center pt-[6vh]">Leadership</Title>
            <Container className="pt-[6vh]" size={"xl"}>      
                <Grid justify="space-between" gutter={50}>
                    {leadershipCards}
                </Grid>
            </Container>
        </div>
    )
}