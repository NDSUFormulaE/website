// Client component
"use client";

// React
import { Link } from "react-scroll"

// Mantine
import { Image, Group, Burger, Drawer, Stack } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

export default function Navbar() {
  // Sections that we can navigate to
  const sections = [
    { id: "hero", displayName: "Home" },
    { id: "teams", displayName: "Teams" },
    { id: "leadership", displayName: "Leadership" },
    { id: "sponsors", displayName: "Sponsors" }
  ]

  // Toggle the burger menu
  const [opened, { toggle, close }] = useDisclosure(false)

  return (
    <div id="navbar" className="sticky top-0 z-50">
      <div className="border-b-2 border-bison-yellow">
        <Group className="bg-gradient-to-r from-bison-green to-[#185036] justify-between items-center px-4">
          {/* Logo and title */}
          <div className="flex items-center cursor-pointer">
            <Image  
              src="images/general/logo.png" 
              alt="Bison Motorsports logo" 
              className="h-[60px] w-[60px] object-contain"
            />
            <div className="text-2xl font-semibold md:text-4xl text-bison-yellow ml-2">
              Bison Motorsports
            </div>
          </div>

          {/* Nav links */}
          <div className="absolute hidden md:block right-10">
            <Group gap={"lg"}>
              {sections.map((section) => (
                <div key={section.id}>
                  <Link
                    to={section.id}
                    smooth={true}
                    spy={true}
                    duration={750}
                    className="relative font-semibold transition-colors duration-300 text-xl md:text-2xl cursor-pointer hover:text-bison-yellow after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bison-yellow after:transition-all after:duration-300 hover:after:w-full"
                    activeClass="text-bison-yellow"
                    offset={-59}
                  >
                    {section.displayName}
                  </Link>
                </div>
              ))}
            </Group>
          </div>

          {/* Burger */}
          <div className="absolute right-3 md:hidden">
            <Burger 
              opened={opened} 
              onClick={toggle}
              hiddenFrom="xs" 
              size="sm" 
              color="#FFC82E"
            />
          </div>
        </Group>
      </div>

      {/* Drawer for mobile navigation */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Navigation"
        padding="md"
        size="xs"
        position="right"
      >
        <Stack className="p-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              spy={true}
              duration={750}
              className="font-semibold transition-colors duration-300 text-xl cursor-pointer hover:text-bison-yellow"
              onClick={close}
            >
              {section.displayName}
            </Link>
          ))}
        </Stack>
      </Drawer>
    </div>
  )
}
