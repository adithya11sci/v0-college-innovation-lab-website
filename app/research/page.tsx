"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Brain, Cloud, Database, Globe, Lightbulb, Shield, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResearchPage() {
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
              Research Focus Areas
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Exploring cutting-edge technologies and innovative solutions to address real-world challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Research Domains</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Our Innovation Lab focuses on several key research areas that drive technological advancement and
              innovation.
            </p>
          </motion.div>

          <Tabs defaultValue="ai" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl">
                <TabsTrigger value="ai">AI & Machine Learning</TabsTrigger>
                <TabsTrigger value="iot">IoT & Smart Systems</TabsTrigger>
                <TabsTrigger value="cybersecurity">Cybersecurity</TabsTrigger>
                <TabsTrigger value="sustainable">Sustainable Tech</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ai" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Artificial Intelligence & Machine Learning</h3>
                  <p className="mb-6 text-muted-foreground">
                    Our AI research focuses on developing intelligent systems that can learn, reason, and adapt to
                    complex environments. We explore various aspects of machine learning, deep learning, natural
                    language processing, and computer vision.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Deep Learning</h4>
                        <p className="text-muted-foreground">
                          Developing neural network architectures for complex pattern recognition tasks
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Data Analytics</h4>
                        <p className="text-muted-foreground">
                          Advanced techniques for extracting insights from large and complex datasets
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Cognitive Computing</h4>
                        <p className="text-muted-foreground">
                          Systems that mimic human cognitive functions for decision-making
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-8" asChild>
                    <Link href="#">
                      View AI Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="AI Research"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="iot" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="IoT Research"
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
                  <h3 className="text-2xl font-bold mb-4">Internet of Things & Smart Systems</h3>
                  <p className="mb-6 text-muted-foreground">
                    Our IoT research focuses on creating interconnected devices and systems for smart environments and
                    applications. We explore sensor networks, edge computing, and integrated systems for various
                    domains.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Smartphone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Smart Devices</h4>
                        <p className="text-muted-foreground">
                          Developing intelligent devices with sensing and communication capabilities
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Cloud className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Edge Computing</h4>
                        <p className="text-muted-foreground">
                          Processing data closer to the source for faster response and reduced bandwidth
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Connected Environments</h4>
                        <p className="text-muted-foreground">
                          Creating smart spaces that adapt to user needs and environmental conditions
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-8" asChild>
                    <Link href="#">
                      View IoT Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="cybersecurity" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Cybersecurity & Privacy</h3>
                  <p className="mb-6 text-muted-foreground">
                    Our cybersecurity research focuses on developing robust security measures for digital systems and
                    networks. We explore threat detection, privacy-preserving technologies, and secure system design.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Network Security</h4>
                        <p className="text-muted-foreground">
                          Protecting communication networks from unauthorized access and attacks
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Data Privacy</h4>
                        <p className="text-muted-foreground">
                          Techniques for preserving privacy in data collection, storage, and processing
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">AI-based Security</h4>
                        <p className="text-muted-foreground">
                          Using machine learning for threat detection and response
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-8" asChild>
                    <Link href="#">
                      View Security Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Cybersecurity Research"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="sustainable" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Sustainable Technology Research"
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
                  <h3 className="text-2xl font-bold mb-4">Sustainable Technology</h3>
                  <p className="mb-6 text-muted-foreground">
                    Our sustainable technology research focuses on developing eco-friendly solutions to address
                    environmental challenges. We explore energy-efficient systems, renewable technologies, and
                    sustainable computing.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Energy-Efficient Computing</h4>
                        <p className="text-muted-foreground">
                          Developing systems that minimize energy consumption while maintaining performance
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Green Technologies</h4>
                        <p className="text-muted-foreground">Innovative solutions for reducing environmental impact</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Cloud className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Smart Resource Management</h4>
                        <p className="text-muted-foreground">
                          Systems for optimizing the use of resources in various domains
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-8" asChild>
                    <Link href="#">
                      View Sustainability Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Research Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Explore some of our ongoing and completed research projects that showcase our innovation capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Campus Initiative",
                description:
                  "Developing an integrated IoT system to create a more efficient, sustainable, and user-friendly campus environment.",
                image: "/placeholder.svg?height=400&width=600",
                category: "IoT & Smart Systems",
                delay: 0.1,
              },
              {
                title: "AI-Powered Healthcare Assistant",
                description:
                  "Creating an intelligent system that assists healthcare providers in diagnosis and treatment planning.",
                image: "/placeholder.svg?height=400&width=600",
                category: "AI & Machine Learning",
                delay: 0.2,
              },
              {
                title: "Secure Distributed Computing Framework",
                description:
                  "Developing a framework for secure and privacy-preserving distributed computing in heterogeneous environments.",
                image: "/placeholder.svg?height=400&width=600",
                category: "Cybersecurity",
                delay: 0.3,
              },
              {
                title: "Energy-Efficient Edge Computing",
                description:
                  "Researching methods to optimize energy consumption in edge computing devices without compromising performance.",
                image: "/placeholder.svg?height=400&width=600",
                category: "Sustainable Technology",
                delay: 0.4,
              },
              {
                title: "Natural Language Understanding System",
                description:
                  "Developing advanced NLP techniques for better understanding and processing of human language.",
                image: "/placeholder.svg?height=400&width=600",
                category: "AI & Machine Learning",
                delay: 0.5,
              },
              {
                title: "Privacy-Preserving Data Analytics",
                description:
                  "Creating methods for analyzing sensitive data while maintaining privacy and confidentiality.",
                image: "/placeholder.svg?height=400&width=600",
                category: "Cybersecurity",
                delay: 0.6,
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.delay }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Link href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Publications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Publications</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Our research has been published in prestigious journals and conference proceedings.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Advanced Deep Learning Techniques for Smart City Applications",
                authors: "J. Smith, A. Johnson, R. Williams",
                journal: "IEEE Transactions on Smart Cities",
                year: "2023",
                delay: 0.1,
              },
              {
                title: "Privacy-Preserving Methods for Collaborative Machine Learning",
                authors: "M. Davis, S. Chen, K. Taylor",
                journal: "International Journal of Cybersecurity",
                year: "2023",
                delay: 0.2,
              },
              {
                title: "Energy-Efficient Protocols for IoT Sensor Networks",
                authors: "R. Brown, L. Garcia, P. Martinez",
                journal: "ACM Conference on IoT Systems",
                year: "2022",
                delay: 0.3,
              },
              {
                title: "Sustainable Computing: Challenges and Opportunities",
                authors: "T. Wilson, N. Anderson, E. Thomas",
                journal: "Journal of Green Computing",
                year: "2022",
                delay: 0.4,
              },
              {
                title: "Artificial Intelligence in Healthcare: Ethical Considerations",
                authors: "S. Lee, J. Kim, M. Patel",
                journal: "International Conference on AI Ethics",
                year: "2021",
                delay: 0.5,
              },
            ].map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: publication.delay }}
                viewport={{ once: true, amount: 0.3 }}
                className="mb-6 p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{publication.title}</h3>
                <p className="text-muted-foreground mb-1">{publication.authors}</p>
                <p className="text-sm">
                  <span className="font-medium">{publication.journal}</span>, {publication.year}
                </p>
                <Link
                  href="#"
                  className="text-primary text-sm font-medium inline-flex items-center mt-2 hover:underline"
                >
                  View publication <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="#">View All Publications</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
