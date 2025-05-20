"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Database,
  Laptop,
  Layers,
  Monitor,
  Printer,
  Server,
  Smartphone,
  Tablet,
  VibrateIcon as Vr,
  Users,
} from "lucide-react"

export default function FacilitiesPage() {
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
              Our Facilities
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                State-of-the-art infrastructure and resources to support innovation and research.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Facilities</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Our Innovation Lab is equipped with cutting-edge technology and resources to support a wide range of
              research and development activities.
            </p>
          </motion.div>

          <Tabs defaultValue="labs" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full max-w-3xl">
                <TabsTrigger value="labs">Labs</TabsTrigger>
                <TabsTrigger value="equipment">Equipment</TabsTrigger>
                <TabsTrigger value="software">Software</TabsTrigger>
                <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
                <TabsTrigger value="prototyping">Prototyping</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="labs" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Research Laboratories</h3>
                  <p className="mb-6 text-muted-foreground">
                    Our specialized research laboratories are designed to support various domains of innovation and
                    technological development.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Software Development Lab</h4>
                        <p className="text-muted-foreground">
                          Equipped with high-performance workstations for software development and testing
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Vr className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">VR/AR Lab</h4>
                        <p className="text-muted-foreground">
                          Immersive environment for developing and testing virtual and augmented reality applications
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Data Science Lab</h4>
                        <p className="text-muted-foreground">
                          Specialized infrastructure for big data processing and analysis
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Smartphone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Mobile Development Lab</h4>
                        <p className="text-muted-foreground">
                          Testing environment for mobile applications across various devices and platforms
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Research Laboratories"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="equipment" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Advanced Equipment"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Advanced Equipment</h3>
                  <p className="mb-6 text-muted-foreground">
                    Our lab is equipped with cutting-edge hardware to support various research and development
                    activities.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Server className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">High-Performance Computing Cluster</h4>
                        <p className="text-muted-foreground">For complex simulations and data processing tasks</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Printer className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">3D Printers and Scanners</h4>
                        <p className="text-muted-foreground">For rapid prototyping and model creation</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Monitor className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Advanced Display Systems</h4>
                        <p className="text-muted-foreground">Including large-format displays and visualization tools</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Tablet className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Testing Devices</h4>
                        <p className="text-muted-foreground">Various devices for testing applications and systems</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="software" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Software Resources</h3>
                  <p className="mb-6 text-muted-foreground">
                    We provide access to a wide range of software tools and platforms to support innovation and
                    development.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Development Environments</h4>
                        <p className="text-muted-foreground">
                          Professional IDEs and development tools for various programming languages
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Layers className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Design Software</h4>
                        <p className="text-muted-foreground">
                          Professional design and modeling software for UI/UX and 3D modeling
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Data Analysis Tools</h4>
                        <p className="text-muted-foreground">
                          Advanced tools for data processing, analysis, and visualization
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Server className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Cloud Services</h4>
                        <p className="text-muted-foreground">
                          Access to major cloud platforms for development and deployment
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Software Resources"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="collaboration" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Collaboration Spaces"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Collaboration Spaces</h3>
                  <p className="mb-6 text-muted-foreground">
                    Our lab features dedicated spaces designed to foster collaboration and creativity.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Laptop className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Meeting Rooms</h4>
                        <p className="text-muted-foreground">
                          Equipped with presentation tools and video conferencing capabilities
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Monitor className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Presentation Area</h4>
                        <p className="text-muted-foreground">
                          For demonstrations, workshops, and project presentations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Layers className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Brainstorming Areas</h4>
                        <p className="text-muted-foreground">Informal spaces designed to stimulate creative thinking</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Co-working Spaces</h4>
                        <p className="text-muted-foreground">Open areas for collaborative work and knowledge sharing</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="prototyping" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Prototyping Facilities</h3>
                  <p className="mb-6 text-muted-foreground">
                    Our prototyping facilities enable the rapid development and testing of innovative ideas.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Printer className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Fabrication Lab</h4>
                        <p className="text-muted-foreground">Equipment for creating physical prototypes and models</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Layers className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Materials Workshop</h4>
                        <p className="text-muted-foreground">Access to various materials for prototype construction</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Monitor className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Testing Stations</h4>
                        <p className="text-muted-foreground">Dedicated areas for testing and validating prototypes</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Electronics Workbench</h4>
                        <p className="text-muted-foreground">Tools and components for electronic prototyping</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Prototyping Facilities"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Access Information */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Facility Access</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Information about accessing and utilizing our Innovation Lab facilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Students",
                description:
                  "Enrolled students can access the facilities during regular hours with their student ID. Special projects may require faculty approval.",
                icon: Laptop,
                delay: 0.1,
              },
              {
                title: "Faculty",
                description:
                  "Faculty members have extended access hours and can reserve spaces for research activities and class projects.",
                icon: Users,
                delay: 0.2,
              },
              {
                title: "Industry Partners",
                description:
                  "Our industry partners can access facilities through scheduled appointments and collaborative research agreements.",
                icon: Layers,
                delay: 0.3,
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
