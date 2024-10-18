"use client"

// React
import { Link } from "react-scroll"

// Cogs
import Cog from "./cogs/cog"

// Mantine
import { Overlay, Container, Title, Button, Text  } from "@mantine/core"

// Tabler 
import { IconArrowDown } from "@tabler/icons-react"

export default function Hero() {
  // Bison yellow and green
  const bisonYellow = "#FFC82E"
  const bisonGreen = "#005643"

  return (
    <div 
      id="hero"
      className="h-[100vh] flex items-center justify-center relative overflow-hidden bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/general/hero.jpg')" }}
    >
      {/* Overlay */}
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, .75) 40%)"
        opacity={1}
        zIndex={0}
      />

      {/* Content */}
      <Container size="md" className="relative z-10">
        <Title c="white">Welcome to the Bison Motorsports website</Title>
        <Text 
          size="xl" 
          mt="xl" 
          c="white"
        >
          something about the club here
        </Text>

        <Link
          to="content"
          smooth={true}
          duration={1000}
          className="w-full cursor-pointer"
        >
          <Button 
            classNames={{ inner: "text-bison-yellow text-lg md:text-xl" }}
            variant="filled"
            color="#005643"
            size="xl" 
            radius="md"
            mt="xl"
            rightSection={<IconArrowDown size={25} />}
          >
            Learn more
          </Button>
        </Link>
      </Container>

      {/* Always visible cogs */}
      {/* Top left */}
      <div className="absolute top-[-400px] left-[-400px] opacity-55">
        <Cog 
          color={bisonYellow} 
          width={700}
          height={700}
        />
      </div>
      {/* Bottom right */}
      <div className="absolute bottom-[-400px] right-[-400px] opacity-55">
        <Cog 
          color={bisonGreen} 
          width={700}
          height={700}
        />
      </div>

      {/* Extra cogs for medium screens */}
      {/* Top right */}
      <div className="hidden md:block absolute top-[-400px] right-[-150px] opacity-55">
        <Cog 
          color={bisonGreen} 
          width={550}
          height={550}
        />
      </div>
      {/* Bottom left */}
      <div className="hidden md:block absolute bottom-[-100px] left-[-400px] opacity-55">
        <Cog 
          color={bisonYellow} 
          width={600}
          height={600}
        />
      </div>

      {/* Even more cogs for xl screens */}
      {/* Middle right */}
      <div className="hidden 2xl:block absolute right-[-400px] opacity-55">
        <Cog 
          color={bisonYellow} 
          width={550}
          height={550}
        />
      </div>
      {/* Middle bottom */}
      <div className="hidden xl:block absolute bottom-[-500px] opacity-55">
        <Cog 
          color={bisonYellow} 
          width={600}
          height={600}
        />
      </div>
      {/* Middle top */}
      <div className="hidden xl:block absolute top-[-500px] opacity-55">
        <Cog 
          color={bisonYellow} 
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}
