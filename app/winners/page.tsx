"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Calendar, ExternalLink, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WinnersPage() {
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
              Our Winners & Achievements
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Celebrating the success stories and achievements of our talented innovators.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Winners Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="competitions" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl">
                <TabsTrigger value="competitions">Competitions</TabsTrigger>
                <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="startups">Startups</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="competitions" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Competition Winners</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                  Our students have excelled in various national and international competitions, showcasing their
                  innovative ideas and technical skills.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Global Innovation Challenge 2023",
                    team: "Team Quantum",
                    members: ["Alex Johnson", "Sarah Chen", "Michael Rodriguez"],
                    project: "AI-Powered Sustainable Agriculture System",
                    position: "1st Place",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.1,
                  },
                  {
                    title: "International Tech Competition 2023",
                    team: "Digital Pioneers",
                    members: ["Emma Wilson", "David Kim", "Sophia Martinez"],
                    project: "Smart Urban Mobility Solution",
                    position: "2nd Place",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.2,
                  },
                  {
                    title: "National Student Innovation Awards",
                    team: "EcoTech",
                    members: ["James Taylor", "Olivia Brown", "Ethan Lee"],
                    project: "Waste Management Optimization System",
                    position: "1st Place",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.3,
                  },
                  {
                    title: "AI for Good Challenge",
                    team: "Neural Network",
                    members: ["Ryan Garcia", "Ava Thompson", "Noah Williams"],
                    project: "Healthcare Accessibility Platform",
                    position: "Winner",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.4,
                  },
                  {
                    title: "Robotics Excellence Competition",
                    team: "Mech Wizards",
                    members: ["Liam Anderson", "Isabella Clark", "Mason Davis"],
                    project: "Autonomous Disaster Response Robot",
                    position: "1st Place",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.5,
                  },
                  {
                    title: "Sustainable Technology Challenge",
                    team: "Green Innovators",
                    members: ["Zoe Parker", "Benjamin Moore", "Chloe Adams"],
                    project: "Renewable Energy Integration System",
                    position: "Grand Prize",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.6,
                  },
                ].map((winner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: winner.delay }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={winner.image || "/placeholder.svg"}
                          alt={winner.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 m-2 rounded-full text-sm font-bold">
                          {winner.position}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{winner.title}</h3>
                        <div className="flex items-center mb-2">
                          <Trophy className="h-4 w-4 text-primary mr-2" />
                          <span className="font-medium">{winner.team}</span>
                        </div>
                        <div className="flex items-start mb-2">
                          <Users className="h-4 w-4 text-primary mr-2 mt-1" />
                          <div>
                            {winner.members.map((member, i) => (
                              <div key={i} className="text-sm text-muted-foreground">
                                {member}
                              </div>
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          <span className="font-medium">Project:</span> {winner.project}
                        </p>
                        <Link href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                          View details <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hackathons" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathon Champions</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                  Our students have demonstrated exceptional problem-solving skills and creativity in various
                  hackathons.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Global Hack 2023",
                    team: "Code Crafters",
                    members: ["Daniel Park", "Mia Johnson", "Tyler Smith"],
                    project: "Real-time Disaster Response Platform",
                    position: "1st Place",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.1,
                  },
                  {
                    title: "HealthTech Hackathon",
                    team: "MediTech",
                    members: ["Sophia Lee", "Jackson Brown", "Ava Martinez"],
                    project: "AI-Powered Medical Diagnosis Assistant",
                    position: "Grand Prize",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.2,
                  },
                  {
                    title: "Sustainability Hack",
                    team: "EcoSolvers",
                    members: ["Emma Wilson", "Lucas Garcia", "Olivia Chen"],
                    project: "Smart Waste Sorting System",
                    position: "Winner",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.3,
                  },
                  {
                    title: "FinTech Innovation Challenge",
                    team: "BlockChain Wizards",
                    members: ["Ethan Davis", "Zoe Thompson", "Noah Anderson"],
                    project: "Secure Peer-to-Peer Payment System",
                    position: "1st Place",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.4,
                  },
                  {
                    title: "EdTech Hackathon",
                    team: "Learning Innovators",
                    members: ["Lily Taylor", "Mason Clark", "Isabella Rodriguez"],
                    project: "Adaptive Learning Platform",
                    position: "Winner",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.5,
                  },
                  {
                    title: "Smart City Hack",
                    team: "Urban Visionaries",
                    members: ["Benjamin Moore", "Chloe Adams", "Liam Wilson"],
                    project: "Integrated Urban Mobility Solution",
                    position: "1st Place",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.6,
                  },
                ].map((winner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: winner.delay }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={winner.image || "/placeholder.svg"}
                          alt={winner.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 m-2 rounded-full text-sm font-bold">
                          {winner.position}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{winner.title}</h3>
                        <div className="flex items-center mb-2">
                          <Trophy className="h-4 w-4 text-primary mr-2" />
                          <span className="font-medium">{winner.team}</span>
                        </div>
                        <div className="flex items-start mb-2">
                          <Users className="h-4 w-4 text-primary mr-2 mt-1" />
                          <div>
                            {winner.members.map((member, i) => (
                              <div key={i} className="text-sm text-muted-foreground">
                                {member}
                              </div>
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          <span className="font-medium">Project:</span> {winner.project}
                        </p>
                        <Link href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                          View details <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Award-Winning Projects</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                  Innovative projects developed by our students that have received recognition for their excellence and
                  impact.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                {[
                  {
                    title: "EcoSense: Environmental Monitoring System",
                    team: ["Ryan Johnson", "Emma Chen", "David Rodriguez"],
                    description:
                      "A comprehensive IoT-based system for monitoring environmental parameters in urban areas, providing real-time data for pollution control and urban planning.",
                    award: "Best Sustainable Technology Project",
                    organization: "International Green Tech Awards",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.1,
                  },
                  {
                    title: "MediAssist: Healthcare Accessibility Platform",
                    team: ["Sophia Lee", "Michael Brown", "Olivia Martinez"],
                    description:
                      "An AI-powered platform that improves healthcare accessibility in underserved areas through telemedicine, symptom analysis, and resource allocation.",
                    award: "Excellence in Social Impact",
                    organization: "Global Health Innovation Awards",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.2,
                  },
                  {
                    title: "SmartTransit: Urban Mobility Solution",
                    team: ["James Wilson", "Sarah Garcia", "Ethan Thompson"],
                    description:
                      "An integrated system that optimizes public transportation routes and schedules based on real-time demand and traffic conditions.",
                    award: "Best Smart City Innovation",
                    organization: "Urban Tech Summit",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.3,
                  },
                  {
                    title: "SecureLearn: Educational Data Protection",
                    team: ["Ava Davis", "Noah Anderson", "Lily Taylor"],
                    description:
                      "A comprehensive framework for protecting student data in digital learning environments while enabling personalized education.",
                    award: "Best EdTech Security Solution",
                    organization: "Education Innovation Awards",
                    image: "/placeholder.svg?height=400&width=600",
                    delay: 0.4,
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: project.delay }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col md:flex-row gap-6"
                  >
                    <div className="md:w-1/3 relative h-48 md:h-auto rounded-lg overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center mb-2">
                        <Award className="h-4 w-4 text-primary mr-2" />
                        <span className="font-medium text-primary">{project.award}</span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">{project.organization}</div>
                      <div className="flex items-start mb-3">
                        <Users className="h-4 w-4 text-muted-foreground mr-2 mt-1" />
                        <div className="text-sm text-muted-foreground">{project.team.join(", ")}</div>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <Link href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                        View project details <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="startups" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Successful Startups</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                  Innovative startups founded by our alumni that have achieved significant success and recognition.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                {[
                  {
                    name: "GreenTech Solutions",
                    founders: ["Alex Johnson", "Sarah Chen"],
                    description:
                      "A cleantech startup developing innovative solutions for renewable energy storage and distribution.",
                    achievements: [
                      "Raised $2.5M in seed funding",
                      "Selected for Y Combinator",
                      "Partnerships with 3 major utility companies",
                    ],
                    year: "2021",
                    image: "/placeholder.svg?height=400&width=600",
                    website: "#",
                    delay: 0.1,
                  },
                  {
                    name: "MediSync",
                    founders: ["David Kim", "Emma Wilson"],
                    description:
                      "A healthtech startup creating AI-powered diagnostic tools for healthcare providers in underserved areas.",
                    achievements: [
                      "FDA approval for primary product",
                      "Raised $3.8M in Series A",
                      "Deployed in 50+ healthcare facilities",
                    ],
                    year: "2020",
                    image: "/placeholder.svg?height=400&width=600",
                    website: "#",
                    delay: 0.2,
                  },
                  {
                    name: "UrbanMobility",
                    founders: ["Michael Rodriguez", "Olivia Brown"],
                    description:
                      "A smart transportation platform that optimizes urban mobility through data analytics and AI.",
                    achievements: [
                      "Operating in 5 major cities",
                      "1M+ monthly active users",
                      "Strategic partnership with major automotive manufacturer",
                    ],
                    year: "2019",
                    image: "/placeholder.svg?height=400&width=600",
                    website: "#",
                    delay: 0.3,
                  },
                  {
                    name: "EduTech Innovations",
                    founders: ["James Taylor", "Sophia Martinez"],
                    description:
                      "An educational technology company developing adaptive learning platforms for K-12 students.",
                    achievements: [
                      "Used by 500+ schools",
                      "Raised $5M in Series A",
                      "EdTech Breakthrough Award winner",
                    ],
                    year: "2018",
                    image: "/placeholder.svg?height=400&width=600",
                    website: "#",
                    delay: 0.4,
                  },
                ].map((startup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: startup.delay }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col md:flex-row gap-6"
                  >
                    <div className="md:w-1/3 relative h-48 md:h-auto rounded-lg overflow-hidden">
                      <Image
                        src={startup.image || "/placeholder.svg"}
                        alt={startup.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{startup.name}</h3>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm text-muted-foreground">{startup.year}</span>
                        </div>
                      </div>
                      <div className="flex items-start mb-3">
                        <Users className="h-4 w-4 text-muted-foreground mr-2 mt-1" />
                        <div className="text-sm text-muted-foreground">Founded by {startup.founders.join(", ")}</div>
                      </div>
                      <p className="text-muted-foreground mb-3">{startup.description}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {startup.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href={startup.website}
                        className="text-primary font-medium inline-flex items-center hover:underline"
                      >
                        Visit website <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Hear from our winners about their experiences and how the Innovation Lab contributed to their success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The Innovation Lab provided us with the resources, mentorship, and collaborative environment we needed to turn our idea into a successful project. The experience was transformative for our careers.",
                name: "Alex Johnson",
                role: "Founder, GreenTech Solutions",
                image: "/placeholder.svg?height=200&width=200",
                delay: 0.1,
              },
              {
                quote:
                  "Winning the Global Innovation Challenge opened doors for us that we never thought possible. The support from the Innovation Lab team was instrumental in refining our concept and preparing for the competition.",
                name: "Sarah Chen",
                role: "Co-founder, GreenTech Solutions",
                image: "/placeholder.svg?height=200&width=200",
                delay: 0.2,
              },
              {
                quote:
                  "The mentorship and technical resources available at the Innovation Lab were crucial for developing our prototype. The interdisciplinary environment helped us approach problems from multiple perspectives.",
                name: "David Kim",
                role: "Co-founder, MediSync",
                image: "/placeholder.svg?height=200&width=200",
                delay: 0.3,
              },
              {
                quote:
                  "The Innovation Lab's network of industry partners provided valuable feedback and eventually led to our first major client. The experience prepared us for the challenges of launching a startup.",
                name: "Emma Wilson",
                role: "CTO, MediSync",
                image: "/placeholder.svg?height=200&width=200",
                delay: 0.4,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: testimonial.delay }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-background p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Winners?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take the first step towards turning your innovative ideas into award-winning projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/events">Upcoming Competitions</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
