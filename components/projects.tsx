"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"

interface Project {
  title: string
  description: string[]
  link?: string
  github?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "VibeMatch – ML Roommate Matcher",
      description: [
        "Built a machine-learning-based roommate matching app using personality traits and KNN clustering.",
        "Implemented user signup, profile upload, and preference inputs using React, Tailwind, and Flask.",
        "Designed to match roommates based on vibe compatibility, similar to Tinder but for co-living.",
      ],
      github: "https://github.com/gauravn17/vibematch",
    },
    {
      title: "AI-Powered Workflow Chatbot",
      description: [
        "Developed a conversational assistant that builds automation workflows in minutes.",
        "Used LangChain with OpenAI APIs and integrated a RESTful backend via Flask.",
        "Enabled intelligent step-by-step interactions to auto-generate Python scripts and workflows.",
      ],
      github: "https://github.com/gauravn17/ai-workflow-chatbot",
    },
    {
      title: "Medical Billing Assistant",
      description: [
        "Built a medical billing assistant that simplifies complex billing codes using LLMs.",
        "Integrated Streamlit for an interactive frontend and OpenAI GPT for smart text processing.",
        "Allows users to input symptoms and receive billing code suggestions with explanations.",
      ],
      github: "https://github.com/gauravn17/medical-billing-assistant",
    },
    {
      title: "Bitcoin Price Forecasting",
      description: [
        "Developed a forecasting model using Facebook Prophet to predict future Bitcoin prices.",
        "Preprocessed time-series data with technical indicators using Pandas TA and yfinance.",
        "Visualized trends and seasonality to understand market behavior for crypto investments.",
      ],
      github: "https://github.com/gauravn17/bitcoin-price-forecasting",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-lightblue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-10 bg-navy mr-4"></div>
            <span className="text-navy font-medium">Projects</span>
            <div className="h-[1px] w-10 bg-navy ml-4"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-heading">Featured Projects</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my work combining data, AI, and software engineering to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group card-hover"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-4 font-heading">{project.title}</h3>

                <ul className="space-y-2 mb-4">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center text-navy font-medium hover:text-navy/80 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} className="mr-2" />
                      GitHub
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center text-navy font-medium hover:text-navy/80 transition-colors group"
                    >
                      View Project
                      <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={16} />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

