"use client"

// React
import { Link } from "react-scroll"

// Components
import Cog from "@/components/cog/cog"

// Mantine
import { Overlay, Container, Title, Button, Text  } from "@mantine/core"

// Tabler 
import { IconArrowDown } from "@tabler/icons-react"

export default function Hero() {
  // Bison yellow and green
  const bisonYellow = "#FFC82E"
  const bisonGreen = "#005643"

  // RPM for cogs
  const rpm = 0.5

  return (
    <div 
      id="hero"
      className="h-[100vh] flex items-center justify-center relative overflow-hidden bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/general/hero.jpg')" }}
    >
      {/* Overlay */}
      <Overlay
        gradient="linear-gradient(210deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, .85) 40%)"
        opacity={1}
        zIndex={0}
      />

      {/* Content */}
      <Container size="md" className="relative z-10">
        <Title c="white">Bison Motorsports</Title>
        <Text 
          size="xl" 
          mt="xl" 
          c="white"
        >
          Bison Motorsports is a product of the North Dakota State University Society of Automotive Engineers.
        </Text>

        <Link
          to="teams"
          smooth={true}
          duration={1000}
          className="w-full cursor-pointer"
          offset={-59}
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

      {/* Always visible cogs - sm/md */}
      {/* Top left */}
      <div className="absolute top-[-400px] left-[-400px] opacity-55">
        <Cog 
          color={bisonYellow} 
          width={700}
          height={700}
          rpm={rpm}
        />
      </div>
      {/* Bottom right */}
      <div className="absolute bottom-[-400px] right-[-400px] opacity-55">
        <Cog 
          color={bisonGreen} 
          width={700}
          height={700}
          rpm={rpm}
        />
      </div>

      {/* Extra cogs for lg/xl screens */}
      {/* Top right */}
      <div className="hidden lg:block md:hidden absolute top-[-400px] right-[-200px] opacity-55">
        <Cog 
          color={bisonGreen} 
          width={550}
          height={550}
          rpm={rpm}
        />
      </div>
      {/* Bottom left */}
      <div className="hidden lg:block md:hidden xl:block 2xl:hidden absolute bottom-[-400px] left-[-400px] opacity-55">
        <Cog 
          color={bisonYellow} 
          width={600}
          height={600}
          rpm={rpm}
        />
      </div>

      {/* Even more cogs for 2xl screens */}
      {/* Bottom left */}
      <div className="hidden 2xl:block absolute bottom-[-100px] left-[-400px] opacity-55">
        <Cog 
          color={bisonYellow} 
          width={600}
          height={600}
          rpm={rpm}
        />
      </div>
      {/* Middle bottom */}
      <div className="hidden 2xl:block absolute bottom-[-500px] opacity-55">
        <Cog 
          color={bisonGreen} 
          width={600}
          height={600}
          rpm={rpm}
        />
      </div>
      {/* Middle top */}
      <div className="hidden 2xl:block absolute top-[-500px] opacity-55">
        <Cog 
          color={bisonYellow} 
          width={600}
          height={600}
          rpm={rpm}
        />
      </div>
    </div>
  )
}
