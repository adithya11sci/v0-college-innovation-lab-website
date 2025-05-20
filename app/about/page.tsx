"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, BookOpen, Lightbulb, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
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
              About Our Innovation Lab
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Fostering innovation, research, and technological advancement through collaboration and creativity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                Established in 2015, our Innovation Lab was founded with a vision to create a collaborative space where
                students, faculty, and industry partners could come together to solve complex problems and drive
                technological innovation.
              </p>
              <p className="mb-4 text-muted-foreground">
                What began as a small initiative has grown into a comprehensive innovation ecosystem that supports
                research, entrepreneurship, and technological development across multiple disciplines.
              </p>
              <p className="text-muted-foreground">
                Today, our lab stands as a testament to the power of collaborative innovation, having nurtured numerous
                successful projects, startups, and research initiatives that have made significant contributions to both
                academia and industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Innovation Lab Story"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision & Mission</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-background rounded-lg p-8 shadow-lg"
            >
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a leading center of innovation that transforms ideas into impactful solutions, nurtures future
                innovators, and contributes to technological advancement and societal progress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-background rounded-lg p-8 shadow-lg"
            >
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To create an ecosystem that fosters innovation through collaborative research, state-of-the-art
                facilities, industry partnerships, and comprehensive support for turning creative ideas into tangible
                solutions that address real-world challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              These principles guide our approach to innovation and collaboration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Embracing creative thinking and novel approaches to problem-solving.",
                icon: Lightbulb,
                delay: 0.1,
              },
              {
                title: "Collaboration",
                description: "Fostering partnerships across disciplines and sectors to achieve greater impact.",
                icon: Users,
                delay: 0.2,
              },
              {
                title: "Excellence",
                description: "Striving for the highest standards in research, development, and implementation.",
                icon: Award,
                delay: 0.3,
              },
              {
                title: "Inclusivity",
                description: "Creating an environment where diverse perspectives are valued and respected.",
                icon: Users,
                delay: 0.4,
              },
              {
                title: "Impact",
                description: "Focusing on solutions that create meaningful change in the real world.",
                icon: Lightbulb,
                delay: 0.5,
              },
              {
                title: "Continuous Learning",
                description: "Embracing a growth mindset and commitment to ongoing development.",
                icon: BookOpen,
                delay: 0.6,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
