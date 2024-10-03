"use client"

// React
import { useState } from "react"

// Mantine
import { Menu, Button } from "@mantine/core"

// Tabler Icons
import { IconSnowflake, IconFlame, IconBolt, IconEngine, IconHeartHandshake } from "@tabler/icons-react"

export default function Header() {
    return (
        <main>
            {/* Title */}
            <div className="text-center grid grid-cols-1 bg-bison-green py-8 sm:py-8">
                <div className="text-bison-yellow font-extrabold text-2xl sm:text-4xl px-4 sm:px-8">
                    Welcome to Bison Motorsports
                </div>
            </div>

            {/* Navbar */}
            <div className="text-center grid grid-cols-1 sm:grid-cols-4">
                {/* Clean Snow */}
                <Menu
                    withArrow
                >
                    <Menu.Target>
                        <Button
                            leftSection={<IconSnowflake size="1.5rem" stroke={1.5} />}
                            color="rgba(255, 255, 255, 1)"
                            radius={0}
                            className="relative text-bison-green hover:text-bison-yellow transition duration-200 font-bold xl:text-2xl md:text-lg border-none transition-none active:transform-none active:bg-inherit"
                        >
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] border-r-4 border-bison-green">
                            </span>
                            Clean Snow
                        </Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/media">
                            Media
                        </Menu.Item>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/mission">
                            Mission
                        </Menu.Item>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/sign-in">
                            Sign-In
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>

                {/* Formula Combustion */}
                <Menu
                    withArrow
                >
                    <Menu.Target>
                        <Button
                            leftSection={<IconFlame size="1.5rem" stroke={1.5} />}
                            color="rgba(255, 255, 255, 1)"
                            radius={0}
                            className="relative text-bison-green hover:text-bison-yellow transition duration-200 font-bold xl:text-2xl md:text-lg border-none transition-none active:transform-none active:bg-inherit"
                        >
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] border-r-4 border-bison-green">
                            </span>
                            Formula Combustion
                        </Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/media">
                            Media
                        </Menu.Item>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/mission">
                            Mission
                        </Menu.Item>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/sign-in">
                            Sign-In
                        </Menu.Item>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/history">
                            History
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>

                {/* Formula Electric */}
                <Menu
                    withArrow
                >
                    <Menu.Target>
                        <Button
                            leftSection={<IconBolt size="1.5rem" stroke={1.5} />}
                            color="rgba(255, 255, 255, 1)"
                            radius={0}
                            className="relative text-bison-green hover:text-bison-yellow transition duration-200 font-bold xl:text-2xl md:text-lg border-none transition-none active:transform-none active:bg-inherit"
                        >
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] border-r-4 border-bison-green">
                            </span>
                            Formula Electric
                        </Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/media">
                            Media
                        </Menu.Item>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/mission">
                            Mission
                        </Menu.Item>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/sign-in">
                            Sign-In
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>

                {/* Sponsors */}
                <Menu
                    withArrow
                >
                    <Menu.Target>
                        <Button
                            leftSection={<IconHeartHandshake size="1.5rem" stroke={1.5} />}
                            color="rgba(255, 255, 255, 1)"
                            radius={0}
                            className="relative text-bison-green hover:text-bison-yellow transition duration-200 font-bold xl:text-2xl md:text-lg border-none transition-none active:transform-none active:bg-inherit"
                        >
                            Sponsors
                        </Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/media">
                            Media
                        </Menu.Item>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/mission">
                            Mission
                        </Menu.Item>
                        <Menu.Item className="text-bison-green hover:text-bison-yellow transition duration-200" component="a" href="/sign-in">
                            Sign-In
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
        </main>
    )
}
