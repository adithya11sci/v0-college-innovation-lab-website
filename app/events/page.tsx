"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventsPage() {
  const [rsvpEvent, setRsvpEvent] = useState(null)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Events & Activities
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Join us for exciting tech talks, workshops, hackathons, and innovation showcases.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="upcoming" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                  Don't miss out on these exciting opportunities to learn, network, and innovate.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    id: 1,
                    title: "AI Innovation Workshop",
                    description: "A hands-on workshop exploring the latest advancements in artificial intelligence and machine learning. Participants will learn about practical applications and implementation strategies.",
                    date: "June 15, 2025",
                    time: "10:00 AM - 4:00 PM",
                    location: "Innovation Lab, Room 101",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "Workshop",
                    capacity: 30,
                    delay: 0.1
                  },
                  {
                    id: 2,
                    title: "Tech Talk: Future of Sustainable Computing",
                    description: "Join industry experts for an insightful discussion on sustainable computing practices and their impact on the environment and technology landscape.",
                    date: "June 22, 2025",
                    time: "2:00 PM - 4:00 PM",
                    location: "Virtual Event",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "Tech Talk",
                    capacity: 100,
                    delay: 0.2
                  },
                  {
                    id: 3,
                    title: "Summer Hackathon 2025",
                    description: "A 48-hour hackathon challenging participants to develop innovative solutions for urban mobility problems. Open to students, alumni, and industry professionals.",
                    date: "July 10-12, 2025",
                    time: "Starts at 6:00 PM",
                    location: "Innovation Center",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "Hackathon",
                    capacity: 150,
                    delay: 0.3
                  },
                  {
                    id: 4,
                    title: "Startup Showcase",
                    description: "An opportunity for emerging startups to present their innovations to potential investors, mentors, and industry partners. Networking session included.",
                    date: "July 25, 2025",
                    time: "5:00 PM - 8:00 PM",
                    location: "Innovation Lab, Main Hall",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "Showcase",
                    capacity: 80,
                    delay: 0.4
                  }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: event.delay }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 m-2 rounded-full text-sm font-bold">
                          {event.category}
                        </div\
