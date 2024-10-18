// Client component
"use client"

// React
import { useState, useEffect } from "react"

// Mantine
import { Container, Grid   } from "@mantine/core"

export default function Content() {
  // 

  return (
    <div id="content" className="overflow-x-hidden">
        <div 
            className="border-2 border-red-600 pt-[9vh] pb-[9vh]"
        >
            <Grid justify="space-between">
                <Grid.Col span={5} className="text-center border-2 border-red-500">
                    Clean Snow
                </Grid.Col>
                <Grid.Col span={7} className="text-center border-2 border-red-500 ">
                    img
                </Grid.Col>
                <Grid.Col span={6} className="text-center border-2 border-red-500">
                    img
                </Grid.Col>
                <Grid.Col span={6} className="text-center border-2 border-red-500">
                    Formula Electric
                </Grid.Col>
                <Grid.Col span={6} className="text-center border-2 border-red-500">
                    Clean Snow
                </Grid.Col>
                <Grid.Col span={6} className="text-center border-2 border-red-500 ">
                    img
                </Grid.Col>
                <Grid.Col span={6} className="text-center border-2 border-red-500">
                    Formula Electric
                </Grid.Col>
                <Grid.Col span={6} className="text-center border-2 border-red-500">
                    img
                </Grid.Col>
            </Grid >
        </div>
    </div>
  )
}
